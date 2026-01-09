"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  Float,
} from "@/components/animations";
import { siteContent } from "@/data/content";
import { getPackagesByDestination } from "@/data/packages";

export default function JanakpurdhamPage() {
  const { janakpurdham } = siteContent.destinations;
  const packages = getPackagesByDestination("janakpurdham");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#FF8C00] via-[#D4AF37] to-[#FF8C00] overflow-hidden">
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
              <span className="text-white">{janakpurdham.name}</span>
            </nav>

            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-wide mb-4">
              {janakpurdham.tagline}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              {janakpurdham.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {janakpurdham.heroDescription}
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <Float duration={6} y={20} className="absolute right-10 bottom-10 opacity-20">
          <span className="text-[200px] leading-none">🛕</span>
        </Float>
      </section>

      {/* Special Feature Banner */}
      <section className="py-8 bg-[#0B3D91]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="text-4xl">🎨</span>
            <div>
              <p className="text-white font-medium">
                Home of Mithila Art - UNESCO Intangible Cultural Heritage
              </p>
              <p className="text-white/70 text-sm">
                Experience one of the world&apos;s oldest and most distinctive painting traditions
              </p>
            </div>
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
                The Sacred City of Sita
              </h2>
              <div className="prose prose-lg text-gray-600">
                {janakpurdham.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-6">
                {janakpurdham.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 border-l-4 border-l-[#FF8C00]"
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

      {/* Mithila Art Feature Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FAF7F0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='%23FF8C00'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <Image
                      src="/gallery/mithila-art-center.jpg"
                      alt="Mithila Art - Traditional Painting"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <Float duration={4} y={15} className="absolute -bottom-6 -left-6 z-10">
                  <div className="bg-[#0B3D91] rounded-xl shadow-xl p-4 text-white">
                    <p className="font-semibold">UNESCO Heritage</p>
                    <p className="text-sm text-white/70">Recognized 2020</p>
                  </div>
                </Float>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="gold-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                The Living Art of Mithila
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mithila painting is far more than art—it&apos;s a visual language that has
                told stories of gods, nature, and daily life for over three millennia.
                Traditionally created by women on the mud walls of their homes, these
                vibrant works use natural dyes and depict everything from wedding
                ceremonies to cosmic myths.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In Janakpurdham, you can meet the artists themselves, learn the meaning
                behind each symbol, and even try your hand at this ancient craft under
                expert guidance.
              </p>
              <Link href="/packages/mithila-art-retreat">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Explore Art Retreat Package
                </motion.button>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Experiences in Janakpurdham
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sacred encounters and cultural discoveries await
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {janakpurdham.experiences.map((experience, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="card p-6 h-full flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] flex items-center justify-center text-white text-xl flex-shrink-0">
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
        <section className="py-16 lg:py-24 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <div className="gold-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                Janakpurdham Packages
              </h2>
              <p className="text-lg text-gray-600">
                Sacred journeys and artistic immersions
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <FadeUp key={pkg.id} delay={index * 0.1}>
                  <HoverCard className="h-full">
                    <Link href={`/packages/${pkg.slug}`} className="block h-full">
                      <div className="card h-full">
                        <div className="relative h-48">
                          <Image
                            src={pkg.gallery[0]}
                            alt={pkg.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 bg-[#0B3D91] text-white text-xs rounded-full capitalize">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FF8C00] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-16 h-1 bg-white mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Discover Janakpurdham?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the sacred heritage and living culture of this remarkable
              destination. Let us guide you on a journey that transforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-my-trip">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0B3D91] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0A3580] transition-all"
                >
                  Plan My Trip
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold hover:bg-white/30 transition-all border border-white/30"
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
