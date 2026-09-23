import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block text-[11px] uppercase tracking-[0.14em] font-semibold text-lilac",
        className,
      )}
    >
      {children}
    </span>
  );
}
