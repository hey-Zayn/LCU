import { Contact } from '@/lib/models/Contact';
import connectDB from '@/lib/config/db';

export async function GET() {
  try {
    await connectDB();

    // Get data grouped by pageUrl
    const byPageUrl = await Contact.aggregate([
      {
        $group: {
          _id: "$pageUrl",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Get data grouped by location
    const byLocation = await Contact.aggregate([
      {
        $group: {
          _id: "$location",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Transform data for easier use in frontend
    const transform = (data) => data.map(item => ({
      source: item._id || 'Unknown',
      count: item.count
    }));

    return new Response(JSON.stringify({
      success: true,
      data: {
        byPageUrl: transform(byPageUrl),
        byLocation: transform(byLocation)
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error fetching page sources:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to fetch page sources'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}