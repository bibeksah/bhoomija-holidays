"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Destinations",
      href: "/destinations",
      children: [
        { name: "Kathmandu", href: "/destinations/kathmandu" },
        { name: "Janakpurdham", href: "/destinations/janakpurdham" },
      ],
    },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#0B3D91]">
                Bhumija
              </span>
              <span className="text-2xl font-light font-[family-name:var(--font-playfair)] text-[#FF8C00]">
                Holidays
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                >
                  <button className="text-[#2B2B2B] hover:text-[#0B3D91] font-medium transition-colors flex items-center gap-1">
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDestinationsOpen ? "rotate-180" : ""
                      }`}
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
                  </button>
                  {isDestinationsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#FAF7F0] hover:text-[#0B3D91] transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#2B2B2B] hover:text-[#0B3D91] font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/plan-my-trip"
              className="btn-primary inline-flex items-center"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2B2B2B] hover:text-[#0B3D91] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                      className="w-full text-left px-4 py-2 text-[#2B2B2B] hover:bg-[#FAF7F0] rounded-lg font-medium flex items-center justify-between"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isDestinationsOpen ? "rotate-180" : ""
                        }`}
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
                    </button>
                    {isDestinationsOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#FAF7F0] rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-[#2B2B2B] hover:bg-[#FAF7F0] rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-2">
                <Link
                  href="/plan-my-trip"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plan My Trip
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
