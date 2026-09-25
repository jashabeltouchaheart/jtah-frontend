import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface YearSwitcherProps {
  years: number[];
  activeYear: number;
}

export function YearSwitcher({ years, activeYear }: YearSwitcherProps) {
  return (
    <nav
      aria-label="Filter gallery by year"
      className="grid w-full grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-10"
    >
      {years.map((year) => {
        const active = year === activeYear;
        return (
          <Link
            key={year}
            href={`/gallery?year=${year}`}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex w-full items-center justify-center gap-1 rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200",
              active
                ? "bg-brand text-white border-brand"
                : "bg-white text-ink/70 border-ink/15 hover:border-brand hover:text-brand",
            )}
          >
            {year}
            {active && <MoveRight className="w-3.5 h-3.5" aria-hidden />}
          </Link>
        );
      })}
    </nav>
  );
}
