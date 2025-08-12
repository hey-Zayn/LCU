import { NextResponse } from "next/server";
import CareerApplication from "@/lib/models/CareerModel";
import nodemailer from "nodemailer";
import connectDB from "@/lib/config/db";

// Helper to send email using nodemailer
async function sendStatusEmail({ to, subject, html }) {
  // Use environment variables for credentials
  const emailUser = process.env.SMTP_USER || process.env.MAIL_FROM ;
  const emailPass = process.env.SMTP_PASS ;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 587;

  if (!emailUser || !emailPass) {
    throw new Error("Email configuration is missing");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM || `"HR Team" <${emailUser}>`,
    to,
    subject,
    html,
  });
}

function getStatusMessage(status) {
  switch (status) {
    case "accepted":
      return "Congratulations! Your application has been accepted.";
    case "reviewed":
      return "Your application has been reviewed. We will contact you if you are shortlisted.";
    case "interview":
      return "Good news! You have been shortlisted for an interview. We will contact you with further details.";
    case "rejected":
      return "We regret to inform you that your application was not successful at this time.";
    default:
      return "Your application status has been updated.";
  }
}

export async function PATCH(request, context) {
  try {
    await connectDB();

    // Await context.params before using its properties
    const params = context.params && typeof context.params.then === "function"
      ? await context.params
      : context.params;
    const { id } = params || {};

    if (!id) {
      return NextResponse.json(
        { error: "Missing application ID" },
        { status: 400 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { status } = body || {};
    // Validate status
    const allowedStatuses = [
      "pending",
      "reviewed",
      "interview",
      "rejected",
      "accepted",
    ];
    if (!status || !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    const updated = await CareerApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    // Send email if status is one of the specified
    const notifyStatuses = ["accepted", "reviewed", "interview", "rejected"];
    if (notifyStatuses.includes(status)) {
      // Prepare applicant email
      const applicantEmail = updated.email;
      const applicantName = `${updated.firstName || ""} ${updated.lastName || ""}`.trim();
      const statusMsg = getStatusMessage(status);

      // Email to applicant
      if (applicantEmail) {
        try {
          await sendStatusEmail({
            to: applicantEmail,
            subject: `Your Application Status: ${status.charAt(0).toUpperCase() + status.slice(1)}`,
            html: `
              <p>Dear ${applicantName || "Applicant"},</p>
              <p>${statusMsg}</p>
              <p>Thank you for your interest in joining us.</p>
              <p>Best regards,<br/>HR Team</p>
            `,
          });
        } catch (err) {
          // Log but don't fail the API if email fails
          console.error("Failed to send applicant email:", err);
        }
      }

      // Email to admin
      const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || process.env.MAIL_FROM;
      if (adminEmail) {
        try {
          await sendStatusEmail({
            to: adminEmail,
            subject: `Application Status Updated: ${status.charAt(0).toUpperCase() + status.slice(1)}`,
            html: `
              <p>The status of an application has been updated.</p>
              <ul>
                <li><strong>Name:</strong> ${applicantName || "-"}</li>
                <li><strong>Email:</strong> ${applicantEmail || "-"}</li>
                <li><strong>Status:</strong> ${status}</li>
                <li><strong>Application ID:</strong> ${updated._id || updated.id}</li>
              </ul>
            `,
          });
        } catch (err) {
          // Log but don't fail the API if email fails
          console.error("Failed to send admin email:", err);
        }
      }
    }

    return NextResponse.json(
      { message: "Status updated successfully", application: updated },
      { status: 200 }
    );
  } catch (err) {
    console.error("PATCH /api/career/[id]/status error:", err);
    return NextResponse.json(
      { error: "Failed to update status", details: err.message },
      { status: 500 }
    );
  }
}
