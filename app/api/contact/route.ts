import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, inquiryType, file } = await request.json();

    const emailData: {
      from: string;
      to: string[];
      subject: string;
      html: string;
      attachments?: Array<{
        filename: string;
        content: string;
        encoding: string;
      }>;
    } = {
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['amaricross111@gmail.com'],
      subject: `New Contact Form Submission: ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Add attachments if file exists
    if (file) {
      emailData.attachments = [{
        filename: file.filename,
        content: file.content.split('base64,')[1],
        encoding: 'base64',
      }];
    }
    const data = await resend.emails.send(emailData);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}