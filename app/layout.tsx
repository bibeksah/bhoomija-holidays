import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Bhumija Holidays",
  description:
    "Premium cultural travel agency specializing in authentic Nepal experiences, including Kathmandu heritage tours and Janakpurdham spiritual journeys.",
  url: "https://bhumijaholidays.com",
  logo: "https://bhumijaholidays.com/icon.svg",
  image: "https://bhumijaholidays.com/opengraph-image",
  telephone: "+977-9840149464",
  email: "info@bhumijaholidays.com",
  priceRange: "$$",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Balkhu",
      addressLocality: "Kathmandu",
      postalCode: "44600",
      addressCountry: "NP",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Ramaanand Chowk",
      addressLocality: "Janakpur",
      postalCode: "45600",
      addressCountry: "NP",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.7172",
    longitude: "85.324",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  areaServed: {
    "@type": "Country",
    name: "Nepal",
  },
  serviceType: ["Cultural Tours", "Heritage Tourism", "Spiritual Journeys", "Custom Travel Packages"],
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bhumija Holidays | Premium Cultural Travel in Nepal",
    template: "%s | Bhumija Holidays",
  },
  description:
    "Experience authentic Nepal with Bhumija Holidays. Discover the cultural treasures of Kathmandu and the sacred heritage of Janakpurdham with our premium, personalized travel packages.",
  keywords: [
    "Nepal travel",
    "Kathmandu tours",
    "Janakpurdham",
    "Mithila culture",
    "Nepal cultural tours",
    "premium travel Nepal",
    "heritage tourism",
    "Bhumija Holidays",
  ],
  authors: [{ name: "Bhumija Holidays" }],
  creator: "Bhumija Holidays",
  publisher: "Bhumija Holidays",
  metadataBase: new URL("https://bhumijaholidays.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhumijaholidays.com",
    siteName: "Bhumija Holidays",
    title: "Bhumija Holidays | Premium Cultural Travel in Nepal",
    description:
      "Experience authentic Nepal with Bhumija Holidays. Discover the cultural treasures of Kathmandu and the sacred heritage of Janakpurdham.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhumija Holidays - Premium Cultural Travel in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhumija Holidays | Premium Cultural Travel in Nepal",
    description:
      "Experience authentic Nepal with Bhumija Holidays. Discover the cultural treasures of Kathmandu and the sacred heritage of Janakpurdham.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
  },
  other: {
    "theme-color": "#0B3D91",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
