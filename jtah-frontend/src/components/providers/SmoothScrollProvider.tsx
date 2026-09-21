"use client";

import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      destroyLenis();
      return;
    }

    initLenis();
    return () => {
      destroyLenis();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
