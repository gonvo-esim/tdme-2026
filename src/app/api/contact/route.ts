import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, company, subject, message } = await request.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailSubject = `Web${subject}`;
    
    const emailBody = `
New Contact Form Submission

Full Name: ${fullName}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'sales@tdme.net',
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
