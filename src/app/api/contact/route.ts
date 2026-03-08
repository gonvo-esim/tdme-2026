import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

function createTransporter() {
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Email configuration missing:', {
        host: !!process.env.SMTP_HOST,
        user: !!process.env.SMTP_USER,
        pass: !!process.env.SMTP_PASSWORD,
      });
      return NextResponse.json(
        { error: 'Email configuration not set on server' },
        { status: 500 }
      );
    }

    const { fullName, email, company, application, subject, message } = await request.json();

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
Application: ${application || 'Not provided'}
Subject: ${subject}

Message:
${message}
    `.trim();

    const transporter = createTransporter();
    
    // Test connection first
    await transporter.verify();
    
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'sales@tdme.net',
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error instanceof Error ? error.message : error);
    console.error('Full error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
