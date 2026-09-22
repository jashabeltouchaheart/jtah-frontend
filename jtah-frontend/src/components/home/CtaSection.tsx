'use client';

import Link from 'next/link';

const outlineBtn =
  'w-full sm:w-auto text-center px-9 py-3 sm:py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-[#7c74b2]/45 text-[#3a3560] text-sm font-medium transition-all duration-300 hover:bg-white hover:border-[#6b5fae] hover:text-[#6b5fae] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(107,95,174,0.55)] active:scale-95';

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
            Together, we can do more. Support our work, get involved
            or partner with us to create lasting change.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="#donate"
            className="w-full sm:w-auto text-center px-10 py-3 sm:py-2.5 rounded-lg bg-gradient-to-b from-[#7a6fc0] to-[#62579f] text-white text-sm font-medium shadow-[0_10px_24px_-10px_rgba(98,87,159,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(98,87,159,0.85)] hover:brightness-110 active:scale-95"
          >
            Donate
          </Link>
          <Link href="#volunteer" className={outlineBtn}>
            Volunteer
          </Link>
          <Link href="#partner" className={outlineBtn}>
            Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
