import { PageHero } from "@/components/shared/PageHero";
import { CasesGlance } from "@/components/our-work/CasesGlance";
import { CaseFilters } from "@/components/our-work/CaseFilters";
import { Section } from "@/components/ui/Section";
import { CASES_HERO } from "@/content/cases";
import { getCases } from "@/lib/cases";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Real cases JTAH Foundation has supported across Nigeria, from domestic violence and child welfare to family disputes and legal aid.",
  path: "/our-work",
  image: { url: CASES_HERO.image.src, alt: CASES_HERO.image.alt },
});

interface OurWorkPageProps {
  searchParams: { category?: string; q?: string; page?: string };
}

export default function OurWorkPage({ searchParams }: OurWorkPageProps) {
  const { category, q, page } = searchParams;
  const results = getCases({ category, q, page });

  return (
    <main className="flex flex-col bg-white">
      <PageHero {...CASES_HERO} />
      <CasesGlance />
      <Section aria-label="Browse cases">
        <CaseFilters category={results.category} q={q} />
        <p className="mt-6 text-sm text-ink/70">
          Showing {results.items.length} of {results.total} cases
        </p>
      </Section>
    </main>
  );
}
