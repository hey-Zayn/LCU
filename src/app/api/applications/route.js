import Application from '@/lib/models/Application';
import connectDB from '@/lib/config/db';
import nodemailer from 'nodemailer';

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, phone, message, course, pageUrl } = await req.json();

    // Save to database
    const newApplication = new Application({
      name,
      email,
      phone,
      message: message || '',
      course,
      pageUrl: pageUrl || '',
    });

    await newApplication.save();

    // Send notification email to admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `From: ${name} <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Application Received: ${course}`,
      text: `
        New application details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Message: ${message || 'No message provided'}
        Page URL: ${pageUrl || 'Unknown'}
      `,
      html: `
        <h1>New Application Received</h1>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <p><strong>Page URL:</strong> ${pageUrl || 'Unknown'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to applicant
    const applicantMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Application Received: ${course}`,
      text: `
        Thank you for your application for ${course}.
        
        We've received your details and our team will review your application shortly. 
        We'll contact you at ${phone} or ${email} if we need any additional information.
        
        Application Details:
        Name: ${name}
        Course: ${course}
        
        If you have any questions, please reply to this email.
      `,
      html: `
        <h1>Thank you for your application</h1>
        <p>We've received your application for <strong>${course}</strong>.</p>
        <p>Our team will review your application shortly. We'll contact you at <strong>${phone}</strong> or <strong>${email}</strong> if we need any additional information.</p>
        
        <h3>Application Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        
        <p>If you have any questions, please reply to this email.</p>
      `,
    };

    await transporter.sendMail(applicantMailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Application submitted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return new Response(JSON.stringify({ error: 'Failed to process application' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Add other HTTP methods as needed
export async function GET(req) {
  await connectDB();

  try {
    // Get query parameters for potential filtering
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status');
    const course = searchParams.get('course');

    // Build query object
    const query = {};
    if (status) query.status = status;
    if (course) query.course = new RegExp(course, 'i');

    // Calculate pagination values
    const skip = (page - 1) * limit;

    // Get applications with pagination and filtering
    const applications = await Application.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Application.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    return new Response(
      JSON.stringify({
        success: true,
        data: applications,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching applications:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch applications',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}