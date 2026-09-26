import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const allowIndexing = process.env.ALLOW_INDEXING === "true";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/studio", "/api/"] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
