"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use, useState } from "react";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import { getPackageBySlug, packages } from "@/data/packages";

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pkg = getPackageBySlug(slug);
  const [activeDay, setActiveDay] = useState(0);

  if (!pkg) {
    notFound();
  }

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-white transition-colors">
                Packages
              </Link>
              <span>/</span>
              <span className="text-white">{pkg.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#FF8C00] text-white text-sm rounded-full capitalize">
                    {pkg.category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full capitalize">
                    {pkg.destination.replace("-", " ")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                  {pkg.title}
                </h1>
                <p className="text-xl text-white/80 mb-8">{pkg.summary}</p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="capitalize">{pkg.destination.replace("-", " ")}</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
                  <span className="text-white/60 text-sm">Starting from</span>
                  <p className="text-3xl font-bold text-white">
                    {pkg.currency} {pkg.startingPrice.toLocaleString()}
                  </p>
                  <span className="text-white/60 text-sm">per person</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={pkg.gallery[0]}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick CTA Bar */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-[#2B2B2B]">{pkg.title}</span>
              <span className="text-gray-400">|</span>
              <span className="text-[#0B3D91] font-bold">
                {pkg.currency} {pkg.startingPrice.toLocaleString()}
              </span>
            </div>
            <Link href="/plan-my-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book This Trip
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <SlideInLeft className="lg:col-span-2">
              <div className="gold-accent mb-6" />
              <h2 className="text-3xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                About This Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {pkg.description}
              </p>

              <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                Trip Highlights
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </SlideInLeft>

            <SlideInRight>
              <div className="card p-6 sticky top-36">
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                  Quick Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#0B3D91]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0B3D91]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-[#2B2B2B]">{pkg.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#0B3D91]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0B3D91]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Destination</p>
                      <p className="font-medium text-[#2B2B2B] capitalize">
                        {pkg.destination.replace("-", " ")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#0B3D91]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0B3D91]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium text-[#2B2B2B] capitalize">{pkg.category}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF8C00]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#FF8C00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Starting Price</p>
                      <p className="font-bold text-[#0B3D91] text-xl">
                        {pkg.currency} {pkg.startingPrice.toLocaleString()}
                      </p>
                    </div>
                  </li>
                </ul>

                <Link href="/plan-my-trip" className="block mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full"
                  >
                    Book This Trip
                  </motion.button>
                </Link>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 lg:py-20 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Day-by-Day Itinerary
            </h2>
            <p className="text-lg text-gray-600">
              A detailed look at your journey through Nepal
            </p>
          </FadeUp>

          {/* Day Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {pkg.itinerary.map((day, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveDay(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeDay === index
                    ? "bg-[#0B3D91] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Day {day.day}
              </motion.button>
            ))}
          </div>

          {/* Active Day Details */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {pkg.itinerary[activeDay].day}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2B2B2B] font-[family-name:var(--font-playfair)]">
                  {pkg.itinerary[activeDay].title}
                </h3>
                <p className="text-[#FF8C00] font-medium">
                  Day {pkg.itinerary[activeDay].day} of {pkg.durationDays}
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {pkg.itinerary[activeDay].description}
            </p>

            {(pkg.itinerary[activeDay].meals || pkg.itinerary[activeDay].accommodation) && (
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                {pkg.itinerary[activeDay].meals && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#D4AF37]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Meals Included</p>
                      <p className="font-medium text-[#2B2B2B]">
                        {pkg.itinerary[activeDay].meals}
                      </p>
                    </div>
                  </div>
                )}
                {pkg.itinerary[activeDay].accommodation && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B3D91]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0B3D91]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Accommodation</p>
                      <p className="font-medium text-[#2B2B2B]">
                        {pkg.itinerary[activeDay].accommodation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              What&apos;s Included
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <SlideInLeft>
              <div className="card p-8 h-full border-t-4 border-t-green-500">
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-6 flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Inclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="card p-8 h-full border-t-4 border-t-red-400">
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-6 flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Experience {pkg.title}?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you plan the perfect Nepal adventure. Our travel experts
              are ready to customize this journey to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-my-trip">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8"
                >
                  Book This Trip
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline border-white text-white hover:bg-white hover:text-[#0B3D91] text-lg px-8"
                >
                  Ask a Question
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

