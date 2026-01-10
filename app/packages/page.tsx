"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import { packages, Package } from "@/data/packages";
import type { Metadata } from "next";

type FilterType = "all" | Package["destination"] | Package["category"];

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredPackages = packages.filter((pkg) => {
    if (activeFilter === "all") return true;
    return pkg.destination === activeFilter || pkg.category === activeFilter;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Packages", value: "all" },
    { label: "Kathmandu", value: "kathmandu" },
    { label: "Janakpurdham", value: "janakpurdham" },
    { label: "Multi-City", value: "multi-city" },
    { label: "Cultural", value: "cultural" },
    { label: "Spiritual", value: "spiritual" },
    { label: "Heritage", value: "heritage" },
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
              Our Travel Packages
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Carefully curated journeys that reveal Nepal&apos;s cultural treasures,
              from ancient temples to living traditions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
                {activeFilter !== "all" && (
                  <span className="px-2 py-0.5 bg-[#0B3D91] text-white text-xs rounded-full">
                    1
                  </span>
                )}
              </span>
              <motion.svg
                animate={{ rotate: filtersOpen ? 180 : 0 }}
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {filtersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
                    {filters.map((filter) => (
                      <motion.button
                        key={filter.value}
                        onClick={() => {
                          setActiveFilter(filter.value);
                          setFiltersOpen(false);
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          activeFilter === filter.value
                            ? "bg-[#0B3D91] text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {filter.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-[#0B3D91] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No packages found for this filter.
              </p>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {filteredPackages.map((pkg, index) => (
                <StaggerItem key={pkg.id}>
                  <HoverCard className="h-full">
                    <Link href={`/packages/${pkg.slug}`} className="block h-full">
                      <div className="card h-full flex flex-col lg:flex-row overflow-hidden">
                        {/* Image Section */}
                        <div className="relative lg:w-2/5 h-64 lg:h-auto min-h-[200px]">
                          <Image
                            src={pkg.gallery[0]}
                            alt={pkg.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-[#FF8C00] text-white text-xs font-medium rounded-full capitalize">
                              {pkg.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <span className="text-white text-sm font-medium drop-shadow-lg">{pkg.duration}</span>
                          </div>
                          {pkg.featured && (
                            <div className="absolute top-4 right-4 z-10">
                              <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-medium rounded-full">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
                          <div className="mb-2">
                            <span className="text-[#FF8C00] text-sm font-medium capitalize">
                              {pkg.destination.replace("-", " ")}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-3 font-[family-name:var(--font-playfair)]">
                            {pkg.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-grow">{pkg.summary}</p>

                          {/* Highlights Preview */}
                          <div className="mb-4">
                            <ul className="space-y-1">
                              {pkg.highlights.slice(0, 3).map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                  <svg
                                    className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="line-clamp-1">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div>
                              <span className="text-sm text-gray-500">Starting from</span>
                              <p className="text-2xl font-bold text-[#0B3D91]">
                                {pkg.currency} {pkg.startingPrice.toLocaleString()}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-[#0B3D91] font-medium">
                              View Details
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
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in custom itineraries. Share your preferences and
              we&apos;ll create a personalized journey just for you.
            </p>
            <Link href="/plan-my-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8"
              >
                Plan My Custom Trip
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
