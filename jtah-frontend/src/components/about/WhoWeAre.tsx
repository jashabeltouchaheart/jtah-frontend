import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WHO_WE_ARE } from "@/content/about";

export function WhoWeAre() {
  const { eyebrow, title, paragraphs, image } = WHO_WE_ARE;

  return (
    <Section containerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Image: wipes in on scroll */}
      <Reveal
        className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        innerClassName="relative"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </Reveal>

      {/* Text */}
      <div className="space-y-5">
        <SectionHeader eyebrow={eyebrow} title={title} />
        {paragraphs.map((text) => (
          <p
            key={text}
            className="text-sm leading-relaxed text-ink/70 sm:text-base"
          >
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
