/** Labels shared by the gallery listing and event detail routes. */
export const GALLERY_CATEGORY_LABELS: Record<string, string> = {
  conference: "Conference",
  "community-event": "Community Event",
  "community-outreach": "Community Outreach",
  "education-skills": "Education & Skills",
  "youth-development": "Youth Development",
  other: "Other Event",
};

/** Format Sanity date values consistently across gallery pages. */
export function formatGalleryDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
