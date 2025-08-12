import { NextResponse } from 'next/server';

import Course from '@/lib/models/Course';
import connectDB from '@/lib/config/db';

export async function PUT(request) {
  try {
    await connectDB();
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
