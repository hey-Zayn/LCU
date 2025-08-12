import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { email, code } = body;

  if (!email || !code) {
    return new Response(JSON.stringify({ error: "Email and code are required" }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER ,
        pass: process.env.GMAIL_PASSWORD ,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is: ${code}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Verification email sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send verification email" }), {
      status: 500,
    });
  }
}
