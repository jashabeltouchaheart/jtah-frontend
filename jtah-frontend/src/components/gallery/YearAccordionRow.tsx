"use client";

import { useState } from "react";
import { ChevronDown, MoveRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { PhotoLightbox, type LightboxPhoto } from "./PhotoLightbox";

interface YearAccordionRowProps {
  year: number;
  tagline: string;
  photos: LightboxPhoto[];
  active?: boolean;
}

const ROW_FALLBACK_GRADIENT = "linear-gradient(135deg, #292144 0%, #44336c 100%)";

export function YearAccordionRow({ year, tagline, photos, active = false }: YearAccordionRowProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const preview = photos.slice(0, 3);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 sm:gap-5 rounded-xl border bg-[#f8f9fc] px-3 sm:px-5 py-3 transition-colors duration-200 hover:border-brand/30",
        active ? "border-brand/35" : "border-transparent",
      )}
    >
      {photos.length > 0 ? (
        <>
          <button
            type="button"
            onClick={() => openAt(0)}
            aria-label={`View ${year} photo gallery`}
            className="shrink-0 text-ink/30 hover:text-brand transition-colors"
          >
            <ChevronDown className="w-4 h-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => openAt(0)}
            className="font-serif text-lg sm:text-xl font-bold text-brand w-11 sm:w-14 shrink-0 text-left hover:text-brand transition-colors"
          >
            {year}
          </button>
          <button
            type="button"
            onClick={() => openAt(0)}
            className="min-w-0 flex-1 text-left"
          >
            <p className="text-xs sm:text-sm font-semibold text-ink truncate">JTAH {year} Events</p>
            <p className="text-xs text-ink/55 truncate">{tagline}</p>
          </button>
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {preview.map((photo, i) => (
              <button
                key={photo.key}
                type="button"
                onClick={() => openAt(i)}
                aria-label={`Open photo ${i + 1} of ${year}`}
                className="relative h-9 w-14 shrink-0 overflow-hidden rounded-md sm:h-11 sm:w-20"
                style={{ background: photo.gradient ?? ROW_FALLBACK_GRADIENT }}
              >
                {photo.url && (
                  <img
                    src={photo.url}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openAt(0)}
            className="group/arrow ml-auto inline-flex shrink-0 items-center gap-1.5 text-xs sm:text-sm font-semibold text-lilac hover:text-ink transition-colors"
          >
            <span className="hidden sm:inline">View Gallery</span>
            <span className="sm:hidden">View</span>
            <MoveRight
              aria-hidden
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/arrow:translate-x-1"
            />
          </button>
        </>
      ) : (
        <>
          <ChevronDown className="w-4 h-4 text-ink/20 shrink-0" aria-hidden />
          <span className="font-serif text-lg sm:text-xl font-bold text-ink/30 w-12 sm:w-14 shrink-0">
            {year}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-ink/50 truncate">{year} in Photos</p>
            <p className="text-xs text-ink/40 truncate">{tagline}</p>
          </div>
          <span className="text-xs text-ink/35 shrink-0">Coming soon</span>
        </>
      )}

      {open && (
        <PhotoLightbox
          photos={photos}
          index={index}
          label={`${year} photo archive`}
          onClose={() => setOpen(false)}
          onIndexChange={setIndex}
        />
      )}
    </div>
  );
}
