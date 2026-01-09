import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();

  // Security Headers
  const headers = response.headers;

  // Prevent DNS prefetching
  headers.set("X-DNS-Prefetch-Control", "on");

  // Strict Transport Security (HSTS) - Force HTTPS
  headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // Prevent clickjacking
  headers.set("X-Frame-Options", "SAMEORIGIN");

  // Prevent MIME type sniffing
  headers.set("X-Content-Type-Options", "nosniff");

  // Referrer Policy
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions Policy (formerly Feature-Policy)
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );

  // XSS Protection (legacy but still useful for older browsers)
  headers.set("X-XSS-Protection", "1; mode=block");

  // Content Security Policy
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://images.unsplash.com https://*.unsplash.com",
      "font-src 'self' data:",
      "connect-src 'self' https://api.resend.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
  ],
};
