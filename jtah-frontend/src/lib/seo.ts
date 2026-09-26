import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface PageMetaInput {
  /** Short page title. The layout template adds " | JTAH Foundation" */
  title: string;
  description: string;
  /** The page's path, e.g. "/about". Becomes the canonical URL */
  path: string;
  /** Share image. Defaults to the site-wide purple share image */
  image?: { url: string; alt: string };
  /** Keep this page out of search results (placeholders, drafts) */
  noIndex?: boolean;
}

/** One place that builds a page's title, canonical, share preview and indexing rules. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: PageMetaInput): Metadata {
  const shareTitle = `${title} | ${SITE.name}`;
  const shareImage = image ?? { url: "/opengraph-image", alt: SITE.name };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      locale: "en_US",
      title: shareTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage.url],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}
