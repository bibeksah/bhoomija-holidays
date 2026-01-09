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
    if (!data.name || !data.email || !data.travelers || !data.destination) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, travelers, and destination are required",
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
    console.log("Quote request received:", {
      name: data.name,
      email: data.email,
      destination: data.destination,
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
            <h1>New Quote Request</h1>

            <div class="section">
              <h2>Contact Information</h2>
              <p><span class="label">Name:</span> ${data.name}</p>
              <p><span class="label">Email:</span> ${data.email}</p>
              <p><span class="label">Phone:</span> ${data.phone || "Not provided"}</p>
            </div>

            <div class="section">
              <h2>Trip Details</h2>
              <p><span class="label">Travelers:</span> ${data.travelers}</p>
              <p><span class="label">Destination:</span> ${data.destination}</p>
              <p><span class="label">Travel Dates:</span> ${data.startDate || "Flexible"} - ${data.endDate || "Flexible"}</p>
              <p><span class="label">Budget:</span> ${data.budget || "Not specified"}</p>
              <p><span class="label">Interests:</span> ${data.interests || "Not specified"}</p>
            </div>

            ${data.message ? `
            <div class="section">
              <h2>Additional Message</h2>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            </div>
            ` : ""}

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
New Quote Request

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Trip Details:
Travelers: ${data.travelers}
Destination: ${data.destination}
Travel Dates: ${data.startDate || "Flexible"} - ${data.endDate || "Flexible"}
Budget: ${data.budget || "Not specified"}
Interests: ${data.interests || "Not specified"}

${data.message ? `Additional Message:\n${data.message}` : ""}

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
              <h1>Namaste, ${data.name}!</h1>
            </div>
            <div class="content">
              <p>Thank you for reaching out to <strong>Bhumija Holidays</strong>. We're excited that you're considering Nepal for your next journey!</p>

              <p>Your enquiry has been received and assigned to one of our travel experts. You can expect a personalized response within <strong>24 hours</strong>, typically sooner.</p>

              <div class="highlight">
                <h3 style="color: #0B3D91; margin-top: 0;">In the meantime:</h3>
                <ul style="color: #666;">
                  <li>Browse our <a href="https://bhumijaholidays.com/destinations">destination guides</a> for Kathmandu and Janakpurdham</li>
                  <li>Read about <a href="https://bhumijaholidays.com/about">what makes Bhumija Holidays different</a></li>
                  <li>Check our <a href="https://bhumijaholidays.com/faq">FAQ</a> for common questions</li>
                </ul>
              </div>

              <p>We look forward to helping you discover Nepal's extraordinary cultural heritage.</p>

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
Namaste, ${data.name}!

Thank you for reaching out to Bhumija Holidays. We're excited that you're considering Nepal for your next journey!

Your enquiry has been received and assigned to one of our travel experts. You can expect a personalized response within 24 hours, typically sooner.

In the meantime:
- Browse our destination guides: https://bhumijaholidays.com/destinations
- Read about us: https://bhumijaholidays.com/about
- Check our FAQ: https://bhumijaholidays.com/faq

We look forward to helping you discover Nepal's extraordinary cultural heritage.

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
        subject: `New Quote Request from ${data.name}`,
        html: adminHtmlContent,
        text: adminTextContent,
      });

      console.log("Admin email sent:", adminEmailResult);

      // Send auto-reply to user
      const userEmailResult = await resend.emails.send({
        from: `Bhumija Holidays <${SENDER_EMAIL}>`,
        to: [data.email],
        subject: "We've Received Your Enquiry - Bhumija Holidays",
        html: userHtmlContent,
        text: userTextContent,
      });

      console.log("User email sent:", userEmailResult);

      return NextResponse.json({
        success: true,
        message: "Your request has been sent successfully! We'll get back to you within 24 hours.",
      });

    } catch (emailError) {
      console.error("Error sending email:", emailError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your request. Please try again or contact us directly.",
          error: emailError instanceof Error ? emailError.message : "Unknown email error",
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Error processing quote request:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process your request. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
