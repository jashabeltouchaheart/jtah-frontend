"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, MoveRight } from "lucide-react";

interface Slide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bg: string;
}

const SLIDES: Slide[] = [
  {
    id: "01",
    badge: "FEATURED EVENT",
    title: "Jimmy Leslie",
    subtitle: "Men Why the Silence",
    description:
      "A powerful conversation on mental health, masculinity and the importance of speaking up.",
    bg: "linear-gradient(135deg, #110e20 0%, #1e1938 45%, #4e3575 100%)",
  },
  {
    id: "02",
    badge: "COMMUNITY IMPACT",
    title: "Women Empowerment",
    subtitle: "Thriving Futures",
    description:
      "Creating sustainable pathways for women to lead, innovate, and uplift local communities.",
    bg: "linear-gradient(135deg, #121f1a 0%, #1f3429 45%, #3d604e 100%)",
  },
  {
    id: "03",
    badge: "YOUTH INITIATIVE",
    title: "Back to School",
    subtitle: "Empowering Young Minds",
    description:
      "Supplying educational materials and mentoring so every child can reach their potential.",
    bg: "linear-gradient(135deg, #2b1810 0%, #462c1d 45%, #8c5738 100%)",
  },
  {
    id: "04",
    badge: "HEALTH & WELLBEING",
    title: "Care Outreach",
    subtitle: "Community Wellness",
    description:
      "Providing direct healthcare access and mental wellness advocacy for underserved communities.",
    bg: "linear-gradient(135deg, #18132b 0%, #291f4d 45%, #614691 100%)",
  },
];

const AUTOPLAY_MS = 6000;
const FADE_MS = 400;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const elapsedRef = useRef(0);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current || animating) return;
      setAnimating(true);
      elapsedRef.current = 0;
      setProgress(0);
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

  // Pause autoplay when the browser tab is hidden
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

  const running = isPlaying && !isHovered && isTabVisible && !animating;

  // Autoplay loop: advances progress with requestAnimationFrame so it
  // resumes exactly where it left off after a pause.
  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsedRef.current += now - last;
      last = now;
      const pct = Math.min(elapsedRef.current / AUTOPLAY_MS, 1);
      setProgress(pct);
      if (pct >= 1) {
        next();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-label="Hero Carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
    >
      <div
        className="relative min-h-[580px] lg:min-h-[660px] w-full flex flex-col justify-between p-8 sm:p-12 lg:p-16"
        style={{ background: slide.bg, transition: "background 0.9s ease" }}
      >
        {/* Ambient animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-orb absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
          <div className="hero-orb hero-orb--slow absolute -bottom-32 left-1/4 w-[520px] h-[520px] rounded-full bg-[#7c74b2]/20 blur-3xl" />
        </div>

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

        {/* Slide content: re keyed per slide so the staggered entrance replays */}
        <div
          key={current}
          aria-live={isPlaying ? "off" : "polite"}
          className={`relative z-10 max-w-2xl mt-10 sm:mt-14 space-y-5 transition-opacity duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Badge pill */}
          <span
            className="hero-rise inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] uppercase tracking-widest font-semibold text-white/80"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c74b2] inline-block animate-pulse" />
            {slide.badge}
          </span>

          <h1
            className="hero-rise text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
            style={{ animationDelay: "120ms" }}
          >
            {slide.title}
            <br />
            <span className="font-light text-white/90">{slide.subtitle}</span>
          </h1>

          <p
            className="hero-rise text-sm sm:text-base text-white/75 max-w-lg leading-relaxed"
            style={{ animationDelay: "240ms" }}
          >
            {slide.description}
          </p>

          {/* CTA Button */}
          <div className="hero-rise pt-2" style={{ animationDelay: "360ms" }}>
            <button
              type="button"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all duration-200 group"
            >
              <span className="w-7 h-7 rounded-md bg-white text-[#3a3560] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              Watch Highlights
            </button>
          </div>
        </div>

        {/* Bottom bar: indicators + controls */}
        <div className="relative z-10 flex items-center justify-between pt-10 border-t border-white/10 mt-10">
          {/* Numbered indicators with live autoplay progress */}
          <div className="flex items-center gap-5 sm:gap-7">
            {SLIDES.map((s, idx) => {
              const active = current === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  className="flex flex-col items-center gap-1.5 group"
                  aria-label={`Go to slide ${s.id}`}
                  aria-current={active ? "true" : undefined}
                >
                  <span
                    className={`text-xs font-bold tracking-wider transition-colors duration-200 ${
                      active
                        ? "text-white"
                        : "text-white/35 group-hover:text-white/60"
                    }`}
                  >
                    {s.id}
                  </span>
                  <span
                    className={`relative block h-0.5 rounded-full overflow-hidden transition-all duration-300 ${
                      active
                        ? "bg-white/25 w-10"
                        : "bg-white/25 w-3 group-hover:bg-white/45"
                    }`}
                  >
                    {active && (
                      <span
                        className="absolute inset-y-0 left-0 bg-white rounded-full"
                        style={{ width: `${progress * 100}%` }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Play / pause toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-90"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full bg-white text-[#3a3560] hover:bg-[#eeecf7] active:scale-90 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
