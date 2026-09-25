"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoLightbox, type LightboxPhoto } from "./PhotoLightbox";

interface EventPhotoGridProps {
  eventTitle: string;
  photos: LightboxPhoto[];
}

const FALLBACK_GRADIENT = "linear-gradient(135deg, #292144 0%, #44336c 100%)";

/** Grid of an event's own photos; clicking one opens the shared lightbox. */
export function EventPhotoGrid({ eventTitle, photos }: EventPhotoGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  if (photos.length === 0) {
    return (
      <p className="text-sm text-ink/60">
        Photos from this event are coming soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.key}
            type="button"
            onClick={() => setIndex(i)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
          >
            {photo.url ? (
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: photo.gradient ?? FALLBACK_GRADIENT }}
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {index !== null && (
        <PhotoLightbox
          photos={photos}
          index={index}
          label={eventTitle}
          onClose={() => setIndex(null)}
          onIndexChange={setIndex}
        />
      )}
    </>
  );
}
