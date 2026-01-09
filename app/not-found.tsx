"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#0B3D91] to-[#083070] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[150px] md:text-[200px] font-bold text-white/10 leading-none font-[family-name:var(--font-playfair)]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            404
          </motion.h1>

          {/* Message */}
          <div className="-mt-16 md:-mt-24">
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Page Not Found
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Looks like you&apos;ve wandered off the beaten path. Don&apos;t worry, even the best
              explorers get lost sometimes. Let us help you find your way back.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#FF8C00] text-white font-semibold rounded-lg hover:bg-[#D4AF37] transition-colors shadow-lg"
                >
                  Return Home
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
                >
                  View Packages
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <p className="text-white/60 text-sm mt-8">
              Need help?{" "}
              <Link href="/contact" className="text-[#D4AF37] hover:text-[#FF8C00] underline">
                Contact us
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
