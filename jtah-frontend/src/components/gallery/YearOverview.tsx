import { Section } from "@/components/ui/Section";
import { YearSwitcher } from "@/components/gallery/YearSwitcher";
import { EventsYearGrid } from "@/components/gallery/EventsYearGrid";
import type { GalleryData } from "@/lib/gallery-data";
import { YEAR_TAGLINES } from "@/lib/galleryMockData";

type YearOverviewProps = Pick<
  GalleryData,
  "years" | "activeYear" | "eventsForYear" | "hasArchiveForYear" | "categories"
>;

/** Year tabs plus the selected year's heading and event cards. */
export function YearOverview({
  years,
  activeYear,
  eventsForYear,
  hasArchiveForYear,
  categories,
}: YearOverviewProps) {
  return (
    <Section className="pt-10 pb-5 sm:pt-14 sm:pb-7 lg:pt-16 lg:pb-8 border-b-0">
      <YearSwitcher years={years} activeYear={activeYear} />

      <div className="mt-4 rounded-xl border border-ink/10 bg-white p-5 sm:mt-5 sm:p-6 lg:p-7">
        <div className="mb-5 space-y-1.5">
          <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-lilac">
            {activeYear} Gallery
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink">
            JTAH {activeYear} Events
          </h2>
          <p className="text-sm text-ink/60 max-w-md">
            {YEAR_TAGLINES[activeYear] ??
              `Events and activities from ${activeYear}.`}
          </p>
        </div>

        {eventsForYear.length > 0 ? (
          <EventsYearGrid events={eventsForYear} categories={categories} />
        ) : (
          <p className="text-sm text-ink/60 max-w-md">
            {hasArchiveForYear
              ? `No individually curated events for ${activeYear} yet, browse the full year in the list below.`
              : `No photos published for ${activeYear} yet. Check back soon.`}
          </p>
        )}
      </div>
    </Section>
  );
}
