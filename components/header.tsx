"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="API Lexica Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl">API Lexica</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#apis"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            scroll={true}
          >
            APIs
          </Link>
          <Link
            href="/#talk-to-us"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            scroll={true}
          >
            Talk to Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#apis"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              scroll={true}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              APIs
            </Link>
            <Link
              href="/#talk-to-us"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              scroll={true}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Talk to Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
