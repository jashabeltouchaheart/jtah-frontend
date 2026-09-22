"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart, HandHeart } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "News & Updates", href: "#news" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#3a3560]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 focus:outline-none" aria-label="JTAH Foundation Home">
          <Image
            src="/images/brand/jtah-logo.png"
            alt="JTAH Foundation"
            width={455}
            height={219}
            priority
            className="h-11 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`nav-link text-sm font-medium transition-colors duration-300 hover:text-[#6a4f9b] py-1 ${
                link.active ? "text-[#6a4f9b]" : "text-[#3a3560]/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#volunteer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#3a3560] border border-[#3a3560]/15 hover:border-[#6a4f9b] hover:text-[#6a4f9b] hover:bg-[#eeecf7]/60 transition-all duration-300 group"
          >
            <HandHeart className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Volunteer
          </Link>

          <Link
            href="#donate"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#6a4f9b] hover:bg-[#593d88] text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            <Heart className="w-4 h-4 fill-current" />
            Donate
          </Link>

          {/* Atelier-style Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#3a3560] hover:text-[#6a4f9b] focus:outline-none rounded-md"
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Atelier-style Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#3a3560]/10 bg-white px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold tracking-wide py-2.5 transition-colors ${
                  link.active
                    ? "text-[#6a4f9b]"
                    : "text-[#3a3560]/80 hover:text-[#6a4f9b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#3a3560]/10 flex flex-col gap-3">
            <Link
              href="#volunteer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-[#3a3560]/15 text-[#3a3560] text-sm font-semibold"
            >
              <HandHeart className="w-4 h-4" />
              Volunteer
            </Link>
            <Link
              href="#donate"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#6a4f9b] text-white text-sm font-semibold shadow-sm"
            >
              <Heart className="w-4 h-4 fill-current" />
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
