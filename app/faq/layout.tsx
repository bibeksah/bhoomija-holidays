import { Metadata } from "next";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about traveling to Nepal with Bhumija Holidays. Learn about visas, best travel times, cultural etiquette, and more.",
};

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
