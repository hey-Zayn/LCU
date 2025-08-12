import nodemailer from 'nodemailer';

export async function sendEmailsToList(emails, subject, html, senderName, password, email) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  console.log(" Subject: " + subject + " HTML: " + html + " Sender Name: " + senderName + " Password: " + password + " Email: " + email);


  const results = [];

  for (const email of emails) {
    try {
      await transporter.sendMail({
        from: `${senderName} <${email}>`,
        to: email,
        subject: subject,
        html: html,
      });
      results.push({ email, status: 'sent' });
    } catch (error) {
      results.push({ email, status: 'failed', error: error.message });
    }
  }

  return results;
}
