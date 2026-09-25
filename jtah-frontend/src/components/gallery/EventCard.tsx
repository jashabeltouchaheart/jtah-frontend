import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

export interface GalleryEventCardData {
  key: string;
  slug: string;
  title: string;
  date: string;
  location: string | null;
  categoryLabel: string;
  categoryKey: string;
  imageUrl: string | null;
  imageAlt: string;
  fallbackBg?: string | null;
}

const FALLBACK_BG = "linear-gradient(135deg, #3a3560 0%, #201c36 100%)";

export function EventCard({ evt }: { evt: GalleryEventCardData }) {
  return (
    <Link
      href={`/gallery/${evt.slug}`}
      className="group block overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="overflow-hidden relative">
        <div
          className="w-full h-36 sm:h-40 group-hover:scale-105 transition-transform duration-500 ease-out relative bg-center bg-cover"
          style={
            evt.imageUrl
              ? { backgroundImage: `url(${evt.imageUrl})` }
              : { background: evt.fallbackBg ?? FALLBACK_BG }
          }
          role="img"
          aria-label={evt.imageAlt}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold text-white shadow">
          {evt.date.slice(-4)}
        </span>
      </div>

      <div className="space-y-1 px-3 pb-3 pt-2">
        <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-lilac">
          {evt.categoryLabel}
        </span>
        <h3 className="font-bold text-xs sm:text-sm text-ink group-hover:text-lilac transition-colors duration-200 leading-snug min-h-8">
          {evt.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-ink/55 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-lilac" />
            {evt.date}
          </span>
          {evt.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-lilac" />
              {evt.location}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
