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

export default function AboutPage() {
  const { about } = siteContent;

  const stats = [
    { value: "500+", label: "Happy Travelers" },
    { value: "50+", label: "Cultural Experiences" },
    { value: "15+", label: "Expert Guides" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

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

        <Float duration={8} y={30} className="absolute top-20 right-20 opacity-10">
          <div className="w-64 h-64 rounded-full bg-[#FF8C00]" />
        </Float>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              {about.hero.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="gold-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                {about.story.title}
              </h2>
              <div className="space-y-4">
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <Image
                      src="/Madhubani-Shreya-Kumari-08.jpg.webp"
                      alt="Madhubani Art - Traditional Mithila Painting depicting scenes from Ramayana"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <Float duration={4} y={15} className="absolute -bottom-6 -right-6 z-10">
                  <div className="bg-white rounded-xl shadow-xl p-4">
                    <p className="text-sm text-gray-500">Our name means</p>
                    <p className="font-semibold text-[#2B2B2B]">&quot;Daughter of the Earth&quot;</p>
                    <p className="text-xs text-[#FF8C00] mt-1">Another name for Goddess Sita</p>
                  </div>
                </Float>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
              {about.mission.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {about.mission.text}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every journey we create
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {about.values.map((value, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="card p-8 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2 font-[family-name:var(--font-playfair)]">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#083070] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-white/80">
              The Bhumija difference in every journey
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏛️",
                title: "Deep Local Roots",
                description:
                  "Our team includes descendants of Newari artisan families and scholars of Mithila culture—we share Nepal from within.",
              },
              {
                icon: "🎭",
                title: "Beyond Tourism",
                description:
                  "We create genuine cultural exchanges, not performances. Every interaction is authentic, respectful, and meaningful.",
              },
              {
                icon: "🤝",
                title: "Community First",
                description:
                  "We partner with local families, artisans, and guides, ensuring tourism directly benefits those who make Nepal special.",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-4xl"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              {about.team.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {about.team.subtitle}
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Travel Consultants",
                role: "Your Journey Architects",
                description:
                  "Expert planners who craft personalized itineraries based on your interests and preferences.",
              },
              {
                name: "Cultural Guides",
                role: "Your Local Storytellers",
                description:
                  "Certified heritage guides with deep knowledge of Nepal's history, traditions, and hidden gems.",
              },
              {
                name: "Local Partners",
                role: "Your Community Connectors",
                description:
                  "Trusted families, artisans, and establishments who open their doors to share authentic Nepal.",
              },
            ].map((member, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="card p-8 h-full text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center">
                      <span className="text-4xl text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-1 font-[family-name:var(--font-playfair)]">
                      {member.name}
                    </h3>
                    <p className="text-[#FF8C00] text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="gold-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Experience Nepal Our Way?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us show you the Nepal that goes beyond the surface—the stories,
              traditions, and connections that transform a trip into a journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="btn-outline text-lg px-8"
                >
                  View Our Packages
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
