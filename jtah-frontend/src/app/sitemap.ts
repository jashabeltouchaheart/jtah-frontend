import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { sanityFetch } from "@/sanity/fetch";
import { GALLERY_EVENTS_QUERY } from "@/sanity/queries";

interface SanityEventSlug {
  slug: string | null;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await sanityFetch<SanityEventSlug[]>(
    GALLERY_EVENTS_QUERY,
    {},
    ["event"],
  );

  const staticRoutes = ["/", "/gallery", "/about", "/our-work"];
  const eventRoutes = events
    .filter((e) => e.slug)
    .map((e) => `/gallery/${e.slug}`);

  const routes = [...staticRoutes, ...eventRoutes];

  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/gallery" ? 0.8 : 0.6,
  }));
}
