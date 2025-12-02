"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { faqs } from "@/data/content";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "planning", label: "Trip Planning" },
    { id: "booking", label: "Booking" },
    { id: "travel", label: "Travel Tips" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to know about planning your Nepal journey with
              Bhumija Holidays
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={faq.id}>
                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={false}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="font-semibold text-[#2B2B2B] pr-8 text-lg">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-[#0B3D91]"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-[#0B3D91] to-[#083070] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
                Our travel experts are here to help. Reach out anytime and we&apos;ll
                get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <Link href="/plan-my-trip">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-all border border-white/30"
                  >
                    Plan My Trip
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2B2B2B] font-[family-name:var(--font-playfair)]">
              Helpful Resources
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Our Packages",
                description: "Browse curated Nepal experiences",
                href: "/packages",
                icon: "📦",
              },
              {
                title: "Destinations",
                description: "Learn about Kathmandu & Janakpurdham",
                href: "/destinations",
                icon: "🗺️",
              },
              {
                title: "Cancellation Policy",
                description: "Understand our refund terms",
                href: "/policies/cancellation",
                icon: "📋",
              },
              {
                title: "About Us",
                description: "Learn more about Bhumija Holidays",
                href: "/about",
                icon: "ℹ️",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card p-6 h-full text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-[#2B2B2B] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
