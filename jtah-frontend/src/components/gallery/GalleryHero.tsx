import { Container } from "@/components/ui/Container";

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--lilac-tint)]">
      <Container className="grid min-h-[260px] grid-cols-1 items-center gap-7 py-8 sm:min-h-[300px] sm:py-10 lg:min-h-[330px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-8 lg:py-0">
        <div className="relative z-10 max-w-lg py-2 lg:py-8">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--lilac-mid)]">
            Our Gallery
          </p>
          <h1 className="font-extrabold tracking-tight text-ink leading-tight text-3xl sm:text-4xl lg:text-5xl">
            Moments That
            <br />
            Made an Impact
          </h1>
          <p className="mt-4 max-w-[410px] text-sm leading-relaxed text-ink/70 sm:text-base">
            Explore photos from our events, programmes and community
            activities. See the people, partnerships and progress behind our
            work.
          </p>
        </div>

        <div className="relative -mx-6 h-56 overflow-hidden sm:-mx-8 sm:h-64 lg:absolute lg:inset-y-0 lg:left-[43%] lg:right-0 lg:mx-0 lg:h-auto">
          <img
            src="/gallery-mock/hero-gallery.jpg"
            alt="A young participant in one of JTAH Foundation's community programmes"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--lilac-tint)] via-[var(--lilac-tint)]/15 to-transparent lg:from-[var(--lilac-tint)] lg:via-[var(--lilac-tint)]/10 lg:to-transparent" />
        </div>
      </Container>
    </section>
  );
}
