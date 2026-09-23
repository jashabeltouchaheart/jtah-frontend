import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** white = plain, tint = soft lilac wash */
  tone?: "white" | "tint";
  className?: string;
  containerClassName?: string;
  "aria-label"?: string;
}

const tones = {
  white: "bg-white",
  tint: "bg-tint/30",
};

/** Standard vertical rhythm, background and bottom border for page sections. */
export function Section({
  id,
  children,
  tone = "white",
  className,
  containerClassName,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-28 border-b border-ink/10",
        tones[tone],
        className,
      )}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
