import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Course from '@/lib/models/Course';
import { v2 as cloudinary } from 'cloudinary';

const formatValidationError = (error) => {
  const errors = {};
  for (let field in error.errors) {
    errors[field] = error.errors[field].message;
  }
  return errors;
};




// Cloudinary config (use env or fallback)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dd9j33dja",
  api_key: process.env.CLOUDINARY_API_KEY || "329347982555784",
  api_secret: process.env.CLOUDINARY_API_SECRET || "4avhppvyg6hTcbXYBH4cTKjiDK8",
});

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();

    // Debug: Log all received fields
    console.log('Received FormData fields:');
    for (const [key, value] of formData.entries()) {
      console.log(key, value instanceof File ? `File: ${value.name}` : value);
    }

    // Required fields check (updated)
    const requiredFields = {
      basic: [
        'id',
        'title',
        'shortDescription',
        'description',
        'category',
        'duration',
        'level',
        'price',
        'status' // <-- Added status as required field
      ],
      images: ['image', 'bannerImage'],
      instructor: ['instructor[name]', 'instructor[title]', 'instructor[bio]'],
      arrays: ['features', 'audience', 'jobTitles', 'syllabus']
    };

    // Check for missing fields
    const missingFields = [];
    
    Object.entries(requiredFields).forEach(([type, fields]) => {
      fields.forEach(field => {
        if (!formData.has(field)) {
          missingFields.push(field);
        }
      });
    });

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    // Process images
    const processImage = async (file, folder) => {
      if (file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer());
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder, resource_type: 'auto' },
            (error, result) => error ? reject(error) : resolve(result.secure_url)
          ).end(buffer);
        });
      }
      return file; // Already a URL
    };

    const [imageUrl, bannerImageUrl] = await Promise.all([
      processImage(formData.get('image'), 'courses'),
      processImage(formData.get('bannerImage'), 'courses/banners')
    ]);

    // Build course data
    const courseData = {
      id: formData.get('id'),
      title: formData.get('title'),
      shortDescription: formData.get('shortDescription'),
      description: formData.get('description'),
      category: formData.get('category'),
      image: imageUrl,
      bannerImage: bannerImageUrl,
      duration: formData.get('duration'),
      level: formData.get('level'),
      price: Number(formData.get('price')),
      oldPrice: formData.get('oldPrice') ? Number(formData.get('oldPrice')) : null,
      students: Number(formData.get('students')) || 0,
      rating: Number(formData.get('rating')) || 0,
      exercises: Number(formData.get('exercises')) || 0,
      features: JSON.parse(formData.get('features')),
      audience: JSON.parse(formData.get('audience')),
      jobTitles: JSON.parse(formData.get('jobTitles')),
      syllabus: JSON.parse(formData.get('syllabus')),
      instructor: {
        name: formData.get('instructor[name]'),
        title: formData.get('instructor[title]'),
        bio: formData.get('instructor[bio]'),
        image: bannerImageUrl
      },
      status: formData.get('status') // <-- Add status to courseData
    };

    const course = await Course.create(courseData);
    return NextResponse.json({ success: true, data: course }, { status: 201 });

  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error creating course' },
      { status: 500 }
    );
  }
}





export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    const query = {};
    const options = { sort: { createdAt: -1 } };
    
    // Pagination
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;
    
    options.skip = skip;
    options.limit = limit;
    
    // Filters
    const filters = ['category', 'level', 'minPrice', 'maxPrice', 'minRating', 'search'];
    filters.forEach(param => {
      const value = searchParams.get(param);
      if (value) {
        switch(param) {
          case 'category':
          case 'level':
            query[param] = value;
            break;
          case 'minPrice':
            query.price = { ...query.price, $gte: Number(value) };
            break;
          case 'maxPrice':
            query.price = { ...query.price, $lte: Number(value) };
            break;  
          case 'minRating':
            query.rating = { $gte: Number(value) };
            break;
          case 'search':
            query.$text = { $search: value };
            options.select = { score: { $meta: 'textScore' } };
            options.sort = { score: { $meta: 'textScore' }, ...options.sort };
            break;
        }
      }
    });
    
    const total = await Course.countDocuments(query);
    const courses = await Course.find(query, null, options);
    
    return NextResponse.json({
      success: true,
      count: courses.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: courses,
    });
    
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Error fetching courses',
        error: error.message 
      },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    const deletedCourse = await Course.findByIdAndDelete(id);
    
    if (!deletedCourse) {
      return NextResponse.json(
        { success: false, message: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Course deleted successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json(
      { success: false, message: 'Error deleting course', error: error.message },
      { status: 500 }
    );
  }
}


export async function PUT(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id, status } = body;

    // Only allow status to be 'open' or 'close'
    const allowedStatuses = ['open', 'close'];
    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: 'Course id and status are required' },
        { status: 400 }
      );
    }

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Status must be either 'open' or 'close'" },
        { status: 400 }
      );
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return NextResponse.json(
        { success: false, message: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: `Course status updated to '${status}'`, course: updatedCourse },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating course status:', error);
    return NextResponse.json(
      { success: false, message: 'Error updating course status', error: error.message },
      { status: 500 }
    );
  }
}
