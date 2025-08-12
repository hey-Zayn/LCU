import nodemailer from "nodemailer";

export async function POST(request) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error("Missing email credentials in environment variables");
    return Response.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const {
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      jobTitle,
      source,
      location = "unknown", 
      pageUrl,
    } = await request.json();

    // Basic validation
    if (!fullName || !businessEmail || !phoneNumber) {
      return Response.json(
        { message: "Full name, business email, and phone number are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 24px; border-radius: 8px; background-color: #ffffff;">
        <h2 style="border-bottom: 1px solid #f1f1f1; padding-bottom: 12px; text-align: center;">New Contact Submission – Forwardsols</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
        <p><strong>Business Email:</strong> ${businessEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Job Title:</strong> ${jobTitle || "N/A"}</p>
        <p><strong>How did they hear about us:</strong> ${source}</p>
        <p><strong>Form submitted from:</strong> ${location}</p> <!-- Added location field -->
        <p><strong>Page URL:</strong> ${pageUrl}</p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #dddddd;" />
        <p style="font-size: 0.9rem; color: #555555;">
          This message was submitted through the Forwardsols website ${location} page.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${fullName}" <${businessEmail}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${fullName} (${location})`, // Include location in subject
      html: htmlContent,
    });

    return Response.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json(
      { message: "Failed to send message", error: error.message },
      { status: 500 }
    );
  }
}