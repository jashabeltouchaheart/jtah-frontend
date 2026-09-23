"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// useLayoutEffect on the client so the element is hidden before first paint
// (no flash of the finished state), useEffect on the server to avoid warnings.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface RevealOptions {
  /** Seconds to wait before the wipe starts, handy for staggering cards. */
  delay?: number;
  /** ScrollTrigger start position. Matches Atelier by default. */
  start?: string;
}

/**
 * Atelier clip-path wipe-up reveal, scroll-triggered.
 * Returns containerRef (ScrollTrigger target) and imageWrapperRef (animated element).
 */
export function useRevealAnimation({ delay = 0, start = "top 85%" }: RevealOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useIsoLayoutEffect(() => {
    const el = imageWrapperRef.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { clearProps: "clipPath" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        delay,
        ease: "power3.out",
        // Drop the clip once finished so shadows and hover effects are not cut off
        clearProps: "clipPath",
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, delay, start]);

  return { containerRef, imageWrapperRef };
}
