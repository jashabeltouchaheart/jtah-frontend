import { defineField, defineType } from "sanity";

const CATEGORIES = [
  { title: "Conference", value: "conference" },
  { title: "Community Event", value: "community-event" },
  { title: "Community Outreach", value: "community-outreach" },
  { title: "Education & Skills", value: "education-skills" },
  { title: "Youth Development", value: "youth-development" },
  { title: "Other", value: "other" },
];

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description:
        "Used for this event's own photo page, e.g. /gallery/jtah-national-stakeholders-conference-2026.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      description: "e.g. Lagos, Nigeria",
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: CATEGORIES, layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description:
        "Used as the card image on the homepage and the Gallery page.",
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
    defineField({
      name: "photos",
      title: "Photo set",
      type: "array",
      description:
        "The full set of photos shown on this event's own Gallery page.",
      of: [
        {
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
        },
      ],
    }),
    defineField({
      name: "href",
      type: "string",
      title: "Link",
      description:
        "Where the homepage card should link to. Leave blank to use this event's own Gallery page.",
    }),
  ],
  orderings: [
    {
      title: "Event date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
