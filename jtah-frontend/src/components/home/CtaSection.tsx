"use client";

import { Button } from "@/components/ui/Button";
import { CTA_LINKS } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f1eff8] via-[#f8f7fc] to-[#f3f1f9] border-y border-[#3a3560]/[0.06]">
      {/* Decorative ribbon swooshes on the left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 h-[180%] w-[280px] sm:w-[340px] opacity-90"
        viewBox="0 0 340 400"
        fill="none"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <linearGradient id="cta-ribbon-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c74b2" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#a79fd6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cta-ribbon-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9c2ec" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="cta-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path
          className="cta-ribbon"
          d="M-20 420 C 60 300, 40 180, 150 110 S 300 20, 330 -20 L 250 -20 C 210 40, 120 70, 70 150 S 10 330, -60 420 Z"
          fill="url(#cta-ribbon-a)"
          filter="url(#cta-soft)"
        />
        <path
          className="cta-ribbon cta-ribbon--slow"
          d="M-40 380 C 40 280, 90 230, 170 190 S 280 120, 320 60 L 300 50 C 250 110, 170 150, 110 200 S 10 320, -60 370 Z"
          fill="url(#cta-ribbon-b)"
        />
        <path
          d="M20 400 C 80 300, 110 220, 200 160"
          stroke="#7c74b2"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />
      </svg>

      {/* Soft glow on the right */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-full bg-[#b7aee6]/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:pl-40 py-14 sm:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-3 max-w-md mx-auto md:mx-0">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#2e2a4f] tracking-tight leading-tight">
            Be Part of the Journey
          </h2>
          <p className="text-sm text-[#3a3560]/65 leading-relaxed">
            Together, we can do more. Support our work, get involved or partner
            with us to create lasting change.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href={CTA_LINKS.donate}
            variant="primary"
            className="w-full sm:w-auto sm:px-10"
          >
            Donate
          </Button>
          <Button
            href={CTA_LINKS.volunteer}
            variant="outline"
            className="w-full sm:w-auto sm:px-9"
          >
            Volunteer
          </Button>
          <Button
            href={CTA_LINKS.partner}
            variant="outline"
            className="w-full sm:w-auto sm:px-9"
          >
            Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
