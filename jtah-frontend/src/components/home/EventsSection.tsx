import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/fetch";
import { EVENTS_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  image: { asset: unknown; alt: string } | null;
  href: string | null;
}

interface EventCard {
  key: string;
  title: string;
  date: string;
  href: string;
  imageUrl: string | null;
  imageAlt: string;
  fallbackBg: string;
}

const FALLBACK_EVENTS: EventCard[] = [
  {
    key: "fallback-1",
    title: "Men Why the Silence",
    date: "12 May 2026",
    href: "#event-1",
    imageUrl: null,
    imageAlt: "",
    fallbackBg: "linear-gradient(135deg, #201c36 0%, #3a325a 100%)",
  },
  {
    key: "fallback-2",
    title: "Essay Writing Competition",
    date: "28 March 2026",
    href: "#event-2",
    imageUrl: null,
    imageAlt: "",
    fallbackBg: "linear-gradient(135deg, #5f7a63 0%, #465c49 100%)",
  },
  {
    key: "fallback-3",
    title: "Walk Against Gender-Based Violence",
    date: "14 January 2025",
    href: "#event-3",
    imageUrl: null,
    imageAlt: "",
    fallbackBg: "linear-gradient(135deg, #b88258 0%, #90603a 100%)",
  },
  {
    key: "fallback-4",
    title: "Community Outreach Program",
    date: "10 November 2025",
    href: "#event-4",
    imageUrl: null,
    imageAlt: "",
    fallbackBg: "linear-gradient(135deg, #886ea8 0%, #684f88 100%)",
  },
];

function formatEventDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function EventsSection() {
  const sanityEvents = await sanityFetch<SanityEvent[]>(EVENTS_QUERY, {}, ["event"]);

  const events: EventCard[] =
    sanityEvents.length > 0
      ? sanityEvents.map((evt) => ({
          key: evt._id,
          title: evt.title,
          date: formatEventDate(evt.date),
          href: evt.href || "#events",
          imageUrl: evt.image ? urlFor(evt.image).width(600).height(450).url() : null,
          imageAlt: evt.image?.alt || evt.title,
          fallbackBg: "linear-gradient(135deg, #3a3560 0%, #201c36 100%)",
        }))
      : FALLBACK_EVENTS;

  return (
    <section
      id="events"
      className="py-16 sm:py-20 lg:py-28 bg-[#eeecf7]/30 border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        <SectionHeader
          eyebrow="Events & Highlights"
          title="Moments That Matter"
          action={<ArrowLink href="#events">View All Events</ArrowLink>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((evt, idx) => (
            <Link key={evt.key} href={evt.href} className="group block space-y-3">
              {/* Image with zoom and overlay on hover */}
              <Reveal delay={idx * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-[#3a3560]/10 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-full h-44 sm:h-48 group-hover:scale-105 transition-transform duration-500 ease-out relative bg-center bg-cover"
                    style={
                      evt.imageUrl
                        ? { backgroundImage: `url(${evt.imageUrl})` }
                        : { background: evt.fallbackBg }
                    }
                    role={evt.imageUrl ? "img" : undefined}
                    aria-label={evt.imageUrl ? evt.imageAlt : undefined}
                  >
                    {/* Dark overlay on hover for readability */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  </div>
                </div>
              </Reveal>

              <div className="space-y-1 px-0.5">
                <h3 className="font-bold text-sm sm:text-base text-[#3a3560] group-hover:text-[#7c74b2] transition-colors duration-200 leading-snug">
                  {evt.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#3a3560]/55 font-medium">
                  <CalendarDays className="w-3.5 h-3.5 text-[#7c74b2]" />
                  <span>{evt.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
