"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import { siteContent } from "@/data/content";

export default function DestinationsPage() {
  const { destinations } = siteContent;

  const destinationsList = [
    {
      key: "kathmandu",
      ...destinations.kathmandu,
      href: "/destinations/kathmandu",
      icon: "🏛️",
    },
    {
      key: "janakpurdham",
      ...destinations.janakpurdham,
      href: "/destinations/janakpurdham",
      icon: "🛕",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
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
              Our Destinations
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From the ancient streets of Kathmandu to the sacred temples of
              Janakpurdham, discover Nepal&apos;s most captivating cultural destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8">
            {destinationsList.map((dest) => (
              <StaggerItem key={dest.key}>
                <HoverCard className="h-full">
                  <Link href={dest.href} className="block h-full">
                    <div className="card h-full overflow-hidden">
                      {/* Image/Visual Section */}
                      <div className="relative h-72 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl">{dest.icon}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <span className="text-white/80 text-sm font-medium tracking-wide">
                            {dest.tagline}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h2 className="text-3xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                          {dest.name}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {dest.heroDescription}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3 mb-6">
                          {dest.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div>
                                <span className="font-medium text-[#2B2B2B]">
                                  {highlight.title}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-[#0B3D91] font-medium">
                          Explore {dest.name}
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our travel experts can help you choose the perfect destination based
              on your interests, whether it&apos;s heritage sites, spiritual journeys,
              or cultural immersion.
            </p>
            <Link href="/plan-my-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8"
              >
                Get Expert Advice
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
