"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  Float,
  ParallaxSection,
} from "@/components/animations";
import { siteContent, testimonials, faqs } from "@/data/content";
import { getFeaturedPackages } from "@/data/packages";

export default function HomePage() {
  const { homepage } = siteContent;
  const featuredPackages = getFeaturedPackages();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/VjWC3ZCdES0?autoplay=1&mute=1&loop=1&playlist=VjWC3ZCdES0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Nepal Travel Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: "none" }}
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-medium tracking-wide">
                Premium Cultural Travel in Nepal
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]"
            >
              {homepage.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
            >
              {homepage.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto w-fit"
            >
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {homepage.hero.primaryCTA}
                </motion.button>
              </Link>
              <Link href="/plan-my-trip">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-md font-semibold transition-all duration-200 hover:bg-white hover:text-[#0B3D91] text-lg">
                  {homepage.hero.secondaryCTA}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Bhumija Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              {homepage.whyBhumija.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {homepage.whyBhumija.subtitle}
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homepage.whyBhumija.features.map((feature, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="card p-8 h-full text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center">
                      <FeatureIcon name={feature.icon} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 font-[family-name:var(--font-playfair)]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Featured Journeys
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences that reveal Nepal&apos;s cultural treasures
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <FadeUp key={pkg.id} delay={index * 0.1}>
                <HoverCard className="h-full">
                  <Link href={`/packages/${pkg.slug}`} className="block h-full">
                    <div className="card h-full flex flex-col">
                      <div className="relative h-64 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/20 text-6xl font-bold font-[family-name:var(--font-playfair)]">
                            {pkg.durationDays}D
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-[#FF8C00] text-white text-sm rounded-full">
                            {pkg.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-white/80 text-sm">{pkg.duration}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
                          {pkg.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">{pkg.summary}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">Starting from</span>
                          <span className="text-xl font-bold text-[#0B3D91]">
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

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Packages
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Janakpurdham Spotlight Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <ParallaxSection offset={30} className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='%230B3D91'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#083070] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🛕</div>
                      <span className="text-white/60 text-lg">Janaki Mandir</span>
                    </div>
                  </div>
                </div>
                <Float duration={4} y={15} className="absolute -bottom-6 -right-6 z-10">
                  <div className="bg-white rounded-xl shadow-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div>
                        <p className="font-semibold text-[#2B2B2B]">Mithila Art</p>
                        <p className="text-sm text-gray-500">UNESCO Heritage</p>
                      </div>
                    </div>
                  </div>
                </Float>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="gold-accent mb-6" />
              <span className="text-[#FF8C00] font-medium tracking-wide">
                {homepage.spotlight.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mt-2 mb-6 font-[family-name:var(--font-playfair)]">
                {homepage.spotlight.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {homepage.spotlight.description}
              </p>
              <Link href="/destinations/janakpurdham">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {homepage.spotlight.cta}
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
                </motion.button>
              </Link>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-[#0B3D91] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              {homepage.howItWorks.title}
            </h2>
            <p className="text-xl text-white/80">{homepage.howItWorks.subtitle}</p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {homepage.howItWorks.steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600">
              Stories from those who&apos;ve discovered Nepal with us
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <FadeUp key={testimonial.id} delay={index * 0.1}>
                <HoverCard className="h-full">
                  <div className="card p-8 h-full flex flex-col">
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
                    <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#2B2B2B]">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link href="/reviews">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Read More Reviews
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to help you plan your journey
            </p>
          </FadeUp>

          <StaggerContainer className="space-y-4">
            {faqs.slice(0, 4).map((faq) => (
              <StaggerItem key={faq.id}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.5} className="text-center mt-10">
            <Link href="/faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All FAQs
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B3D91] via-[#0B3D91] to-[#083070] relative overflow-hidden">
        <Float duration={7} y={25} className="absolute -top-20 -left-20 opacity-10">
          <div className="w-96 h-96 rounded-full bg-[#FF8C00]" />
        </Float>
        <Float duration={9} y={30} className="absolute -bottom-20 -right-20 opacity-10">
          <div className="w-[500px] h-[500px] rounded-full bg-[#D4AF37]" />
        </Float>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              {homepage.cta.title}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {homepage.cta.subtitle}
            </p>
            <Link href="/plan-my-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-4 shadow-xl"
              >
                {homepage.cta.buttonText}
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

// Feature Icon Component
function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    cultural: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    authentic: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    design: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    impact: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  };

  return icons[name] || icons.cultural;
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.details
      className="group bg-white rounded-xl shadow-sm"
      whileHover={{ scale: 1.01 }}
    >
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <h3 className="font-semibold text-[#2B2B2B] pr-4">{question}</h3>
        <motion.span
          className="flex-shrink-0 ml-4 text-[#0B3D91]"
          initial={false}
        >
          <svg
            className="w-5 h-5 transition-transform group-open:rotate-180"
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
      </summary>
      <div className="px-6 pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </motion.details>
  );
}
