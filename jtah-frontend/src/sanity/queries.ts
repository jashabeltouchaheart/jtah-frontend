import { defineQuery } from "next-sanity";

// GROQ queries live here
export const GALLERY_IMAGES_QUERY = defineQuery(`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    image { asset, alt },
    caption
  }
`);

export const EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date desc) [0...4] {
    _id,
    title,
    date,
    image { asset, alt },
    "slug": slug.current,
    href
  }
`);

// Every curated event, full detail, for the /gallery page's event-card grid
export const GALLERY_EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    category,
    image { asset, alt }
  }
`);

// One curated event's own photo page, by slug
export const GALLERY_EVENT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    date,
    location,
    category,
    image { asset, alt },
    photos[] { asset, alt }
  }
`);

// Flat year archive, for the Gallery page's "View Photos" modal on years
// that don't (yet) have curated events of their own.
export const GALLERY_ARCHIVE_QUERY = defineQuery(`
  *[_type == "galleryImage"] | order(year desc, order asc) {
    _id,
    year,
    image { asset, alt },
    caption
  }
`);
