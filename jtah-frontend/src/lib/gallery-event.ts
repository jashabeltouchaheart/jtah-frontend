import type { LightboxPhoto } from "@/components/gallery/PhotoLightbox";
import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_EVENT_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { MOCK_EVENTS } from "@/lib/galleryMockData";

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

/** The one shape an event page renders, whether it came from Sanity or mock data. */
export interface GalleryEvent {
  slug: string;
  title: string;
  date: string;
  location: string | null;
  category: string | null;
  coverUrl: string | null;
  coverAlt: string;
  coverGradient: string | null;
  backHref: string;
  photos: LightboxPhoto[];
  /** True for mock content: kept out of search results and structured data */
  isPlaceholder: boolean;
}

const yearHref = (date: string) =>
  `/gallery?year=${new Date(date).getFullYear()}`;

/** Loads an event by slug from Sanity, falling back to mock data while content is being added. */
export async function getGalleryEvent(
  slug: string,
): Promise<GalleryEvent | null> {
  const sanityEvent = await sanityFetch<SanityEventDetail | null>(
    GALLERY_EVENT_BY_SLUG_QUERY,
    { slug },
    ["event"],
  );

  // sanityFetch returns [] when Sanity isn't configured, so check for a real object
  if (sanityEvent && !Array.isArray(sanityEvent)) {
    return {
      slug,
      title: sanityEvent.title,
      date: sanityEvent.date,
      location: sanityEvent.location,
      category: sanityEvent.category,
      coverUrl: sanityEvent.image
        ? urlFor(sanityEvent.image).width(1600).height(900).url()
        : null,
      coverAlt: sanityEvent.image?.alt || sanityEvent.title,
      coverGradient: null,
      backHref: yearHref(sanityEvent.date),
      photos: (sanityEvent.photos ?? [])
        .filter((p) => p.asset)
        .map((p, i) => ({
          key: `${sanityEvent._id}-${i}`,
          url: urlFor(p).width(1400).height(1000).url(),
          gradient: null,
          alt: p.alt || sanityEvent.title,
          caption: null,
        })),
      isPlaceholder: false,
    };
  }

  const mockEvent = MOCK_EVENTS.find((e) => e.slug === slug);
  if (!mockEvent) return null;

  return {
    slug,
    title: mockEvent.title,
    date: mockEvent.date,
    location: mockEvent.location,
    category: mockEvent.category,
    coverUrl: null,
    coverAlt: mockEvent.title,
    coverGradient: mockEvent.coverGradient,
    backHref: yearHref(mockEvent.date),
    photos: mockEvent.photos,
    isPlaceholder: true,
  };
}
