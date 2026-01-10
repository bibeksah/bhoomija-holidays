"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";
import { testimonials } from "@/data/content";

export default function ReviewsPage() {
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

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
              Traveler Reviews
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Hear from travelers who&apos;ve discovered Nepal&apos;s cultural treasures
              with Bhumija Holidays
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{averageRating}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-left">
                <p className="text-white font-semibold">{testimonials.length} Reviews</p>
                <p className="text-white/70 text-sm">100% Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.id}>
                <HoverCard className="h-full">
                  <div className="card p-8 h-full flex flex-col">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#D4AF37]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-600 italic mb-6 flex-grow leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Package Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#0B3D91]/10 text-[#0B3D91] text-sm rounded-full">
                        {testimonial.package}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#2B2B2B]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location} • {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
              Why Travelers Trust Us
            </h2>
            <p className="text-gray-600">Our commitment to excellence</p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Travelers" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "24hr", label: "Response Time" },
              { value: "15+", label: "Expert Guides" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#0B3D91] font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of travelers who&apos;ve discovered Nepal&apos;s magic with us.
              Your adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/plan-my-trip">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8"
                >
                  Start Planning
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline-light text-lg px-8"
                >
                  Browse Packages
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
