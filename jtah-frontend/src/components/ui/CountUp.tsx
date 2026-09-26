"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Runs before paint in the browser, so the starting number never flashes
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  /** Adds thousands separators, e.g. 10,000 */
  separator?: boolean;
  className?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  separator = false,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  const format = (n: number) =>
    separator ? Math.round(n).toLocaleString("en-US") : String(Math.round(n));

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const counter = { value: from };
    el.textContent = format(from);

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: to,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.value);
        },
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });

    return () => {
      ctx.revert();
      el.textContent = format(to);
    };
  }, [to, from, duration, reducedMotion]);

  // server renders the final number, so search engines and
  // users without JavaScript still see the real value
  return (
    <span ref={ref} className={className}>
      {format(to)}
    </span>
  );
}
