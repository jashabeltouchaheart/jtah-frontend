import Image from "next/image";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

interface RevealImageProps {
  src: string;
  alt: string;
  /** How wide the image renders, so the browser downloads the right size */
  sizes?: string;
  priority?: boolean;
  /** Override the frame, e.g. a different aspect ratio */
  className?: string;
  /** Extra classes for the image itself, e.g. a different crop position */
  imageClassName?: string;
  delay?: number;
}

/**
 * The standard framed photo used beside text blocks (Who We Are, Founder, ...).
 * Portrait on phones, wide on tablets, square on desktop, rounded, and wiped in on scroll.
 */
export function RevealImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className,
  imageClassName,
  delay = 0,
}: RevealImageProps) {
  return (
    <Reveal
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-square",
        className
      )}
      innerClassName="relative"
      delay={delay}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover object-top", imageClassName)}
      />
    </Reveal>
  );
}
