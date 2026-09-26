import { Section } from "@/components/ui/Section";
import { YearAccordionRow } from "@/components/gallery/YearAccordionRow";
import type { GalleryData } from "@/lib/gallery-data";
import { YEAR_TAGLINES } from "@/lib/galleryMockData";

type YearArchiveListProps = Pick<
  GalleryData,
  "years" | "activeYear" | "photosByYear"
>;

/** One expandable row per year, each opening that year's photos. */
export function YearArchiveList({
  years,
  activeYear,
  photosByYear,
}: YearArchiveListProps) {
  return (
    <Section className="w-full pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b-0">
      <div className="flex w-full flex-col gap-3">
        {years.map((year) => (
          <YearAccordionRow
            key={year}
            year={year}
            tagline={
              YEAR_TAGLINES[year] ?? `Events and activities from ${year}.`
            }
            photos={photosByYear[year] ?? []}
            active={year === activeYear}
          />
        ))}
      </div>
    </Section>
  );
}
