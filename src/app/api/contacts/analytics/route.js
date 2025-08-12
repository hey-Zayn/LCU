// app/api/contacts/analytics/route.js
import { Contact } from '@/lib/models/Contact';
import connectDB from '@/lib/config/db';

export async function GET() {
  try {
    // console.log('Connecting to database...');
    await connectDB();
    
    // Verify database connection by counting documents
    const totalContacts = await Contact.countDocuments();
    // console.log(`Total contacts in database: ${totalContacts}`);
    
    if (totalContacts === 0) {
      console.warn('No contact data found in database');
      return new Response(JSON.stringify({
        success: true,
        data: {
          monthly: { labels: [], counts: [] },
          sources: []
        }
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    // console.log('Aggregating monthly data...');
    const monthlyData = await Contact.aggregate([
      {
        $group: {
          _id: { 
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          count: { $sum: 1 },
          sources: { $push: "$source" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    // console.log('Monthly aggregation result:', JSON.stringify(monthlyData, null, 2));

    // Process for chart.js
    const labels = monthlyData.map(item => 
      `${new Date(item._id.year, item._id.month-1).toLocaleString('default', { month: 'short' })} ${item._id.year}`
    );
    
    const counts = monthlyData.map(item => item.count);
    
    // Get source distribution
    const allSources = monthlyData.flatMap(item => item.sources);
    const sourceCounts = allSources.reduce((acc, source) => {
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    const sources = Object.entries(sourceCounts).map(([name, count]) => ({ name, count }));

    // console.log('Final analytics data prepared:', {
    //   monthly: { labels, counts },
    //   sources
    // });

    return new Response(JSON.stringify({
      success: true,
      data: {
        monthly: {
          labels,
          counts
        },
        sources
      }
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error('Analytics error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to fetch analytics'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}