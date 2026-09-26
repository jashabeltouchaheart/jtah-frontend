import { useId } from "react";
import { cn } from "@/lib/cn";

interface RibbonDecorProps {
  /** Which edge the ribbon sweeps in from. "right" mirrors it. */
  side?: "left" | "right";
  className?: string;
}

/** Soft animated purple ribbons, first used on the homepage CTA. */
export function RibbonDecor({ side = "left", className }: RibbonDecorProps) {
  // useId returns something like ":r1:". Colons break url(#...) references, so strip them
  const id = useId().replace(/:/g, "");
  const gradA = `ribbon-a-${id}`;
  const gradB = `ribbon-b-${id}`;
  const soft = `ribbon-soft-${id}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 400"
      fill="none"
      preserveAspectRatio="xMinYMid slice"
      className={cn(
        "pointer-events-none absolute top-1/2 h-[180%] w-[280px] -translate-y-1/2 opacity-90 sm:w-[340px]",
        side === "left" ? "-left-10" : "-right-10 -scale-x-100",
        className,
      )}
    >
      <defs>
        <linearGradient id={gradA} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c74b2" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#a79fd6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={gradB} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9c2ec" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={soft} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path
        className="cta-ribbon"
        d="M-20 420 C 60 300, 40 180, 150 110 S 300 20, 330 -20 L 250 -20 C 210 40, 120 70, 70 150 S 10 330, -60 420 Z"
        fill={`url(#${gradA})`}
        filter={`url(#${soft})`}
      />
      <path
        className="cta-ribbon cta-ribbon--slow"
        d="M-40 380 C 40 280, 90 230, 170 190 S 280 120, 320 60 L 300 50 C 250 110, 170 150, 110 200 S 10 320, -60 370 Z"
        fill={`url(#${gradB})`}
      />
      <path
        d="M20 400 C 80 300, 110 220, 200 160"
        stroke="#7c74b2"
        strokeOpacity="0.25"
        strokeWidth="1.2"
      />
    </svg>
  );
}
