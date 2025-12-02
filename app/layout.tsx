import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
