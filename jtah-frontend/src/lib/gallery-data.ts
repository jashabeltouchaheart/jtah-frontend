import type { GalleryEventCardData } from "@/components/gallery/EventCard";
import type { LightboxPhoto } from "@/components/gallery/PhotoLightbox";
import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_EVENTS_QUERY, GALLERY_ARCHIVE_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { MOCK_EVENTS, MOCK_ARCHIVE } from "@/lib/galleryMockData";
import { formatGalleryDate, GALLERY_CATEGORY_LABELS } from "@/lib/gallery";

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

type YearEvent = GalleryEventCardData & { year: number };
type YearPhoto = LightboxPhoto & { year: number };

export interface GalleryData {
  /** Every year that has content, newest first */
  years: number[];
  /** The year selected via ?year=, or the newest year */
  activeYear: number;
  eventsForYear: GalleryEventCardData[];
  hasArchiveForYear: boolean;
  /** Category filter options for the active year's events */
  categories: { key: string; label: string }[];
  /** Photos for each year's accordion row */
  photosByYear: Record<number, LightboxPhoto[]>;
}

const toArray = <T>(value: T[] | unknown): T[] =>
  Array.isArray(value) ? value : [];

/** Merge real Sanity items with mock ones, only using mock data for years Sanity doesn't cover yet. */
function withMockFallback<T extends { year: number }>(
  published: T[],
  mock: T[],
): T[] {
  const coveredYears = new Set(published.map((item) => item.year));
  return [...published, ...mock.filter((item) => !coveredYears.has(item.year))];
}

async function loadEvents(): Promise<YearEvent[]> {
  const sanityEvents = toArray<SanityGalleryEvent>(
    await sanityFetch<SanityGalleryEvent[]>(GALLERY_EVENTS_QUERY, {}, [
      "event",
    ]),
  );

  const published: YearEvent[] = sanityEvents
    .filter((event) => event.slug)
    .map((event) => ({
      key: event._id,
      slug: event.slug as string,
      title: event.title,
      date: formatGalleryDate(event.date),
      location: event.location,
      categoryLabel:
        GALLERY_CATEGORY_LABELS[event.category ?? "other"] ?? "Event",
      categoryKey: event.category ?? "other",
      imageUrl: event.image
        ? urlFor(event.image).width(600).height(450).url()
        : null,
      imageAlt: event.image?.alt || event.title,
      year: new Date(event.date).getFullYear(),
    }));

  const mock: YearEvent[] = MOCK_EVENTS.map((event) => ({
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

  return withMockFallback(published, mock);
}

async function loadArchive(): Promise<YearPhoto[]> {
  const sanityArchive = toArray<SanityArchivePhoto>(
    await sanityFetch<SanityArchivePhoto[]>(GALLERY_ARCHIVE_QUERY, {}, [
      "galleryImage",
    ]),
  );

  const published: YearPhoto[] = sanityArchive
    .filter((photo) => photo.image)
    .map((photo) => ({
      key: photo._id,
      url: urlFor(photo.image!).width(1400).height(1000).url(),
      alt: photo.image?.alt || `JTAH Foundation, ${photo.year}`,
      caption: photo.caption,
      year: photo.year,
    }));

  const mock: YearPhoto[] = MOCK_ARCHIVE.flatMap((archiveYear) =>
    archiveYear.photos.map((photo) => ({ ...photo, year: archiveYear.year })),
  );

  return withMockFallback(published, mock);
}

/** A year's accordion photos: its archive photos, or its event covers if it has no archive. */
function photosForYear(
  year: number,
  events: YearEvent[],
  archive: YearPhoto[],
): LightboxPhoto[] {
  const archived = archive.filter((photo) => photo.year === year);
  if (archived.length > 0) return archived;

  return events
    .filter((event) => event.year === year)
    .map((event) => ({
      key: event.key,
      url: event.imageUrl,
      gradient: event.fallbackBg ?? null,
      alt: event.imageAlt,
      caption: null,
    }));
}

/** Everything the gallery page needs, for the requested year. */
export async function getGalleryData(
  requestedYear?: string,
): Promise<GalleryData> {
  const [events, archive] = await Promise.all([loadEvents(), loadArchive()]);

  const contentYears = Array.from(
    new Set([...events.map((e) => e.year), ...archive.map((p) => p.year)]),
  ).sort((a, b) => b - a);

  const thisYear = new Date().getFullYear();
  const years =
    contentYears.length > 0
      ? contentYears
      : Array.from({ length: 5 }, (_, i) => thisYear - i);

  const requested = Number(requestedYear);
  const activeYear =
    Number.isFinite(requested) && years.includes(requested)
      ? requested
      : years[0];

  const eventsForYear = events.filter((e) => e.year === activeYear);

  return {
    years,
    activeYear,
    eventsForYear,
    hasArchiveForYear: archive.some((p) => p.year === activeYear),
    categories: Object.entries(GALLERY_CATEGORY_LABELS)
      .filter(([key]) => eventsForYear.some((e) => e.categoryKey === key))
      .map(([key, label]) => ({ key, label })),
    photosByYear: Object.fromEntries(
      years.map((year) => [year, photosForYear(year, events, archive)]),
    ),
  };
}
