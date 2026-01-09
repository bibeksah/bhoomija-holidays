"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, FadeIn, SlideInLeft, SlideInRight } from "@/components/animations";
import { getGalleryBySlug, galleryItems, GalleryItem } from "@/data/gallery";

export default function GalleryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const item = getGalleryBySlug(slug);

  if (!item) {
    notFound();
  }

  // Get related items (same location, excluding current)
  const relatedItems = galleryItems
    .filter((i) => i.location === item.location && i.id !== item.id)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0B3D91] to-[#083070] overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center space-x-2 text-white/60 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-[#D4AF37]">{item.title}</li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Location Badge */}
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-medium mb-4 capitalize">
                {item.location}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tag === "UNESCO"
                        ? "bg-emerald-500/20 text-emerald-200"
                        : tag === "Hidden Gem"
                        ? "bg-purple-500/20 text-purple-200"
                        : tag === "Must Visit"
                        ? "bg-amber-500/20 text-amber-200"
                        : "bg-white/10 text-white/80"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
                {item.title}
              </h1>

              <p className="text-xl text-white/80 mb-8">{item.shortDescription}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                {item.yearEstablished && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white/60 text-sm">Established</p>
                    <p className="text-white font-semibold">{item.yearEstablished}</p>
                  </div>
                )}
                {item.entryFee && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white/60 text-sm">Entry Fee</p>
                    <p className="text-white font-semibold">{item.entryFee}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visiting Info Bar */}
      {item.visitingHours && (
        <section className="py-6 bg-[#FAF7F0] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-[#2B2B2B]">Hours:</strong>{" "}
                  {item.visitingHours}
                </span>
              </div>
              {item.entryFee && (
                <div className="flex items-center gap-2">
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-[#2B2B2B]">Entry:</strong>{" "}
                    {item.entryFee}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
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
                <span className="text-gray-600 capitalize">
                  <strong className="text-[#2B2B2B]">Location:</strong>{" "}
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Full History */}
            <div className="lg:col-span-2">
              <SlideInLeft>
                <div className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] rounded-full" />
                    <h2 className="text-3xl font-bold text-[#2B2B2B] font-[family-name:var(--font-playfair)] m-0">
                      History & Heritage
                    </h2>
                  </div>

                  {item.fullHistory.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </SlideInLeft>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SlideInRight>
                {/* Significance Box */}
                <div className="bg-gradient-to-br from-[#0B3D91] to-[#083070] rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
                    Cultural Significance
                  </h3>
                  <ul className="space-y-4">
                    {item.significance.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#0B3D91]">
                          {index + 1}
                        </span>
                        <span className="text-white/90 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="bg-[#FAF7F0] rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                    Visit This Site
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Include {item.title} in your personalized Nepal journey. Our
                    experts will craft the perfect itinerary.
                  </p>
                  <Link
                    href="/plan-my-trip"
                    className="block w-full text-center bg-[#FF8C00] hover:bg-[#E67E00] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sites */}
      {relatedItems.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-[#0B3D91]/10 rounded-full text-[#0B3D91] text-sm font-medium mb-4">
                  Explore More
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-[family-name:var(--font-playfair)]">
                  Related Sites in{" "}
                  <span className="capitalize">{item.location}</span>
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedItems.map((related, index) => (
                <FadeUp key={related.id} delay={index * 0.1}>
                  <Link href={`/gallery/${related.slug}`}>
                    <div className="card h-full hover:shadow-xl transition-all group">
                      {/* Image */}
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={related.imageUrl}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {related.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2 group-hover:text-[#0B3D91] transition-colors font-[family-name:var(--font-playfair)]">
                          {related.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {related.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="text-center mt-12">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-[#0B3D91] font-semibold hover:text-[#FF8C00] transition-colors"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Full Gallery
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      )}
    </div>
  );
}
