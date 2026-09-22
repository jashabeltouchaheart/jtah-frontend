'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News & Updates', href: '#news' },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#3a3560]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col leading-tight focus:outline-none" aria-label="JTAH Foundation Home">
          <span className="font-extrabold text-2xl tracking-tight text-[#3a3560]">
            JTAH
          </span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6a4f9b]">
            FOUNDATION
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={`nav-link text-sm font-medium transition-colors duration-300 hover:text-[#6a4f9b] py-1 ${
                link.active ? 'text-[#6a4f9b]' : 'text-[#3a3560]/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-2 text-[#3a3560]/70 hover:text-[#6a4f9b] transition-colors rounded-full hover:bg-[#eeecf7]"
          >
            <Search className="w-4 h-4" />
          </button>

          <Link
            href="#donate"
            className="hidden sm:inline-flex px-6 py-2.5 rounded-lg bg-[#6a4f9b] hover:bg-[#593d88] text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            Donate
          </Link>

          {/* Atelier-style Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#3a3560] hover:text-[#6a4f9b] focus:outline-none rounded-md"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Atelier-style Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#3a3560]/10 bg-white px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold tracking-wide py-2.5 transition-colors ${
                  link.active
                    ? 'text-[#6a4f9b]'
                    : 'text-[#3a3560]/80 hover:text-[#6a4f9b]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#3a3560]/10 flex flex-col gap-3">
            <Link
              href="#donate"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-[#6a4f9b] text-white text-sm font-semibold shadow-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}