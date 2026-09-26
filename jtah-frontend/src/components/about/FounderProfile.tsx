import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealImage } from "@/components/ui/RevealImage";
import { FOUNDER } from "@/content/about";

export function FounderProfile() {
  const { eyebrow, name, role, bio, image } = FOUNDER;

  return (
    <Section>
      <div className="grid items-center gap-10 rounded-3xl bg-tint/50 p-6 sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-14 lg:p-12">
        <RevealImage src={image.src} alt={image.alt} />

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
