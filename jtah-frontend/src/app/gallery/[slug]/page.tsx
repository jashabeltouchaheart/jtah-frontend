import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { EventHero } from "@/components/gallery/EventHero";
import { EventPhotoGrid } from "@/components/gallery/EventPhotoGrid";
import { getGalleryEvent } from "@/lib/gallery-event";
import { formatGalleryDate } from "@/lib/gallery";
import { eventSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

interface EventPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = await getGalleryEvent(params.slug);
  if (!event) return { title: "Event Not Found", robots: { index: false } };

  const place = event.location ? ` in ${event.location}` : "";

  return pageMetadata({
    title: event.title,
    description: `Photos from ${event.title}${place} on ${formatGalleryDate(event.date)}, a JTAH Foundation event.`,
    path: `/gallery/${event.slug}`,
    image: event.coverUrl ? { url: event.coverUrl, alt: event.coverAlt } : undefined,
    noIndex: event.isPlaceholder,
  });
}

export default async function GalleryEventPage({ params }: EventPageProps) {
  const event = await getGalleryEvent(params.slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen bg-white">
      {!event.isPlaceholder && <JsonLd data={eventSchema(event)} />}
      <EventHero event={event} />
      <Section>
        <EventPhotoGrid eventTitle={event.title} photos={event.photos} />
      </Section>
    </main>
  );
}
