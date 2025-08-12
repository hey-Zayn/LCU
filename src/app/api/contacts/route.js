// app/api/contacts/route.js
import connectDB from '@/lib/config/db';
import { Contact } from '@/lib/models/Contact';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Incoming contact data:', body);

    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name, email, and phone are required fields' 
        }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Connect to database
    await connectDB();
    console.log('Successfully connected to database');

    // Create and save contact
    const newContact = new Contact({
      name: body.name,
      email: body.email,
      company: body.company || '',
      phone: body.phone,
      service: body.service || '',
      source: body.source || 'unknown',
      message: body.message || '',
      pageUrl: body.pageUrl || '',
      location: body.location || 'unknown',
      verified: true
    });

    const savedContact = await newContact.save();
    console.log('Contact saved successfully:', savedContact);

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: savedContact 
      }),
      { 
        status: 201, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in contacts API:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Fetch data with pagination
    const [contacts, total] = await Promise.all([
      Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(), // Convert to plain JS objects
      Contact.countDocuments()
    ]);

    console.log(`Fetched ${contacts.length} of ${total} contacts`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: {
          contacts,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
          }
        }
      }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache' // Prevent caching for real-time data
        } 
      }
    );
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to fetch contacts',
        data: null
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}