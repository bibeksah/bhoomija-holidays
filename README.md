# Bhumija Holidays - Premium Cultural Travel Website

A production-ready Next.js website for Bhumija Holidays, a Nepal-based cultural travel company specializing in heritage tourism to Kathmandu and Janakpurdham.

## Features

- **Responsive Design**: Mobile-first design optimized for all screen sizes (375px to 1280px+)
- **Framer Motion Animations**: Smooth, engaging animations throughout the site
- **Dynamic Package System**: Browse and filter travel packages with detailed itineraries
- **Quote/Enquiry Form**: Lead capture with client-side validation
- **Multiple Destinations**: Dedicated pages for Kathmandu and Janakpurdham
- **SEO Optimized**: Comprehensive metadata, sitemap, and robots.txt
- **Policy Pages**: Terms, Privacy, and Cancellation policies

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bhoomija-holidays.git
cd bhoomija-holidays
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration.

4. Start the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bhoomija-holidays/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── quote/         # Quote form submission
│   ├── contact/           # Contact page
│   ├── destinations/      # Destination pages
│   │   ├── kathmandu/
│   │   └── janakpurdham/
│   ├── faq/               # FAQ page
│   ├── packages/          # Package listing and details
│   │   └── [slug]/        # Dynamic package detail pages
│   ├── plan-my-trip/      # Quote form page
│   ├── policies/          # Legal pages
│   │   ├── cancellation/
│   │   ├── privacy/
│   │   └── terms/
│   ├── reviews/           # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── animations/        # Framer Motion animation components
│   ├── Header.tsx
│   └── Footer.tsx
├── data/                  # Content data (JSON/TS)
│   ├── content.ts         # Site content, testimonials, FAQs
│   ├── packages.ts        # Travel package data
│   └── policies.ts        # Policy page content
└── public/                # Static assets
    └── placeholders/      # Placeholder images
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Configuration

### Brand Colors (defined in globals.css)

- **Indigo 900**: #0B3D91 (Primary)
- **Saffron 600**: #FF8C00 (Accent)
- **Gold 500**: #D4AF37 (Secondary accent)
- **Charcoal 900**: #2B2B2B (Text)
- **Off White**: #FAF7F0 (Background)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Customization

### Adding New Packages

Edit `data/packages.ts` to add or modify travel packages. Each package includes:
- Title, duration, price
- Summary and description
- Day-by-day itinerary
- Inclusions and exclusions
- Category and destination tags

### Updating Content

Most site content is centralized in `data/content.ts`:
- Homepage sections
- About page content
- Destination descriptions
- Testimonials
- FAQs
- Form labels and messages

### Email Integration

The quote form (`/api/quote`) uses [Resend](https://resend.com) for email delivery. To enable:

1. Sign up at [resend.com](https://resend.com) and get your API key
2. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ADMIN_EMAIL=your-email@example.com
   ```
3. For production, verify your domain in Resend and update the `from` addresses in the API route

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

```bash
yarn build
yarn start
```

## Future Enhancements (Post-MVP)

- [ ] Online payment integration
- [ ] CMS integration (Sanity/Strapi)
- [ ] Partner dashboard
- [ ] Multi-language support
- [ ] Blog section
- [ ] Customer account portal

## Credits

- **Development**: Built with Claude Code
- **Design System**: TailwindCSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Inter)

## License

This project is proprietary to Bhumija Holidays.

---

Powered by [Nexalaris Tech](https://nexalaris.com)
