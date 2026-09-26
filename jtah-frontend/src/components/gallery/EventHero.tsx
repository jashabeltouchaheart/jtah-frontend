import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowLeft } from "lucide-react";
import { formatGalleryDate, GALLERY_CATEGORY_LABELS } from "@/lib/gallery";
import type { GalleryEvent } from "@/lib/gallery-event";

const FALLBACK_BG = "linear-gradient(135deg, #292144 0%, #44336c 100%)";

/** Full-width cover, title and details at the top of an event page. */
export function EventHero({ event }: { event: GalleryEvent }) {
  const year = new Date(event.date).getFullYear();

  return (
    <div className="relative w-full h-[46vh] min-h-[320px] sm:h-[52vh] bg-ink">
      {event.coverUrl ? (
        <Image src={event.coverUrl} alt={event.coverAlt} fill priority className="object-cover opacity-80" />
      ) : (
        <div className="absolute inset-0" style={{ background: event.coverGradient ?? FALLBACK_BG }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-8 sm:pb-10 w-full">
          <Link
            href={event.backHref}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to {year} Gallery
          </Link>
          <span className="inline-block text-[10px] uppercase tracking-[0.12em] font-semibold text-lilac-tint bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
            {GALLERY_CATEGORY_LABELS[event.category ?? "other"] ?? "Event"}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4 text-sm text-white/75 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-lilac-tint" />
              {formatGalleryDate(event.date)}
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-lilac-tint" />
                {event.location}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
