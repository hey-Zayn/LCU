import { NextResponse } from 'next/server';
import { sendEmailsToList } from '@/lib/mailer';

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // Get all form fields
    const file = formData.get('file');
    const email = formData.get('email');
    const password = formData.get('password');
    const senderName = formData.get('senderName');
    const subject = formData.get('subject');
    const html = formData.get('html');

    // Validate required fields
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Process the CSV file (keeping your extraction logic)
    const text = await file.text();
    const lines = text.split('\n');
    const header = lines[0].split(',');
    const emailIndex = header.findIndex(col => col.trim().toLowerCase() === 'email');
    
    if (emailIndex === -1) {
      return NextResponse.json({ error: 'CSV must contain an "email" column' }, { status: 400 });
    }

    const emails = [];
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',');
        if (values[emailIndex]) {
          emails.push(values[emailIndex].trim().toLowerCase());
        }
      }
    }

    if (emails.length === 0) {
      return NextResponse.json({ error: 'No valid emails found in CSV' }, { status: 400 });
    }

    // Send emails with all parameters
    const results = await sendEmailsToList(
      emails,
      subject,
      html,
      senderName || '',
      password,
      email
    );

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};