"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxPhoto {
  key: string;
  url: string | null;
  gradient?: string | null;
  alt: string;
  caption: string | null;
}

const FALLBACK_GRADIENT = "linear-gradient(135deg, #292144 0%, #44336c 100%)";

interface PhotoLightboxProps {
  photos: LightboxPhoto[];
  index: number;
  label: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * The actual full-screen viewer: large image, prev/next, a scrollable
 * thumbnail strip, Escape/backdrop to close. Shared by the year-archive
 * modal and each event's own photo page.
 */
export function PhotoLightbox({
  photos,
  index,
  label,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const next = useCallback(
    () => onIndexChange((index + 1) % photos.length),
    [index, photos.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev]);

  if (photos.length === 0) return null;
  const current = photos[index];

  // Rendered straight into <body> so no parent's stacking or clipping can trap it
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/90 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="text-white/80 text-sm font-semibold">
          {label} &middot; {index + 1} / {photos.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 min-h-0">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="relative w-full h-full max-w-4xl">
          {current.url ? (
            <img
              src={current.url}
              alt={current.alt}
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <div
              key={current.key}
              className="absolute inset-0 rounded-lg"
              style={{ background: current.gradient ?? FALLBACK_GRADIENT }}
            />
          )}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {current.caption && (
        <p className="text-center text-white/70 text-xs sm:text-sm px-6 pb-2">
          {current.caption}
        </p>
      )}

      <div className="overflow-x-auto pb-5 pt-2 px-5 sm:px-8">
        <div className="flex gap-2 w-max mx-auto">
          {photos.map((photo, i) => (
            <button
              key={photo.key}
              type="button"
              onClick={() => onIndexChange(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 transition-opacity ${
                i === index
                  ? "ring-2 ring-white opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              {photo.url ? (
                <img
                  src={photo.url}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: photo.gradient ?? FALLBACK_GRADIENT }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
