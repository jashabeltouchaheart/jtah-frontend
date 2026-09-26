import Link from "next/link";
import { CASE_CATEGORIES } from "@/content/cases";
import { casesHref } from "@/lib/cases-url";
import { cn } from "@/lib/cn";

interface CaseCategoryChipsProps {
  category?: string;
  q?: string;
}

const CHIPS = [{ key: undefined, label: "All" }, ...CASE_CATEGORIES];

export function CaseCategoryChips({ category, q }: CaseCategoryChipsProps) {
  return (
    <nav
      aria-label="Filter cases by category"
      className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0"
    >
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {CHIPS.map((chip) => {
          const active = chip.key === category;
          return (
            <li key={chip.label}>
              <Link
                href={casesHref({ category: chip.key, q })}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center whitespace-nowrap rounded-full border px-4 text-xs font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-ink/15 bg-white text-ink/75 hover:border-brand hover:text-brand",
                )}
              >
                {chip.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
