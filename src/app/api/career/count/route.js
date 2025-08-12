import connectDB from '@/lib/config/db';
import { NextResponse } from 'next/server';

const Career = require('@/lib/models/CareerModel');

export async function GET() {
  try {
    await connectDB();
    const posts = await Career.find({});
    return NextResponse.json(
      { count: posts.length, posts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
