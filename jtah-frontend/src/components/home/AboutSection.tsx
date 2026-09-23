"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { label: "Touching lives", value: "2000", prefix: "Since" },
  { label: "Communities reached", value: "200+", prefix: "" },
  { label: "Lives Impacted", value: "10,000+", prefix: "" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
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
            description="We exist to uplift individuals, strengthen communities, and create sustainable change through education, empowerment, and advocacy."
          />
          <Button href="#about" variant="dark" trailingIcon={<MoveRight />}>
            About Us
          </Button>
        </div>

        <div className="lg:col-span-7 space-y-8 sm:space-y-10">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-6 sm:gap-8 pb-8 border-b border-[#3a3560]/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col group">
                {/* Prefix row is always rendered so every number sits on the same baseline */}
                <span
                  className={`h-4 text-[11px] leading-4 text-[#3a3560]/55 font-medium ${
                    stat.prefix ? "block" : "hidden sm:block"
                  }`}
                  aria-hidden={!stat.prefix}
                >
                  {stat.prefix || "\u00A0"}
                </span>
                <div className="mt-1 text-3xl lg:text-4xl leading-none font-black text-[#3a3560] tracking-tight tabular-nums group-hover:text-[#7c74b2] transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs text-[#3a3560]/65 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#3a3560]">
              Real People.
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#7c74b2]">
              Lasting Change.
            </p>
          </div>

          {/* Quote card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-[#3a3560]/10 hover:shadow-md transition-shadow duration-300">
            <Reveal className="min-h-[200px] sm:min-h-[220px] w-full">
              <div
                className="w-full h-full min-h-[200px] sm:min-h-[220px]"
                style={{
                  background:
                    "linear-gradient(135deg, #c48b60 0%, #a26943 50%, #7d4928 100%)",
                }}
              />
            </Reveal>
            <div className="bg-[#eeecf7]/60 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <blockquote className="text-sm sm:text-base lg:text-lg font-medium text-[#3a3560] leading-snug italic">
                "We don't just support people, we walk with them - for the long
                term."
              </blockquote>
              <div>
                <cite className="not-italic text-xs font-bold text-[#3a3560] tracking-wider uppercase block">
                  FAVOUR BENSON
                </cite>
                <span className="text-[11px] text-[#3a3560]/55 font-medium">
                  Founder & Executive Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
