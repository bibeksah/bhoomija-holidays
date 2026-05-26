import nodemailer from "nodemailer";

interface SendEmailParams {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  from?: string;
}

/**
 * Sends an email using Nodemailer with SMTP configuration.
 * Configured via env variables: SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS.
 */
export async function sendEmail({ to, subject, html, text, from }: SendEmailParams) {
  const host = process.env.SMTP_HOST || "smtp.titan.email";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  // Default to true if port is 465 or if SMTP_SECURE is not explicitly "false"
  const secure = process.env.SMTP_SECURE !== "false";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error("SMTP Configuration Missing: SMTP_USER or SMTP_PASS is not set in environment variables.");
    throw new Error("SMTP email credentials are not configured");
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // We can also configure TLS settings to be secure by default on Node/SMTP handshakes
    tls: {
      // do not fail on invalid certs if using standard hosts, but default to safe defaults
      rejectUnauthorized: true,
    },
  });

  // Verify connection configuration (optional, but good for debugging/warm-up)
  // Since we want this to be fast, we directly call sendMail, but we log connections.
  const fromAddress = from || `Bhumija Holidays <${user}>`;

  const mailOptions = {
    from: fromAddress,
    to: Array.isArray(to) ? to.join(", ") : to,
    subject,
    text,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent successfully via SMTP:", info.messageId);
  return info;
}
