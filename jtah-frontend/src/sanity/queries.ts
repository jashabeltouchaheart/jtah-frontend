import { defineQuery } from "next-sanity";

// GROQ queries live here
export const GALLERY_IMAGES_QUERY = defineQuery(`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    image { asset, alt },
    caption
  }
`);
