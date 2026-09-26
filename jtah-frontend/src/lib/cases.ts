import { CASES, CASE_CATEGORIES, type CaseStory } from "@/content/cases";

export const CASES_PER_PAGE = 6;

export interface CaseQuery {
  category?: string;
  q?: string;
  page?: string;
}

export interface CaseResults {
  items: CaseStory[];
  page: number;
  totalPages: number;
  total: number;
  category?: string;
}

const isCategory = (value?: string) =>
  CASE_CATEGORIES.some((c) => c.key === value);

/** Filter, search and paginate cases. The one place to switch to Sanity later. */
export function getCases({ category, q, page }: CaseQuery): CaseResults {
  const search = q?.trim().toLowerCase() ?? "";

  const matches = CASES.filter(
    (c) => !isCategory(category) || c.category === category,
  )
    .filter(
      (c) =>
        !search || `${c.title} ${c.summary}`.toLowerCase().includes(search),
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  const totalPages = Math.max(1, Math.ceil(matches.length / CASES_PER_PAGE));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (current - 1) * CASES_PER_PAGE;

  return {
    items: matches.slice(start, start + CASES_PER_PAGE),
    page: current,
    totalPages,
    total: matches.length,
    category: isCategory(category) ? category : undefined,
  };
}

/** Human label for a category key, e.g. "child-welfare" -> "Child Welfare" */
export const categoryLabel = (key: string) =>
  CASE_CATEGORIES.find((c) => c.key === key)?.label ?? key;
