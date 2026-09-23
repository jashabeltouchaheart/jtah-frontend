"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface RevealProps {
  children: ReactNode;
  /** Classes for the outer box (trigger). Put rounding, borders, shadows here. */
  className?: string;
  /** Classes for the inner wrapper that gets wiped in. */
  innerClassName?: string;
  style?: CSSProperties;
  delay?: number;
}

/**
 * Wraps any media block (image, gradient placeholder, video card) in the same
 * clip-path wipe-up reveal used on Atelier. RevealImage uses the same hook.
 */
export function Reveal({
  children,
  className = "",
  innerClassName = "",
  style,
  delay = 0,
}: RevealProps) {
  const { containerRef, imageWrapperRef } = useRevealAnimation({ delay });

  return (
    <div ref={containerRef} style={style} className={className}>
      <div
        ref={imageWrapperRef}
        className={`w-full h-full will-change-[clip-path] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
