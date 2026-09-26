import { SITE } from "@/lib/site";
import type { GalleryEvent } from "@/lib/gallery-event";

/** schema.org Event data for a gallery event page. */
export function eventSchema(event: GalleryEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: `${SITE.url}/gallery/${event.slug}`,
    ...(event.location && {
      location: {
        "@type": "Place",
        name: event.location,
        address: event.location,
      },
    }),
    ...(event.coverUrl && { image: [event.coverUrl] }),
    organizer: { "@type": "NGO", name: SITE.legalName, url: SITE.url },
  };
}
