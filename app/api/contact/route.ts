import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key (lazy initialization)
let resendInstance: Resend | null = null;
const getResend = () => {
  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
};

// Email recipient from env with fallback
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "bibeksah36@gmail.com";
const SENDER_EMAIL = process.env.EMAIL_USER || "bhoomija@nexalaris.com";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, subject, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    // Log the request (for debugging)
    console.log("Contact form received:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    // Create HTML email content for admin
    const adminHtmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h1 { color: #0B3D91; }
            h2 { color: #4b5563; margin-top: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; }
            .section { margin-bottom: 20px; background: #FAF7F0; padding: 15px; border-radius: 8px; }
            .label { font-weight: bold; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Contact Message</h1>

            <div class="section">
              <h2>Contact Details</h2>
              <p><span class="label">Name:</span> ${data.name}</p>
              <p><span class="label">Email:</span> ${data.email}</p>
              <p><span class="label">Subject:</span> ${data.subject}</p>
            </div>

            <div class="section">
              <h2>Message</h2>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            </div>

            <div class="section">
              <p><span class="label">Submitted on:</span> ${new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kathmandu",
                dateStyle: "full",
                timeStyle: "short"
              })} NPT</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version for admin
    const adminTextContent = `
New Contact Message

Contact Details:
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })} NPT
    `;

    // Create HTML email content for user auto-reply
    const userHtmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #0B3D91, #083070); padding: 30px; text-align: center; }
            .header h1 { color: white; margin: 0; }
            .content { padding: 30px; background: #FAF7F0; }
            .highlight { background: white; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #D4AF37; }
            .footer { background: #2B2B2B; padding: 20px; text-align: center; }
            .footer p { color: #999; font-size: 12px; margin: 0; }
            a { color: #FF8C00; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${data.name}!</h1>
            </div>
            <div class="content">
              <p>We've received your message and appreciate you taking the time to reach out to <strong>Bhumija Holidays</strong>.</p>

              <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>

              <div class="highlight">
                <h3 style="color: #0B3D91; margin-top: 0;">Your Message Summary:</h3>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong> ${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}</p>
              </div>

              <p>If your matter is urgent, please don't hesitate to reach us directly:</p>
              <ul style="color: #666;">
                <li>Phone: <a href="tel:+9779840149464">+977 9840149464</a></li>
                <li>WhatsApp: <a href="https://wa.me/+9779840149464">+977 9840149464</a></li>
              </ul>

              <p>With warm regards,<br><strong style="color: #0B3D91;">The Bhumija Holidays Team</strong></p>

              <p style="font-size: 18px; color: #D4AF37; font-style: italic;">Dhanyabad (Thank you)!</p>
            </div>
            <div class="footer">
              <p>Bhumija Holidays | Balkhu, Kathmandu, Nepal<br>
              <a href="mailto:info@bhumijaholidays.com" style="color: #D4AF37;">info@bhumijaholidays.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version for user
    const userTextContent = `
Thank You, ${data.name}!

We've received your message and appreciate you taking the time to reach out to Bhumija Holidays.

Our team will review your inquiry and get back to you within 24 hours.

Your Message Summary:
Subject: ${data.subject}
Message: ${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}

If your matter is urgent, please don't hesitate to reach us directly:
- Phone: +977 9840149464
- WhatsApp: +977 9840149464

With warm regards,
The Bhumija Holidays Team

Dhanyabad (Thank you)!

---
Bhumija Holidays | Balkhu, Kathmandu, Nepal
info@bhumijaholidays.com
    `;

    try {
      const resend = getResend();

      // Send notification to admin
      const adminEmailResult = await resend.emails.send({
        from: `Bhumija Holidays <${SENDER_EMAIL}>`,
        to: [ADMIN_EMAIL],
        subject: `Contact Form: ${data.subject} - from ${data.name}`,
        html: adminHtmlContent,
        text: adminTextContent,
      });

      console.log("Admin email sent:", adminEmailResult);

      // Send auto-reply to user
      const userEmailResult = await resend.emails.send({
        from: `Bhumija Holidays <${SENDER_EMAIL}>`,
        to: [data.email],
        subject: "We've Received Your Message - Bhumija Holidays",
        html: userHtmlContent,
        text: userTextContent,
      });

      console.log("User email sent:", userEmailResult);

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
      });

    } catch (emailError) {
      console.error("Error sending email:", emailError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again or contact us directly.",
          error: emailError instanceof Error ? emailError.message : "Unknown email error",
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process your message. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
