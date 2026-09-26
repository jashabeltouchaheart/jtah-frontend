import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { Section } from "@/components/ui/Section";
import { YearSwitcher } from "@/components/gallery/YearSwitcher";
import { type GalleryEventCardData } from "@/components/gallery/EventCard";
import { EventsYearGrid } from "@/components/gallery/EventsYearGrid";
import { YearAccordionRow } from "@/components/gallery/YearAccordionRow";
import type { LightboxPhoto } from "@/components/gallery/PhotoLightbox";
import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_EVENTS_QUERY, GALLERY_ARCHIVE_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { MOCK_EVENTS, MOCK_ARCHIVE, YEAR_TAGLINES } from "@/lib/galleryMockData";
import { formatGalleryDate, GALLERY_CATEGORY_LABELS } from "@/lib/gallery";
import { Reveal } from "@/components/ui/Reveal";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from JTAH Foundation's events, programmes and community activities, organised by year.",
};

interface SanityGalleryEvent {
  _id: string;
  title: string;
  slug: string | null;
  date: string;
  location: string | null;
  category: string | null;
  image: { asset: unknown; alt: string } | null;
}

interface SanityArchivePhoto {
  _id: string;
  year: number;
  image: { asset: unknown; alt: string } | null;
  caption: string | null;
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: { year?: string };
}) {
  const [sanityEventsResult, sanityArchiveResult] = await Promise.all([
    sanityFetch<SanityGalleryEvent[]>(GALLERY_EVENTS_QUERY, {}, ["event"]),
    sanityFetch<SanityArchivePhoto[]>(GALLERY_ARCHIVE_QUERY, {}, [
      "galleryImage",
    ]),
  ]);

  const sanityEvents = Array.isArray(sanityEventsResult) ? sanityEventsResult : [];
  const sanityArchive = Array.isArray(sanityArchiveResult) ? sanityArchiveResult : [];

  const publishedEvents: (GalleryEventCardData & { year: number })[] =
    sanityEvents.filter((event) => event.slug).map((event) => ({
      key: event._id,
      slug: event.slug as string,
      title: event.title,
      date: formatGalleryDate(event.date),
      location: event.location,
      categoryLabel: GALLERY_CATEGORY_LABELS[event.category ?? "other"] ?? "Event",
      categoryKey: event.category ?? "other",
      imageUrl: event.image
        ? urlFor(event.image).width(600).height(450).url()
        : null,
      imageAlt: event.image?.alt || event.title,
      year: new Date(event.date).getFullYear(),
    }));
  const mockEvents: (GalleryEventCardData & { year: number })[] =
    MOCK_EVENTS.map((event) => ({
      key: event.slug,
      slug: event.slug,
      title: event.title,
      date: formatGalleryDate(event.date),
      location: event.location,
      categoryLabel: GALLERY_CATEGORY_LABELS[event.category] ?? "Event",
      categoryKey: event.category,
      imageUrl: event.coverImage ?? null,
      imageAlt: event.title,
      fallbackBg: event.coverGradient,
      year: new Date(event.date).getFullYear(),
    }));
  const publishedEventYears = new Set(publishedEvents.map((event) => event.year));
  const allEvents = [
    ...publishedEvents,
    ...mockEvents.filter((event) => !publishedEventYears.has(event.year)),
  ];

  const publishedArchivePhotos: (LightboxPhoto & { year: number })[] =
    sanityArchive.filter((photo) => photo.image).map((photo) => ({
      key: photo._id,
      url: urlFor(photo.image!).width(1400).height(1000).url(),
      alt: photo.image?.alt || `JTAH Foundation, ${photo.year}`,
      caption: photo.caption,
      year: photo.year,
    }));
  const mockArchivePhotos: (LightboxPhoto & { year: number })[] =
    MOCK_ARCHIVE.flatMap((archiveYear) =>
      archiveYear.photos.map((photo) => ({ ...photo, year: archiveYear.year })),
    );
  const publishedArchiveYears = new Set(publishedArchivePhotos.map((photo) => photo.year));
  const allArchivePhotos = [
    ...publishedArchivePhotos,
    ...mockArchivePhotos.filter((photo) => !publishedArchiveYears.has(photo.year)),
  ];

  const eventYears = allEvents.map((e) => e.year);
  const archiveYears = allArchivePhotos.map((p) => p.year);
  const years = Array.from(new Set([...eventYears, ...archiveYears])).sort(
    (a, b) => b - a,
  );

  const currentCalendarYear = new Date().getFullYear();
  const fallbackYears =
    years.length > 0
      ? years
      : Array.from({ length: 5 }, (_, i) => currentCalendarYear - i);

  const requestedYear = Number(searchParams.year);
  const activeYear =
    Number.isFinite(requestedYear) && fallbackYears.includes(requestedYear)
      ? requestedYear
      : fallbackYears[0];

  const eventsForYear: GalleryEventCardData[] = allEvents.filter(
    (e) => e.year === activeYear,
  );

  const archiveForYear = allArchivePhotos.filter(
    (photo) => photo.year === activeYear,
  );

  const hasEvents = eventsForYear.length > 0;
  const hasArchive = archiveForYear.length > 0;

  const presentCategories = Object.entries(GALLERY_CATEGORY_LABELS)
    .filter(([key]) => eventsForYear.some((e) => e.categoryKey === key))
    .map(([key, label]) => ({ key, label }));

  const accordionYears = fallbackYears;

  const archivePhotosByYear = new Map<number, LightboxPhoto[]>();
  for (const photo of allArchivePhotos) {
    const list = archivePhotosByYear.get(photo.year) ?? [];
    list.push(photo);
    archivePhotosByYear.set(photo.year, list);
  }

  function photosForYear(year: number): LightboxPhoto[] {
    const archived = archivePhotosByYear.get(year);
    if (archived && archived.length > 0) return archived;
    return allEvents
      .filter((e) => e.year === year)
      .map((e) => ({
        key: e.key,
        url: e.imageUrl,
        gradient: e.fallbackBg ?? null,
        alt: e.imageAlt,
        caption: null,
      }));
  }

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero />

      <Section className="pt-10 pb-5 sm:pt-14 sm:pb-7 lg:pt-16 lg:pb-8 border-b-0">
        <YearSwitcher years={fallbackYears} activeYear={activeYear} />
        <div className="mt-4 rounded-xl border border-ink/10 bg-white p-5 sm:mt-5 sm:p-6 lg:p-7">
          <Reveal
            className="mb-5"
            innerClassName="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
          >
            <div className="space-y-1.5">
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

          </Reveal>
          {hasEvents ? (
            <EventsYearGrid
              events={eventsForYear}
              categories={presentCategories}
            />
          ) : hasArchive ? (
            <p className="text-sm text-ink/60 max-w-md">
              No individually curated events for {activeYear} yet, browse the
              full year in the list below.
            </p>
          ) : (
            <p className="text-sm text-ink/60 max-w-md">
              No photos published for {activeYear} yet. Check back soon.
            </p>
          )}
        </div>
      </Section>

      <Section className="w-full pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b-0">
        <div className="flex w-full flex-col gap-3">
          {accordionYears.map((year, index) => (
            <Reveal key={year} delay={index * 0.05}>
              <YearAccordionRow
                year={year}
                tagline={YEAR_TAGLINES[year] ?? `Events and activities from ${year}.`}
                photos={photosForYear(year)}
                active={year === activeYear}
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
