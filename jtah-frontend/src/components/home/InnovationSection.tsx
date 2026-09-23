"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Laptop, Sparkles, HeartHandshake, Pause, Play, MoveRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Slide {
  id: string;
  icon: typeof Laptop;
  badge: string;
  title: string;
  description: string;
  bg: string;
}

const SLIDES: Slide[] = [
  {
    id: "01",
    icon: Laptop,
    badge: "The Gap We See",
    title: "Many Girls Have Never Opened Microsoft Word",
    description:
      "In communities like Alimosho, basic tools like Word and Excel, let alone AI tools like ChatGPT, remain out of reach for many girls.",
    bg: "linear-gradient(135deg, #1b162f 0%, #292144 50%, #44336c 100%)",
  },
  {
    id: "02",
    icon: Sparkles,
    badge: "Where We're Headed",
    title: "Tech Education for the Girl-Child",
    description:
      "We're building hands-on training in essential software and AI literacy, so every girl has the tools to compete and create.",
    bg: "linear-gradient(135deg, #201a38 0%, #34285c 50%, #5a3f8f 100%)",
  },
  {
    id: "03",
    icon: HeartHandshake,
    badge: "Join Us",
    title: "We're Looking for Partners & Sponsors",
    description:
      "Help us close the digital divide for the girl-child. Every partnership brings more girls closer to the tools of tomorrow.",
    bg: "linear-gradient(135deg, #241a2f 0%, #3a2350 50%, #6b3f7d 100%)",
  },
];

const AUTOPLAY_MS = 5000;
const FADE_MS = 350;

export function InnovationSection() {
  const reducedMotion = useReducedMotion();

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current || animating) return;
      setAnimating(true);
      fadeTimer.current = setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, FADE_MS);
    },
    [current, animating],
  );

  const next = useCallback(
    () => goTo((current + 1) % SLIDES.length),
    [current, goTo],
  );

  useEffect(() => {
    const onVis = () => setIsTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(
    () => () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    },
    [],
  );

  const running =
    isPlaying && !isHovered && isTabVisible && !animating && !reducedMotion;

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [running, next, current]);

  const slide = SLIDES[current];
  const Icon = slide.icon;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#3a3560]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Initiative Carousel */}
        <Reveal className="lg:col-span-5 w-full group">
          <div
            role="region"
            aria-label="Our Tech Education Initiative for the Girl-Child"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsHovered(true)}
            onBlurCapture={() => setIsHovered(false)}
            className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-col justify-between text-white shadow-md group-hover:shadow-2xl transition-shadow duration-500 p-6 sm:p-7"
            style={{ background: slide.bg, transition: "background 0.9s ease" }}
          >
            {/* Badge */}
            <span className="relative z-10 inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] uppercase tracking-widest font-semibold text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c74b2] inline-block animate-pulse" />
              {slide.badge}
            </span>

            {/* Slide content */}
            <div
              key={current}
              aria-live={isPlaying ? "off" : "polite"}
              className={`relative z-10 space-y-3 transition-opacity duration-300 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg sm:text-xl font-bold leading-snug">
                {slide.title}
              </p>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-[34ch]">
                {slide.description}
              </p>
            </div>

            {/* Dots + play/pause */}
            <div className="relative z-10 flex items-center justify-between pt-2">
              <div className="flex items-center gap-2.5">
                {SLIDES.map((s, idx) => {
                  const active = current === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goTo(idx)}
                      aria-label={`Go to slide ${idx + 1} of ${SLIDES.length}`}
                      aria-current={active ? "true" : undefined}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-white w-6"
                          : "bg-white/35 w-1.5 hover:bg-white/60"
                      }`}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-90"
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3 fill-current" />
                ) : (
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-4 space-y-5 sm:space-y-6">
          <SectionHeader
            eyebrow="Tech Education for the Girl-Child"
            title="Closing the Digital Divide, One Girl at a Time"
            description="In communities like Alimosho, many girls have never used basic tools like Microsoft Word or Excel, let alone AI tools like ChatGPT. We're building hands-on tech education to close that gap, and we need partners and sponsors to help us scale it."
          />
          <Button href="#partner" variant="primary" trailingIcon={<MoveRight />}>
            Partner With Us
          </Button>
        </div>

        {/* Accent graphic */}
        <div className="lg:col-span-3">
          <div className="space-y-3">
            <Reveal delay={0.15}>
              <div
                className="w-full aspect-[16/9] sm:aspect-square rounded-2xl border border-[#3a3560]/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #d8d3e8 0%, #c4bddb 100%)",
                }}
              />
            </Reveal>
            <p className="text-[11px] text-[#3a3560]/55 font-medium tracking-wide">
              Digital Skills. Equity. Opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
