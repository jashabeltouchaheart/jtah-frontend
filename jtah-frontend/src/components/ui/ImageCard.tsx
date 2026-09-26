import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { cn } from "@/lib/cn";

export interface ImageCardProps {
  title: string;
  description: string;
  /** Small label above the title, e.g. a category or date */
  eyebrow?: string;
  /** A real photo. If missing, the placeholder background is shown instead */
  image?: { src: string; alt: string };
  /** Any CSS background, e.g. a gradient, used until a photo exists */
  placeholder?: string;
  /** Optional round icon badge overlapping the image */
  icon?: LucideIcon;
  /** Optional "Learn More" style link */
  href?: string;
  linkLabel?: string;
  /** Stagger the image wipe when cards sit in a row */
  delay?: number;
  className?: string;
}

export function ImageCard({
  title,
  description,
  eyebrow,
  image,
  placeholder = "linear-gradient(135deg, #d8d3e8 0%, #c4bddb 100%)",
  icon: Icon,
  href,
  linkLabel = "Learn More",
  delay = 0,
  className,
}: ImageCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative">
        <Reveal
          className="relative aspect-[16/10] overflow-hidden"
          innerClassName="relative"
          delay={delay}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              aria-hidden
              className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ background: placeholder }}
            />
          )}
        </Reveal>

        {Icon && (
          <span className="absolute -bottom-6 left-6 flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-md ring-4 ring-white">
            <Icon aria-hidden className="size-5" />
          </span>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col px-6 pb-6",
          Icon ? "pt-10" : "pt-6",
        )}
      >
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
        )}
        <h3 className="text-lg font-bold leading-snug text-ink transition-colors duration-200 group-hover:text-lilac">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {description}
        </p>
        {href && (
          <ArrowLink href={href} size="sm" className="mt-4">
            {linkLabel}
          </ArrowLink>
        )}
      </div>
    </article>
  );
}
