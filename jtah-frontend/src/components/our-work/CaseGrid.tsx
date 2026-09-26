import Link from "next/link";
import type { CaseStory } from "@/content/cases";
import { CaseCard } from "./CaseCard";

interface CaseGridProps {
  items: CaseStory[];
}

export function CaseGrid({ items }: CaseGridProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-tint/40 px-6 py-16 text-center">
        <p className="font-serif text-xl text-ink">
          No cases match your search.
        </p>
        <Link
          href="/our-work"
          scroll={false}
          className="mt-4 inline-block text-sm font-medium text-brand underline underline-offset-4 hover:text-brand-hover"
        >
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((story, index) => (
        <li key={story.slug}>
          <CaseCard story={story} delay={(index % 3) * 0.08} />
        </li>
      ))}
    </ul>
  );
}
