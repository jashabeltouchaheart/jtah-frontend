"use client";

import Link from "next/link";
import { MoveRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface EventItem {
  title: string;
  date: string;
  bg: string;
  href: string;
}

const EVENTS: EventItem[] = [
  {
    title: "Jimmy Leslie - Men Why the Silence",
    date: "12 May 2025",
    bg: "linear-gradient(135deg, #201c36 0%, #3a325a 100%)",
    href: "#event-1",
  },
  {
    title: "Women Empowerment Summit",
    date: "28 March 2025",
    bg: "linear-gradient(135deg, #5f7a63 0%, #465c49 100%)",
    href: "#event-2",
  },
  {
    title: "Back to School Initiative",
    date: "14 January 2025",
    bg: "linear-gradient(135deg, #b88258 0%, #90603a 100%)",
    href: "#event-3",
  },
  {
    title: "Community Outreach Program",
    date: "10 November 2024",
    bg: "linear-gradient(135deg, #886ea8 0%, #684f88 100%)",
    href: "#event-4",
  },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="py-16 sm:py-20 lg:py-28 bg-[#eeecf7]/30 border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#7c74b2]">
              EVENTS & HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a3560] tracking-tight">
              Moments That Matter
            </h2>
          </div>
          <Link
            href="#events"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7c74b2] hover:text-[#3a3560] transition-colors group"
          >
            View All Events
            <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((evt, idx) => (
            <Link
              key={evt.title}
              href={evt.href}
              className="group block space-y-3"
            >
              {/* Image with zoom and overlay on hover */}
              <Reveal delay={idx * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-[#3a3560]/10 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-full h-44 sm:h-48 group-hover:scale-105 transition-transform duration-500 ease-out relative"
                    style={{ background: evt.bg }}
                  >
                    {/* Dark overlay on hover for readability */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  </div>
                </div>
              </Reveal>

              <div className="space-y-1 px-0.5">
                <h3 className="font-bold text-sm sm:text-base text-[#3a3560] group-hover:text-[#7c74b2] transition-colors duration-200 leading-snug">
                  {evt.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#3a3560]/55 font-medium">
                  <CalendarDays className="w-3.5 h-3.5 text-[#7c74b2]" />
                  <span>{evt.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
