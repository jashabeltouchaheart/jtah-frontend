import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { EventPhotoGrid } from "@/components/gallery/EventPhotoGrid";
import type { LightboxPhoto } from "@/components/gallery/PhotoLightbox";
import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_EVENT_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { MOCK_EVENTS } from "@/lib/galleryMockData";
import { formatGalleryDate, GALLERY_CATEGORY_LABELS } from "@/lib/gallery";

export const revalidate = 60;

interface SanityImage {
  asset: unknown;
  alt: string;
}

interface SanityEventDetail {
  _id: string;
  title: string;
  date: string;
  location: string | null;
  category: string | null;
  image: SanityImage | null;
  photos: SanityImage[] | null;
}

/** Common shape both the Sanity branch and the mock branch resolve to. */
interface ResolvedEvent {
  title: string;
  date: string;
  location: string | null;
  category: string | null;
  coverUrl: string | null;
  coverAlt: string;
  coverGradient: string | null;
  backHref: string;
  photos: LightboxPhoto[];
}

async function getEvent(slug: string): Promise<ResolvedEvent | null> {
  const sanityEvent = await sanityFetch<SanityEventDetail | null>(
    GALLERY_EVENT_BY_SLUG_QUERY,
    { slug },
    ["event"],
  );

  if (sanityEvent) {
    return {
      title: sanityEvent.title,
      date: sanityEvent.date,
      location: sanityEvent.location,
      category: sanityEvent.category,
      coverUrl: sanityEvent.image
        ? urlFor(sanityEvent.image).width(1600).height(900).url()
        : null,
      coverAlt: sanityEvent.image?.alt || sanityEvent.title,
      coverGradient: null,
      backHref: `/gallery?year=${new Date(sanityEvent.date).getFullYear()}`,
      photos: (sanityEvent.photos ?? [])
        .filter((p) => p.asset)
        .map((p, i) => ({
          key: `${sanityEvent._id}-${i}`,
          url: urlFor(p).width(1400).height(1000).url(),
          gradient: null,
          alt: p.alt || sanityEvent.title,
          caption: null,
        })),
    };
  }

  // No matching Sanity document yet: fall back to the mock event with this
  // slug, so the page renders with placeholder content while it's being
  // built, instead of a 404.
  const mockEvent = MOCK_EVENTS.find((e) => e.slug === slug);
  if (!mockEvent) return null;

  return {
    title: mockEvent.title,
    date: mockEvent.date,
    location: mockEvent.location,
    category: mockEvent.category,
    coverUrl: null,
    coverAlt: mockEvent.title,
    coverGradient: mockEvent.coverGradient,
    backHref: `/gallery?year=${new Date(mockEvent.date).getFullYear()}`,
    photos: mockEvent.photos,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const event = await getEvent(params.slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: `Photos from ${event.title}${
      event.location ? `, ${event.location}` : ""
    } — ${formatGalleryDate(event.date)}.`,
  };
}

export default async function GalleryEventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await getEvent(params.slug);
  if (!event) notFound();

  const year = new Date(event.date).getFullYear();

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full h-[46vh] min-h-[320px] sm:h-[52vh] bg-ink">
        {event.coverUrl ? (
          <Image
            src={event.coverUrl}
            alt={event.coverAlt}
            fill
            priority
            className="object-cover opacity-80"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                event.coverGradient ??
                "linear-gradient(135deg, #292144 0%, #44336c 100%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-8 sm:pb-10 w-full">
            <Link
              href={event.backHref}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold mb-4 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {year} Gallery
            </Link>
            <span className="inline-block text-[10px] uppercase tracking-[0.12em] font-semibold text-lilac-tint bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
              {GALLERY_CATEGORY_LABELS[event.category ?? "other"] ?? "Event"}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-3xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4 text-sm text-white/75 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-lilac-tint" />
                {formatGalleryDate(event.date)}
              </span>
              {event.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-lilac-tint" />
                  {event.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Section>
        <EventPhotoGrid eventTitle={event.title} photos={event.photos} />
      </Section>
    </main>
  );
}
