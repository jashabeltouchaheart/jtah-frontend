import type { ReactNode } from "react";
import { RevealImage } from "@/components/ui/RevealImage";
import { cn } from "@/lib/cn";

interface MediaSplitProps {
  image: { src: string; alt: string };
  children: ReactNode;
  /** Adds the soft lilac card background (e.g. the Founder section) */
  highlighted?: boolean;
}

/**
 * Photo beside a block of text. Every "image + text" section uses this,
 * so the photo frame, column widths and spacing are identical everywhere.
 */
export function MediaSplit({
  image,
  children,
  highlighted = false,
}: MediaSplitProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 rounded-3xl p-6 sm:gap-10 sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-14 lg:p-12",
        highlighted && "bg-tint/50",
      )}
    >
      <RevealImage src={image.src} alt={image.alt} />
      <div className="space-y-4">{children}</div>
    </div>
  );
}
