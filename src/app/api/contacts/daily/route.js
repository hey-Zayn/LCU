// app/api/contacts/daily/route.js
import { Contact } from '@/lib/models/Contact';
import connectDB from '@/lib/config/db';

export async function GET() {
  try {
    await connectDB();
    
    // Get data grouped by day
    const dailyData = await Contact.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
      { $limit: 30 } // Last 30 days
    ]);

    // Process for chart.js
    const labels = dailyData.map(item => 
      `${item._id.month}/${item._id.day}/${item._id.year.toString().slice(2)}`
    );
    
    const counts = dailyData.map(item => item.count);

    return new Response(JSON.stringify({
      success: true,
      data: {
        labels,
        counts
      }
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error('Daily analytics error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}