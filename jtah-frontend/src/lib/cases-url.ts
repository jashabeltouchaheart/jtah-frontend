interface CasesUrlParams {
  category?: string;
  q?: string;
  page?: number;
}

/** Builds an /our-work URL, leaving out empty values so links stay clean */
export function casesHref({ category, q, page }: CasesUrlParams): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (q) params.set("q", q);
  if (page && page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/our-work?${query}` : "/our-work";
}
