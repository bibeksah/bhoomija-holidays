# Gemini Project Context - Bhumija Holidays

This project is a production-ready Next.js website for **Bhumija Holidays**, a premium cultural travel company specializing in heritage tourism in Nepal (Kathmandu and Janakpurdham).

## Project Overview

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Tech Stack**:
    - **Language**: TypeScript
    - **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
    - **Animations**: [Framer Motion](https://www.framer.com/motion/)
    - **Backend/Services**: 
        - [Supabase](https://supabase.com/) (Newsletter subscriber storage)
        - [Resend](https://resend.com/) (Email notifications for quotes/enquiries)
    - **Deployment**: Optimized for Vercel

## Architecture & Conventions

### 1. Data-Driven Content
Most site content is centralized in the `/data` directory to facilitate easy updates without modifying components:
- `data/content.ts`: Homepage sections, testimonials, FAQs, and general site metadata.
- `data/packages.ts`: Travel package definitions (itineraries, pricing, etc.).
- `data/policies.ts`: Legal and policy content.

### 2. Component Structure
- `app/`: Contains the App Router pages and API routes.
- `components/`: Reusable UI components.
    - `components/animations/`: Specialized Framer Motion animation wrappers.
- `public/`: Static assets, including structured folders for `gallery` and `packages` images.

### 3. API Routes
- `/api/quote`: Handles travel enquiry form submissions using Resend.
- `/api/subscribe`: Handles newsletter subscriptions (integration with Supabase).
- `/api/cron/keep-alive`: A cron-triggered endpoint that pings Supabase every 2 days to prevent database hibernation.

### 4. Cron Jobs
- **Supabase Keep-Alive**: Configured in `vercel.json` to run every 2 days (`0 0 */2 * *`). This ensures the free-tier Supabase project remains active.

### 4. Styling & Branding
- **Colors**: Defined in `app/globals.css` using CSS variables.
    - Primary: Indigo 900 (#0B3D91)
    - Accent: Saffron 600 (#FF8C00)
    - Secondary Accent: Gold 500 (#D4AF37)
    - Text: Charcoal 900 (#2B2B2B)
    - Background: Off White (#FAF7F0)
- **Typography**: Playfair Display for headings, Inter for body text.

### 5. Security
- **Middleware**: `middleware.ts` implements strict security headers:
    - Content Security Policy (CSP)
    - Strict-Transport-Security (HSTS)
    - X-Frame-Options (Clickjacking protection)
    - Permissions Policy

## Building and Running

The project uses **Yarn** as the package manager.

- **Install Dependencies**: `yarn install`
- **Development Server**: `yarn dev` (runs `next dev --webpack`)
- **Production Build**: `yarn build`
- **Production Start**: `yarn start`
- **Linting**: `yarn lint`

## Development Guidelines

- **TypeScript**: Always use strict typing. Interfaces for data models are defined in their respective data files.
- **Responsive Design**: The site is mobile-first. Ensure visual fidelity at 375px, 414px, 768px, and 1280px+ breakpoints.
- **Animations**: Use the components in `components/animations` for consistent motion effects.
- **SEO**: Update `robots.ts`, `sitemap.ts`, and page-level metadata when adding new routes.
- **Environment Variables**: Required keys (see `.env.example` if available):
    - `RESEND_API_KEY`: For email delivery.
    - `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`: For newsletter functionality.
    - `SUPABASE_SERVICE_KEY`: Service role key for administrative Supabase actions and cron authorization.
    - `ADMIN_EMAIL`: Destination for enquiry notifications.

## Key Files
- `app/page.tsx`: Homepage entry point.
- `app/layout.tsx`: Root layout with shared UI (Header, Footer, WhatsAppButton).
- `data/content.ts`: Main repository for textual content.
- `middleware.ts`: Handles security headers and potentially redirects.
