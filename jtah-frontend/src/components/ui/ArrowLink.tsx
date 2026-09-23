import Link from "next/link";
import type { ReactNode } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
  className?: string;
}

/** Text link with a trailing arrow, e.g. "View All Events", "Learn More". */
export function ArrowLink({
  href,
  children,
  size = "md",
  className,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group/arrow inline-flex items-center gap-1.5 font-semibold text-lilac hover:text-ink transition-colors duration-200",
        "focus-visible:outline-none focus-visible:underline underline-offset-4",
        size === "sm" ? "text-xs" : "text-sm",
        className,
      )}
    >
      {children}
      <MoveRight
        aria-hidden
        className={cn(
          "transition-transform duration-200 group-hover/arrow:translate-x-1",
          size === "sm" ? "size-3.5" : "size-4",
        )}
      />
    </Link>
  );
}
