"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Note for designer/Shammah: these are the verified numbers from the current
// live site. An earlier mockup showed different placeholder figures (200+
// communities, 10,000+ lives) — confirm with JTAH which set is accurate
// before this goes live.
const STATS = [
  { value: "2000", label: "Since" },
  { value: "20+", label: "Years of Service" },
  { value: "1,000+", label: "Lives Touched" },
  { value: "50+", label: "Active Projects" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-5 sm:space-y-6">
          <SectionHeader
            size="lg"
            eyebrow="For the love of humanity"
            title={
              <>
                We are <span className="text-lilac">JTAH</span>
                <br />
                Foundation
              </>
            }
            description="Since 2000, we’ve stood with women and the girl-child
              across Nigeria, through welfare, education, and training. For the love
              of humanity.
              "
          />
          <Button href="/about" variant="dark" trailingIcon={<MoveRight />}>
            Learn Our Story
          </Button>
        </div>

        <div className="lg:col-span-7">
          {/* Stats, 2x2 card grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[#eeecf7] px-5 py-6 sm:px-6 sm:py-7 transition-colors duration-200 hover:bg-[#eeecf7]/70"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3a3560] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#3a3560]/75">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
