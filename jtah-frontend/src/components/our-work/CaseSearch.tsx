"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { casesHref } from "@/lib/cases-url";
import { cn } from "@/lib/cn";

interface CaseSearchProps {
  category?: string;
  q?: string;
}

export function CaseSearch({ category, q = "" }: CaseSearchProps) {
  const router = useRouter();
  const [value, setValue] = useState(q);
  const [isPending, startTransition] = useTransition();

  // Keep the box in sync if the URL changes elsewhere (Back button, chip click)
  useEffect(() => setValue(q), [q]);

  // Update the URL 350ms after the user stops typing
  useEffect(() => {
    const next = value.trim();
    if (next === q) return;

    const timer = setTimeout(() => {
      startTransition(() => {
        router.replace(casesHref({ category, q: next || undefined }), {
          scroll: false,
        });
      });
    }, 350);

    return () => clearTimeout(timer);
  }, [value, q, category, router]);

  return (
    <div className="relative w-full lg:max-w-xs">
      <Search
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink/40"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search cases..."
        aria-label="Search cases"
        className={cn(
          "h-11 w-full rounded-full border border-ink/15 bg-white pl-11 pr-10 text-sm text-ink placeholder:text-ink/40",
          "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
          isPending && "opacity-70",
        )}
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-ink/50 hover:bg-tint hover:text-ink"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  );
}
