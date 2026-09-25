import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "caption", type: "string" }),
    defineField({
      name: "year",
      type: "number",
      description:
        "Which year this photo belongs to on the Gallery page archive, e.g. 2023.",
      validation: (rule) => rule.required().min(2000).max(2100),
    }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    {
      title: "Year, newest first",
      name: "yearDesc",
      by: [
        { field: "year", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
