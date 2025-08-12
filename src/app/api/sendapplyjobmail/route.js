import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Destructure all required fields from the request body
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      postcode,
      city,
      country,
      role,
      education,
      expectedSalary,
      experience,
      currentlyWorking,
      comfortableWithLocation,
      acceptTerms
    } = await request.json();

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !postcode ||
      !city ||
      !country ||
      !role ||
      !education ||
      !expectedSalary ||
      !experience ||
      typeof currentlyWorking !== 'boolean' ||
      typeof comfortableWithLocation !== 'boolean' ||
      typeof acceptTerms !== 'boolean'
    ) {
      return NextResponse.json(
        { error: 'All fields are required and must be valid.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if terms are accepted
    if (!acceptTerms) {
      return NextResponse.json(
        { error: 'You must accept the terms and conditions.' },
        { status: 400 }
      );
    }

    // Email configuration
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_PASSWORD;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Admin email content
    const adminMailOptions = {
      from: emailUser,
      to: emailUser, // Send to yourself (admin)
      replyTo: email, // Reply to the applicant
      subject: 'New Job Application Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">New Job Application Submission</h2>
          <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <h3 style="color: #555; margin-top: 0;">Applicant Details</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Postcode:</strong> ${postcode}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Role Applied For:</strong> ${role}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Expected Salary:</strong> ${expectedSalary}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Currently Working:</strong> ${currentlyWorking ? 'Yes' : 'No'}</p>
            <p><strong>Comfortable With Location:</strong> ${comfortableWithLocation ? 'Yes' : 'No'}</p>
            <p><strong>Accepted Terms & Conditions:</strong> ${acceptTerms ? 'Yes' : 'No'}</p>
          </div>
          <p style="text-align: center; color: #777; font-size: 12px;">
            This message was sent via your website job application form on ${new Date().toLocaleDateString()}
          </p>
        </div>
      `,
    };

    // Applicant email content
    const applicantMailOptions = {
      from: emailUser,
      to: email, // Send to applicant
      subject: 'Your Job Application Has Been Submitted',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">Thank You for Your Application!</h2>
          <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for submitting your job application. We have received your application and our team will review it shortly.</p>
            <p><strong>Summary of your application:</strong></p>
            <ul>
              <li><strong>Role Applied For:</strong> ${role}</li>
              <li><strong>Education:</strong> ${education}</li>
              <li><strong>Expected Salary:</strong> ${expectedSalary}</li>
              <li><strong>Experience:</strong> ${experience}</li>
            </ul>
            <p>If you have any questions, feel free to reply to this email.</p>
            <p>Best regards,<br/>ForwaordSols Team</p>
          </div>
          <p style="text-align: center; color: #777; font-size: 12px;">
            This is an automated message confirming your job application submission on ${new Date().toLocaleDateString()}.
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    const [adminInfo, applicantInfo] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(applicantMailOptions),
    ]);
    console.log('Admin email sent:', adminInfo.messageId);
    console.log('Applicant email sent:', applicantInfo.messageId);

    return NextResponse.json(
      { success: true, message: 'Application email sent to admin and applicant successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send application email' },
      { status: 500 }
    );
  }
}