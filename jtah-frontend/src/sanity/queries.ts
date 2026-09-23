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
    href
  }
`);
