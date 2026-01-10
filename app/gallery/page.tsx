"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import {
  galleryItems,
  GalleryItem,
  getFilteredGallery,
  getAllTags,
} from "@/data/gallery";

type LocationFilter = "all" | "kathmandu" | "janakpurdham";

export default function GalleryPage() {
  const [activeLocation, setActiveLocation] = useState<LocationFilter>("all");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredItems = getFilteredGallery(activeLocation, activeTag);
  const allTags = getAllTags();

  const locationFilters: { label: string; value: LocationFilter }[] = [
    { label: "All Locations", value: "all" },
    { label: "Kathmandu", value: "kathmandu" },
    { label: "Janakpurdham", value: "janakpurdham" },
  ];

  const tagFilters = [
    { label: "All Types", value: "all" },
    ...allTags.map((tag) => ({ label: tag, value: tag })),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0B3D91] to-[#083070] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-medium mb-6">
              Heritage & Culture
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Explore Our Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the rich history and cultural heritage of Kathmandu and
              Janakpurdham through our curated collection of sacred sites,
              ancient temples, and hidden gems.
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
                {(activeLocation !== "all" || activeTag !== "all") && (
                  <span className="px-2 py-0.5 bg-[#0B3D91] text-white text-xs rounded-full">
                    {(activeLocation !== "all" ? 1 : 0) + (activeTag !== "all" ? 1 : 0)}
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
                  <div className="pt-4 space-y-3">
                    {/* Location Filters */}
                    <div>
                      <p className="text-xs text-gray-500 mb-2 font-medium">Location</p>
                      <div className="flex flex-wrap gap-2">
                        {locationFilters.map((filter) => (
                          <motion.button
                            key={filter.value}
                            onClick={() => setActiveLocation(filter.value)}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                              activeLocation === filter.value
                                ? "bg-[#0B3D91] text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {filter.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Tag Filters */}
                    <div>
                      <p className="text-xs text-gray-500 mb-2 font-medium">Type</p>
                      <div className="flex flex-wrap gap-2">
                        {tagFilters.map((filter) => (
                          <motion.button
                            key={filter.value}
                            onClick={() => setActiveTag(filter.value)}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                              activeTag === filter.value
                                ? "bg-[#FF8C00] text-white"
                                : "bg-gray-50 text-gray-500 border border-gray-200"
                            }`}
                          >
                            {filter.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block">
            {/* Location Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {locationFilters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveLocation(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeLocation === filter.value
                      ? "bg-[#0B3D91] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {tagFilters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveTag(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeTag === filter.value
                      ? "bg-[#FF8C00] text-white"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center">
            Showing{" "}
            <span className="font-semibold text-[#0B3D91]">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "location" : "locations"}
            {activeLocation !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="font-semibold capitalize">
                  {activeLocation}
                </span>
              </span>
            )}
            {activeTag !== "all" && (
              <span>
                {" "}
                tagged{" "}
                <span className="font-semibold text-[#FF8C00]">{activeTag}</span>
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <StaggerItem key={item.id}>
                  <GalleryCard item={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeUp>
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No locations found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={() => {
                    setActiveLocation("all");
                    setActiveTag("all");
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Experience These Wonders?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us create a personalized journey through the sacred sites of
              Nepal for you.
            </p>
            <Link
              href="/plan-my-trip"
              className="inline-block bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Plan Your Pilgrimage
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <HoverCard className="h-full">
      <Link href={`/gallery/${item.slug}`}>
        <div className="card h-full flex flex-col overflow-hidden">
          {/* Image Section */}
          <div className="relative h-56 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
            {/* Actual Image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Location Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0B3D91] capitalize">
                {item.location}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    tag === "UNESCO"
                      ? "bg-emerald-100 text-emerald-700"
                      : tag === "Hidden Gem"
                      ? "bg-purple-100 text-purple-700"
                      : tag === "Must Visit"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
              {item.shortDescription}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {item.yearEstablished && (
                <span className="text-xs text-gray-500">
                  Est. {item.yearEstablished}
                </span>
              )}
              <span className="text-[#FF8C00] font-medium text-sm flex items-center gap-1">
                Explore
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </HoverCard>
  );
}
