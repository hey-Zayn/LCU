import connectDB from '@/lib/config/db';
import { NextResponse } from 'next/server';

const Job = require('@/lib/models/JobModel');

export async function GET() {
  try {
    await connectDB();
    const count = await Job.countDocuments();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
