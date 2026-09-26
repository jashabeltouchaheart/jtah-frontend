"use client";

import { useState } from "react";
import { EventCard, type GalleryEventCardData } from "./EventCard";
import { cn } from "@/lib/cn";

interface CategoryOption {
  key: string;
  label: string;
}

interface EventsYearGridProps {
  events: GalleryEventCardData[];
  /** Categories actually present among `events`, in display order. */
  categories: CategoryOption[];
}

export function EventsYearGrid({ events, categories }: EventsYearGridProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? events : events.filter((e) => e.categoryKey === active);

  const pillClass = (isActive: boolean) =>
    cn(
      "inline-flex items-center rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200",
      isActive
        ? "bg-brand text-white border-brand"
        : "bg-white text-ink/70 border-ink/15 hover:border-brand hover:text-brand",
    );

  return (
    <div className="space-y-4">
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={pillClass(active === "all")}
          >
            All Events
          </button>
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={pillClass(active === c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((evt, index) => (
            <EventCard key={evt.key} evt={evt} delay={index * 0.08} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-ink/60">No events in this category yet.</p>
      )}
    </div>
  );
}
