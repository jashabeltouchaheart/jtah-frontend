import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Parallax } from "@/components/ui/Parallax";
import { cn } from "@/lib/cn";

export interface PageHeroProps {
  eyebrow: string;
  /** One string, or several lines shown one under another */
  title: string | readonly string[];
  /** Optional line in the serif font under the title */
  subtitle?: string;
  description: string;
  image: { src: string; alt: string };
  /** Crop position for the photo, e.g. "object-[center_35%]". Defaults to the centre */
  imagePosition?: string;
  /** Optional text links under the description, e.g. Learn more, Donate */
  actions?: { label: string; href: string }[];
}

/**
 * The standard top section for every inner page (About, Gallery, Our Work, ...).
 * Full-width photo with a dark, brand-purple gradient, and the words sitting on it.
 */
export function PageHero({ eyebrow, title, subtitle, description, image, imagePosition, actions }: PageHeroProps) {
  const lines = typeof title === "string" ? [title] : title;

  return (
    <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#140f24] sm:min-h-[400px] lg:min-h-[440px]">
      {/* Photo: drifts slowly on scroll. Scaled up so the drift never shows an edge */}
      <Parallax speed={60} className="absolute inset-0 -z-20">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className={cn("scale-110 object-cover", imagePosition ?? "object-center")}
        />
      </Parallax>

      {/* Colour treatment: dark on the left for the text, a purple glow, and depth at the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#140f24]/95 via-[#140f24]/75 to-[#140f24]/40 lg:via-[#140f24]/70 lg:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_35%,rgba(124,116,178,0.35),transparent_60%)] mix-blend-screen"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#140f24]/70 via-transparent to-transparent" />

      {/* Words */}
      <Container className="w-full py-14 lg:py-16">
        <div className="max-w-2xl text-white">
          <Eyebrow className="hero-rise !text-white/70">{eyebrow}</Eyebrow>
          <h1
            className="hero-rise mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="hero-rise mt-4 font-serif text-xl text-white/85 sm:text-2xl" style={{ animationDelay: "200ms" }}>
              {subtitle}
            </p>
          )}
          <p
            className="hero-rise mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            {description}
          </p>

          {actions && actions.length > 0 && (
            <div className="hero-rise mt-8 flex flex-wrap gap-x-8 gap-y-3" style={{ animationDelay: "400ms" }}>
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="border-b-2 border-white/80 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-lilac hover:text-lilac"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
