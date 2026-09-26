import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FOUNDER } from "@/content/about";

export function FounderProfile() {
  const { eyebrow, name, role, bio, image } = FOUNDER;

  return (
    <Section>
      <div className="grid items-center gap-10 rounded-3xl bg-tint/50 p-6 sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-14 lg:p-12">
        <Reveal
className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-square"          innerClassName="relative"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </Reveal>

        <div className="space-y-4">
          <SectionHeader eyebrow={eyebrow} title={name} />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand sm:text-sm">
            {role}
          </p>
          {bio.map((text) => (
            <p
              key={text}
              className="text-sm leading-relaxed text-ink/70 sm:text-base"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
