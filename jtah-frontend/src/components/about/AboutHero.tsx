import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-tint">
      <Container className="relative grid min-h-[260px] items-center sm:min-h-[300px] lg:min-h-[330px] lg:grid-cols-2">
        {/* Text: sits above the image on desktop (z-10) */}
        <div className="relative z-10 max-w-lg py-10 lg:py-8">
          <Eyebrow>About JTAH</Eyebrow>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            For The Love
            <br />
            of Humanity
          </h1>
          <p className="mt-3 font-serif text-lg text-ink/80 sm:text-xl">
            Touching Lives Since 2000
          </p>
          <p className="mt-4 max-w-[410px] text-sm leading-relaxed text-ink/70 sm:text-base">
            Jashabel Touch-A-Heart Foundation (JTAH) is a human rights,
            non-governmental, non-profit organisation dedicated to promoting the
            welfare and interests of women and the girl child.
          </p>
        </div>
      </Container>

      {/* Image: stacked under the text on mobile, fills the right side on desktop */}
      <Reveal
        className="relative h-56 sm:h-64 lg:absolute lg:inset-y-0 lg:left-[43%] lg:right-0 lg:h-auto"
        innerClassName="relative overflow-hidden"
        delay={0.12}
      >
        <Image
          src="/images/about/hero.jpg"
          alt="A mother and daughter supported by JTAH Foundation"
          fill
          priority
          sizes="(min-width: 1024px) 57vw, 100vw"
          className="object-cover object-[center_35%] lg:rounded-bl-[80px]"
        />
        {/* Fades the photo into the background: from the top on mobile (text sits above it), from the left on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-tint via-tint/20 to-transparent lg:bg-gradient-to-r lg:via-tint/25" />
      </Reveal>
    </section>
  );
}
