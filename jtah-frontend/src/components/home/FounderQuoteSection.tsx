"use client";

import { Reveal } from "@/components/ui/Reveal";

const FOUNDER_QUOTE = "We don't just support people, we walk with them - for the long term.";

export function FounderQuoteSection() {
  return (
    <section
      id="founder"
      className="py-16 sm:py-20 lg:py-28 bg-[#eeecf7]/60 border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-[#3a3560]/10 bg-white">
          <Reveal className="min-h-[280px] sm:min-h-[360px] w-full">
            <div
              role="img"
              aria-label="Photo of Favour Benson, Founder and Executive Director, to be added"
              className="w-full h-full min-h-[280px] sm:min-h-[360px]"
              style={{
                background:
                  "linear-gradient(135deg, #c48b60 0%, #a26943 50%, #7d4928 100%)",
              }}
            />
          </Reveal>
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
            <span className="text-xs font-bold text-[#7c74b2] tracking-wider uppercase">
              Founder Quote
            </span>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-[#3a3560] leading-snug italic">
              {FOUNDER_QUOTE}
            </blockquote>
            <div>
              <cite className="not-italic text-xs font-bold text-[#3a3560] tracking-wider uppercase block">
                Favour Benson
              </cite>
              <span className="text-[11px] text-[#3a3560]/55 font-medium">
                Founder &amp; Executive Director, JTAH Foundation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
