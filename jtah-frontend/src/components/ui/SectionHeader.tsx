import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Right side slot, usually an <ArrowLink /> */
  action?: ReactNode;
  size?: "md" | "lg";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const titleSizes = {
  md: "text-3xl sm:text-4xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
};

/** Eyebrow + heading + optional description and action, used by every section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  size = "md",
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        !!action && !centered && "sm:flex-row sm:items-end sm:justify-between",
        centered && "items-center text-center",
        className,
      )}
    >
      <div className={cn("space-y-2", centered && "max-w-2xl")}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading
          className={cn(
            "font-extrabold tracking-tight text-ink leading-tight",
            titleSizes[size],
          )}
        >
          {title}
        </Heading>
        {description && (
          <p className="pt-2 text-sm sm:text-base text-ink/70 leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
