"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Clip-path wipe-up reveal, scroll-triggered.
 * Returns containerRef (ScrollTrigger target) and imageWrapperRef (animated element).
 */
export function useRevealAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = imageWrapperRef.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
      return;
    }

    gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return { containerRef, imageWrapperRef };
}
