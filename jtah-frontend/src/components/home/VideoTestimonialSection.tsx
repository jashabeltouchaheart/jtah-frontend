"use client";

import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VideoTestimonialSection() {
  return (
    <section
      id="testimonial"
      className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        <SectionHeader
          eyebrow="Video Testimonial"
          title={
            <>
              See What Some of Our Beneficiaries
              <br />
              Have to Say
            </>
          }
        />

        <Reveal className="w-full max-w-2xl mx-auto group cursor-pointer">
          <div
            role="img"
            aria-label="Video testimonial from JTAH Foundation beneficiaries, to be added"
            className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center text-white shadow-md group-hover:shadow-2xl transition-shadow duration-500"
            style={{
              background:
                "linear-gradient(135deg, #1b162f 0%, #292144 50%, #44336c 100%)",
            }}
          >
            {/* Ambient animated glow orbs, same treatment as the hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="hero-orb absolute -top-24 -right-20 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-white/10 blur-3xl" />
              <div className="hero-orb hero-orb--slow absolute -bottom-28 left-1/4 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#7c74b2]/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 group-hover:bg-white/25 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-3 shadow-lg">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white ml-0.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 group-hover:text-white transition-colors duration-200">
                Beneficiary Stories
              </span>
            </div>

            {/* Ripple ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/10 scale-50 group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
