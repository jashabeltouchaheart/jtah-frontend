import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_IMAGES_QUERY } from "@/sanity/queries";
import type { GalleryImage } from "@/types/gallery";

export default async function HomePage() {
  const images = await sanityFetch<GalleryImage[]>(GALLERY_IMAGES_QUERY, {}, [
    "galleryImage",
  ]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <p className="type-body" style={{ color: "var(--text-secondary)" }}>
        JTAH Foundation - coming soon.
        {images.length > 0 &&
          ` (${images.length} gallery image${images.length === 1 ? "" : "s"} in CMS)`}
      </p>
    </main>
  );
}
