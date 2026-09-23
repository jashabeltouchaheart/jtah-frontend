import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Standard page width and side gutters */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
