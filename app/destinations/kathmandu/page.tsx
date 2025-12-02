"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import { siteContent } from "@/data/content";
import { getPackagesByDestination } from "@/data/packages";

export default function KathmanduPage() {
  const { kathmandu } = siteContent.destinations;
  const packages = getPackagesByDestination("kathmandu");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0B3D91] to-[#083070] overflow-hidden">
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
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/destinations" className="hover:text-white transition-colors">
                Destinations
              </Link>
              <span>/</span>
              <span className="text-white">{kathmandu.name}</span>
            </nav>

            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-medium tracking-wide mb-4">
              {kathmandu.tagline}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              {kathmandu.name}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {kathmandu.heroDescription}
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[300px] leading-none">🏛️</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SlideInLeft>
              <div className="gold-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                Discover Kathmandu Valley
              </h2>
              <div className="prose prose-lg text-gray-600">
                {kathmandu.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-6">
                {kathmandu.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Experiences in Kathmandu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in authentic cultural encounters
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kathmandu.experiences.map((experience, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="card p-6 h-full flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center text-white text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{experience}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Packages Section */}
      {packages.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <div className="gold-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                Kathmandu Packages
              </h2>
              <p className="text-lg text-gray-600">
                Curated journeys to explore this remarkable destination
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <FadeUp key={pkg.id} delay={index * 0.1}>
                  <HoverCard className="h-full">
                    <Link href={`/packages/${pkg.slug}`} className="block h-full">
                      <div className="card h-full">
                        <div className="relative h-48 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/20 text-6xl font-bold font-[family-name:var(--font-playfair)]">
                              {pkg.durationDays}D
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-[#FF8C00] text-white text-xs rounded-full capitalize">
                              {pkg.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
                            {pkg.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm">{pkg.summary}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">{pkg.duration}</span>
                            <span className="text-lg font-bold text-[#0B3D91]">
                              {pkg.currency} {pkg.startingPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Explore Kathmandu?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us craft your perfect journey through the ancient streets and
              sacred sites of Kathmandu Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-my-trip">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8"
                >
                  Plan My Trip
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline border-white text-white hover:bg-white hover:text-[#0B3D91] text-lg px-8"
                >
                  View All Packages
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
