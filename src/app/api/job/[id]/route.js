import { NextResponse } from 'next/server';
const Job = require('@/lib/models/JobModel');
import connectDB from '@/lib/config/db';

export async function GET(request, context) {
  try {
    await connectDB();
    const params = await context.params;
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { job },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}


export async function POST(request, context) {
  try {
    await connectDB();
    const params = await context.params;
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status } = body;

    // Only allow "open" or "closed" as valid status values
    if (!status || !["open", "closed"].includes(status)) {
      return NextResponse.json(
        { error: 'Status must be either "open" or "closed"' },
        { status: 400 }
      );
    }

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    job.status = status;
    await job.save();

    return NextResponse.json(
      { message: 'Job status updated successfully', job },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}

