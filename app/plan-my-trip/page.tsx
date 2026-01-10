"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/animations";
import { siteContent } from "@/data/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelers: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  interests: string;
  message: string;
  consent: boolean;
  terms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function PlanMyTripPage() {
  const { forms } = siteContent;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    interests: "",
    message: "",
    consent: false,
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = forms.quote.fields.name.error;
    }

    if (!formData.email.trim()) {
      newErrors.email = forms.quote.fields.email.error;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = forms.quote.fields.email.error;
    }

    if (!formData.travelers) {
      newErrors.travelers = forms.quote.fields.travelers.error;
    }

    if (!formData.destination) {
      newErrors.destination = forms.quote.fields.destination.error;
    }

    if (!formData.consent) {
      newErrors.consent = "Please provide consent to continue";
    }

    if (!formData.terms) {
      newErrors.terms = "Please agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || "Failed to submit your request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF7F0]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto px-4 text-center"
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
            {forms.thankYou.title}
          </h1>
          <p className="text-xl text-[#0B3D91] font-medium mb-4">
            {forms.thankYou.subtitle}
          </p>
          <p className="text-gray-600 mb-8">{forms.thankYou.message}</p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {forms.thankYou.cta}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              {forms.quote.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {forms.quote.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <SlideInLeft className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label">
                      {forms.quote.fields.name.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={forms.quote.fields.name.placeholder}
                      className={`form-input ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">
                      {forms.quote.fields.email.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={forms.quote.fields.email.placeholder}
                      className={`form-input ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      {forms.quote.fields.phone.label}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={forms.quote.fields.phone.placeholder}
                      className="form-input"
                    />
                  </div>

                  {/* Travelers */}
                  <div>
                    <label htmlFor="travelers" className="form-label">
                      {forms.quote.fields.travelers.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className={`form-input ${errors.travelers ? "border-red-500" : ""}`}
                    >
                      <option value="">{forms.quote.fields.travelers.placeholder}</option>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3-4">3-4 Travelers</option>
                      <option value="5-8">5-8 Travelers</option>
                      <option value="9+">9+ Travelers</option>
                    </select>
                    {errors.travelers && (
                      <p className="text-red-500 text-sm mt-1">{errors.travelers}</p>
                    )}
                  </div>

                  {/* Destination */}
                  <div>
                    <label htmlFor="destination" className="form-label">
                      {forms.quote.fields.destination.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`form-input ${errors.destination ? "border-red-500" : ""}`}
                    >
                      <option value="">{forms.quote.fields.destination.placeholder}</option>
                      <option value="kathmandu">Kathmandu</option>
                      <option value="janakpurdham">Janakpurdham</option>
                      <option value="both">Both Destinations</option>
                      <option value="undecided">Not Sure Yet</option>
                    </select>
                    {errors.destination && (
                      <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="form-label">
                      {forms.quote.fields.budget.label}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">{forms.quote.fields.budget.placeholder}</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-3500">$2,000 - $3,500</option>
                      <option value="3500+">$3,500+</option>
                    </select>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label htmlFor="startDate" className="form-label">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* End Date */}
                  <div>
                    <label htmlFor="endDate" className="form-label">
                      Preferred End Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Interests */}
                  <div className="md:col-span-2">
                    <label htmlFor="interests" className="form-label">
                      {forms.quote.fields.interests.label}
                    </label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      placeholder={forms.quote.fields.interests.placeholder}
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="form-label">
                      {forms.quote.fields.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={forms.quote.fields.message.placeholder}
                      rows={4}
                      className="form-input"
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0B3D91] focus:ring-[#0B3D91]"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        {forms.quote.fields.consent.label} <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-red-500 text-sm">{errors.consent}</p>
                    )}

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0B3D91] focus:ring-[#0B3D91]"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        {forms.quote.fields.terms.label} <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm">{errors.terms}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="md:col-span-2">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>
                            <p className="text-red-700 font-medium">Submission Failed</p>
                            <p className="text-red-600 text-sm mt-1">{submitError}</p>
                            <p className="text-red-600 text-sm mt-2">
                              You can also reach us directly at{" "}
                              <a
                                href={`mailto:${siteContent.company.email}`}
                                className="underline hover:text-red-800"
                              >
                                {siteContent.company.email}
                              </a>{" "}
                              or{" "}
                              <a
                                href={`https://wa.me/${siteContent.company.whatsapp?.replace(/\s/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-800"
                              >
                                WhatsApp
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? forms.quote.submitting : forms.quote.submitButton}
                    </motion.button>
                  </div>
                </div>
              </form>
            </SlideInLeft>

            {/* Sidebar */}
            <SlideInRight>
              <div className="space-y-6 sticky top-24">
                {/* Why Choose Us */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-[family-name:var(--font-playfair)]">
                    Why Plan With Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Personalized itineraries tailored to you",
                      "Local experts with deep cultural knowledge",
                      "Response within 24 hours",
                      "No obligation consultation",
                      "Flexible booking options",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)] text-[#0B3D91]">
                    Prefer to Talk?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our travel consultants are happy to discuss your plans over phone or email.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{siteContent.company.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{siteContent.company.email}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="card p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#FF8C00] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your information is safe with us. We never share your data with third parties.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </div>
  );
}
