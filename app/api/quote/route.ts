import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.travelers || !data.destination) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the request (for debugging during development)
    console.log("Quote request received:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      travelers: data.travelers,
      destination: data.destination,
      startDate: data.startDate,
      endDate: data.endDate,
      budget: data.budget,
      interests: data.interests,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Send email notification to admin using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send notification to admin
        await resend.emails.send({
          from: "Bhumija Holidays <bhoomija@nexalaris.com>",
          to: process.env.ADMIN_EMAIL || "info@bhumijaholidays.com",
          subject: `New Quote Request from ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0B3D91, #083070); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">New Quote Request</h1>
              </div>
              <div style="padding: 30px; background: #FAF7F0;">
                <h2 style="color: #2B2B2B; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
                  Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0;">${data.phone || "Not provided"}</td>
                  </tr>
                </table>

                <h2 style="color: #2B2B2B; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 20px;">
                  Trip Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Travelers:</strong></td>
                    <td style="padding: 8px 0;">${data.travelers}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Destination:</strong></td>
                    <td style="padding: 8px 0; text-transform: capitalize;">${data.destination}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Travel Dates:</strong></td>
                    <td style="padding: 8px 0;">${data.startDate || "Flexible"} - ${data.endDate || "Flexible"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Budget:</strong></td>
                    <td style="padding: 8px 0;">${data.budget || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Interests:</strong></td>
                    <td style="padding: 8px 0;">${data.interests || "Not specified"}</td>
                  </tr>
                </table>

                ${data.message ? `
                <h2 style="color: #2B2B2B; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 20px;">
                  Additional Message
                </h2>
                <p style="background: white; padding: 15px; border-radius: 8px; line-height: 1.6;">
                  ${data.message}
                </p>
                ` : ""}

                <p style="margin-top: 30px; color: #666; font-size: 12px;">
                  Received on ${new Date().toLocaleString("en-US", {
                    timeZone: "Asia/Kathmandu",
                    dateStyle: "full",
                    timeStyle: "short"
                  })} NPT
                </p>
              </div>
            </div>
          `,
        });

        // Send auto-reply to user
        await resend.emails.send({
          from: "Bhumija Holidays <bhoomija@nexalaris.com>",
          to: data.email,
          subject: "We've Received Your Enquiry - Bhumija Holidays",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0B3D91, #083070); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">Namaste, ${data.name}!</h1>
              </div>
              <div style="padding: 30px; background: #FAF7F0;">
                <p style="font-size: 16px; line-height: 1.8; color: #2B2B2B;">
                  Thank you for reaching out to <strong>Bhumija Holidays</strong>. We're excited that you're
                  considering Nepal for your next journey!
                </p>

                <p style="font-size: 16px; line-height: 1.8; color: #2B2B2B;">
                  Your enquiry has been received and assigned to one of our travel experts. You can expect
                  a personalized response within <strong>24 hours</strong>, typically sooner.
                </p>

                <div style="background: white; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #D4AF37;">
                  <h3 style="color: #0B3D91; margin-top: 0;">In the meantime:</h3>
                  <ul style="color: #666; line-height: 1.8;">
                    <li>Browse our <a href="https://bhumijaholidays.com/destinations" style="color: #FF8C00;">destination guides</a> for Kathmandu and Janakpurdham</li>
                    <li>Read about <a href="https://bhumijaholidays.com/about" style="color: #FF8C00;">what makes Bhumija Holidays different</a></li>
                    <li>Check our <a href="https://bhumijaholidays.com/faq" style="color: #FF8C00;">FAQ</a> for common questions</li>
                  </ul>
                </div>

                <p style="font-size: 16px; line-height: 1.8; color: #2B2B2B;">
                  We look forward to helping you discover Nepal's extraordinary cultural heritage.
                </p>

                <p style="font-size: 16px; line-height: 1.8; color: #2B2B2B;">
                  With warm regards,<br>
                  <strong style="color: #0B3D91;">The Bhumija Holidays Team</strong>
                </p>

                <p style="font-size: 18px; color: #D4AF37; font-style: italic; margin-top: 20px;">
                  Dhanyabad (Thank you)!
                </p>
              </div>
              <div style="background: #2B2B2B; padding: 20px; text-align: center;">
                <p style="color: #999; font-size: 12px; margin: 0;">
                  Bhumija Holidays | Thamel, Kathmandu, Nepal<br>
                  <a href="mailto:info@bhumijaholidays.com" style="color: #D4AF37;">info@bhumijaholidays.com</a>
                </p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Don't fail the request if email fails - still return success
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
