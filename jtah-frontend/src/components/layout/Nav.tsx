"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, CTA_LINKS } from "@/lib/site";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#3a3560]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-[72px] grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 justify-self-start focus:outline-none"
          aria-label="JTAH Foundation Home"
        >
          <Image
            src="/images/brand/jtah-logo.png"
            alt="JTAH Foundation"
            width={455}
            height={219}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 justify-self-center"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`nav-link text-[13.5px] font-normal tracking-[0.01em] transition-colors duration-300 hover:text-[#6a4f9b] py-1 ${
                isActive(link.href)
                  ? "text-[#6a4f9b] font-medium"
                  : "text-[#3a3560]/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-2.5 justify-self-end">
          <Button
            href={CTA_LINKS.volunteer}
            variant="outline"
            size="sm"
            leadingIcon={<HandHeart />}
            className="hidden sm:inline-flex"
          >
            Volunteer
          </Button>
          <Button
            href={CTA_LINKS.donate}
            variant="primary"
            size="sm"
            leadingIcon={<Heart className="fill-current" />}
            className="hidden sm:inline-flex"
          >
            Donate
          </Button>

          {/* Two line menu toggle, morphs into an X when open */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-11 h-11 -mr-2 flex items-center justify-center rounded-lg text-[#3a3560] hover:text-[#6a4f9b] hover:bg-[#eeecf7]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a4f9b]/40 group"
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span className="relative block w-7 h-3">
              <span
                className={`absolute left-0 h-[2px] w-7 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute h-[2px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen
                    ? "left-0 w-7 top-1/2 -translate-y-1/2 -rotate-45"
                    : "right-0 w-5 bottom-0 group-hover:w-7"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-[#3a3560]/10 bg-white px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
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
                  isActive(link.href)
                    ? "text-[#6a4f9b]"
                    : "text-[#3a3560]/80 hover:text-[#6a4f9b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="sm:hidden pt-4 border-t border-[#3a3560]/10 flex flex-col gap-3">
            <Button
              href={CTA_LINKS.volunteer}
              variant="outline"
              fullWidth
              leadingIcon={<HandHeart />}
              onClick={() => setMobileOpen(false)}
            >
              Volunteer
            </Button>
            <Button
              href={CTA_LINKS.donate}
              variant="primary"
              fullWidth
              leadingIcon={<Heart className="fill-current" />}
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
