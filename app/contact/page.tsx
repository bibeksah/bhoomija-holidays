"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  HoverCard,
} from "@/components/animations";
import { siteContent } from "@/data/content";

export default function ContactPage() {
  const { company } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions about your Nepal journey? We&apos;re here to help.
              Reach out and our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <SlideInLeft>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Whether you have a question about our packages, need help
                    planning your trip, or just want to say hello, we&apos;d love to
                    hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Kathmandu Office */}
                  <HoverCard>
                    <div className="card p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0B3D91]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-[#0B3D91]"
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
                        <h3 className="font-semibold text-[#2B2B2B] mb-1">
                          Kathmandu Office
                        </h3>
                        <p className="text-gray-600">
                          Balkhu, Kathmandu
                          <br />
                          Nepal
                        </p>
                      </div>
                    </div>
                  </HoverCard>

                  {/* Janakpur Office */}
                  <HoverCard>
                    <div className="card p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0B3D91]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-[#0B3D91]"
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
                        <h3 className="font-semibold text-[#2B2B2B] mb-1">
                          Janakpur Office
                        </h3>
                        <p className="text-gray-600">
                          Ramaanand Chowk, Janakpur
                          <br />
                          Nepal
                        </p>
                      </div>
                    </div>
                  </HoverCard>

                  <HoverCard>
                    <a href={`tel:${company.phone}`} className="block">
                      <div className="card p-6 flex items-start gap-4 hover:border-[#FF8C00] transition-colors">
                        <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-6 h-6 text-[#FF8C00]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2B2B2B] mb-1">Phone</h3>
                          <p className="text-gray-600">{company.phone}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Sun-Fri, 9AM-6PM NPT
                          </p>
                        </div>
                      </div>
                    </a>
                  </HoverCard>

                  <HoverCard>
                    <a
                      href={`https://wa.me/${company.whatsapp?.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="card p-6 flex items-start gap-4 hover:border-[#25D366] transition-colors">
                        <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-6 h-6 text-[#25D366]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2B2B2B] mb-1">WhatsApp</h3>
                          <p className="text-gray-600">{company.whatsapp}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Quick response guaranteed
                          </p>
                        </div>
                      </div>
                    </a>
                  </HoverCard>

                  <HoverCard>
                    <a href={`mailto:${company.email}`} className="block">
                      <div className="card p-6 flex items-start gap-4 hover:border-[#D4AF37] transition-colors">
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
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
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2B2B2B] mb-1">Email</h3>
                          <p className="text-gray-600">{company.email}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </a>
                  </HoverCard>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-semibold text-[#2B2B2B] mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { name: "Facebook", href: company.socialMedia.facebook },
                      { name: "Instagram", href: company.socialMedia.instagram },
                      { name: "Twitter", href: company.socialMedia.twitter },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-[#0B3D91] text-white flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.name === "Facebook" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                          </svg>
                        )}
                        {social.name === "Instagram" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        )}
                        {social.name === "Twitter" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </SlideInLeft>

            {/* Contact Form */}
            <SlideInRight className="lg:col-span-2">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-12 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
                    Send Us a Message
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="form-input"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="packages">Package Information</option>
                        <option value="booking">Booking Assistance</option>
                        <option value="custom">Custom Itinerary Request</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="How can we help you?"
                        className="form-input"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="btn-primary w-full py-4 text-lg disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2B2B2B] font-[family-name:var(--font-playfair)]">
              Looking for Quick Answers?
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "FAQs",
                description: "Find answers to common questions",
                href: "/faq",
                icon: "❓",
              },
              {
                title: "Our Packages",
                description: "Browse our curated travel experiences",
                href: "/packages",
                icon: "📦",
              },
              {
                title: "Plan My Trip",
                description: "Get a personalized itinerary",
                href: "/plan-my-trip",
                icon: "✈️",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card p-6 text-center hover:shadow-lg transition-shadow h-full"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-[#2B2B2B] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
