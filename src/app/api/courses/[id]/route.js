import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Course from '@/lib/models/Course';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

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
      { 
        success: false, 
        message: 'Error deleting course', 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json(
        { success: false, message: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: course },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error fetching course', 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params; // Removed 'await' since params is not a promise

    // Get form data
    const formData = await request.formData();

    // Helper function to process images
    const uploadToCloudinary = async (file, folder) => {
      if (file instanceof File || file instanceof Blob) {
        const buffer = Buffer.from(await file.arrayBuffer());
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder, resource_type: 'auto' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.secure_url);
            }
          );
          uploadStream.end(buffer);
        });
      }
      return file; // Return as-is if it's not a File/Blob (assuming it's a URL string)
    };

    // Get existing course data
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return NextResponse.json(
        { success: false, message: 'Course not found' },
        { status: 404 }
      );
    }

    // Process images - handle both new uploads and existing URLs
    const imageFile = formData.get('image');
    const bannerImageFile = formData.get('bannerImage');
    
    const [image, instructorImage] = await Promise.all([
      imageFile ? uploadToCloudinary(imageFile, 'courses') : existingCourse.image,
      bannerImageFile ? uploadToCloudinary(bannerImageFile, 'instructors') : existingCourse.instructor?.image
    ]);

    // Parse array fields with proper fallbacks
    const parseArrayField = (fieldName) => {
      try {
        const value = formData.get(fieldName);
        return value ? JSON.parse(value) : existingCourse[fieldName];
      } catch (e) {
        return existingCourse[fieldName];
      }
    };

    // Build update data
    const updateData = {
      id: formData.get('id') || existingCourse.id,
      title: formData.get('title') || existingCourse.title,
      shortDescription: formData.get('shortDescription') || existingCourse.shortDescription,
      description: formData.get('description') || existingCourse.description,
      category: formData.get('category') || existingCourse.category,
      image,
      duration: formData.get('duration') || existingCourse.duration,
      level: formData.get('level') || existingCourse.level,
      price: Number(formData.get('price')) || existingCourse.price,
      oldPrice: Number(formData.get('oldPrice')) || existingCourse.oldPrice,
      students: Number(formData.get('students')) || existingCourse.students,
      rating: Number(formData.get('rating')) || existingCourse.rating,
      exercises: Number(formData.get('exercises')) || existingCourse.exercises,
      status: formData.get('status') || existingCourse.status,
      features: parseArrayField('features'),
      audience: parseArrayField('audience'),
      jobTitles: parseArrayField('jobTitles'),
      syllabus: parseArrayField('syllabus'),
      instructor: {
        name: formData.get('instructor[name]') || existingCourse.instructor?.name,
        title: formData.get('instructor[title]') || existingCourse.instructor?.title,
        bio: formData.get('instructor[bio]') || existingCourse.instructor?.bio,
        image: instructorImage
      }
    };

    // Update the course
    const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    return NextResponse.json(
      { success: true, data: updatedCourse },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error updating course', 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}