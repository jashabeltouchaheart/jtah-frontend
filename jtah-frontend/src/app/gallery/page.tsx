import { GalleryHero } from "@/components/gallery/GalleryHero";
import { YearOverview } from "@/components/gallery/YearOverview";
import { YearArchiveList } from "@/components/gallery/YearArchiveList";
import { getGalleryData } from "@/lib/gallery-data";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos from JTAH Foundation's events, outreach programmes and community activities across Nigeria, organised by year.",
  path: "/gallery",
  image: { url: "/gallery-mock/hero-gallery.jpg", alt: "Moments from JTAH Foundation events" },
});

interface GalleryPageProps {
  searchParams: { year?: string };
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const data = await getGalleryData(searchParams.year);

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero />
      <YearOverview {...data} />
      <YearArchiveList {...data} />
    </main>
  );
}
