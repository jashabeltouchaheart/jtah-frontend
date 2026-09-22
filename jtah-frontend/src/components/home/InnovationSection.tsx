"use client";

import Link from "next/link";
import { Play, MoveRight } from "lucide-react";

export function InnovationSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#3a3560]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Video Card */}
        <div className="lg:col-span-5 w-full group cursor-pointer">
          <div
            className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-white shadow-md group-hover:shadow-2xl transition-shadow duration-500"
            style={{
              background:
                "linear-gradient(135deg, #1b162f 0%, #292144 50%, #44336c 100%)",
            }}
          >
            <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-white/25 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
              <Play className="w-5 h-5 fill-white text-white ml-0.5" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 group-hover:text-white transition-colors duration-200">
              Watch Our Story · 2:48
            </span>

            {/* Ripple ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/10 scale-50 group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none" />
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-4 space-y-5 sm:space-y-6">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#7c74b2]">
            OUR CAUSE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3a3560] tracking-tight leading-tight">
            A Brighter Future Through Innovation
          </h2>
          <p className="text-sm sm:text-base text-[#3a3560]/70 leading-relaxed">
            We combine compassion with technology to create scalable solutions.
            From AI-powered learning tools to digital advocacy, we're building a
            smarter, more inclusive future.
          </p>
          <Link
            href="#proposed-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7c74b2] hover:bg-[#3a3560] text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 group"
          >
            See Our Proposed Work
            <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Accent graphic */}
        <div className="lg:col-span-3">
          <div className="space-y-3">
            <div
              className="w-full aspect-[16/9] sm:aspect-square rounded-2xl border border-[#3a3560]/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={{
                background: "linear-gradient(135deg, #d8d3e8 0%, #c4bddb 100%)",
              }}
            />
            <p className="text-[11px] text-[#3a3560]/55 font-medium tracking-wide">
              Innovation. Technology. Impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
