import connectDB from '@/lib/config/db';
import { NextResponse } from 'next/server';

const Job = require('@/lib/models/JobModel');

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    // Validate required fields
    const requiredFields = [
      'title',
      'description'
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new job
    const job = await Job.create({
      title: data.title,
      department: data.department || '',
      location: data.location || '',
      type: data.type || 'Full-time',
      description: data.description,
      requirements: data.requirements || [],
      responsibilities: data.responsibilities || [],
      salaryRange: data.salaryRange || {},
      postedBy: data.postedBy || '',
      status: data.status || 'open',
      applicationDeadline: data.applicationDeadline || null,
    });

    return NextResponse.json(
      { message: 'Job posted successfully', job },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    await connectDB();

    // Parse query parameters for filtering, pagination, etc.
    const { searchParams } = new URL(request.url);

    // Optional: filter by status, department, etc.
    const filter = {};
    if (searchParams.has('status')) {
      filter.status = searchParams.get('status');
    }
    if (searchParams.has('department')) {
      filter.department = searchParams.get('department');
    }

    // Pagination
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const skip = (page - 1) * limit;

    // Query jobs with filter, sort, and pagination
    const jobs = await Job.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await Job.countDocuments(filter);

    return NextResponse.json(
      {
        jobs,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}


export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Only allow updating fields that exist in the Job schema
    const allowedFields = [
      "title",
      "department",
      "location",
      "type",
      "description",
      "requirements",
      "responsibilities",
      "salaryMin",
      "salaryMax",
      "salaryCurrency",
      "postedBy",
      "status",
      "applicationDeadline"
    ];
    const updateData = {};
    for (const key of allowedFields) {
      if (body[key] !== undefined) {
        updateData[key] = body[key];
      }
    }

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedJob) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Job updated successfully", job: updatedJob },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
