"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations";
import { policies } from "@/data/policies";
import ReactMarkdown from "react-markdown";

export default function PrivacyPage() {
  const { privacy } = policies;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#0B3D91] to-[#083070]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{privacy.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              {privacy.title}
            </h1>
            <p className="text-white/70">
              Last updated: {privacy.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#2B2B2B] prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-[#0B3D91] prose-a:no-underline hover:prose-a:underline">
              <ReactMarkdown>{privacy.content}</ReactMarkdown>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Other Policies */}
      <section className="py-12 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-[family-name:var(--font-playfair)]">
            Other Policies
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/policies/terms" className="card p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#0B3D91]">Terms & Conditions</h3>
              <p className="text-sm text-gray-600">Our service agreement</p>
            </Link>
            <Link href="/policies/cancellation" className="card p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#0B3D91]">Cancellation Policy</h3>
              <p className="text-sm text-gray-600">Refunds and modifications</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
