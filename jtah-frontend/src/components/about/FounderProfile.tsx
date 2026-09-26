import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaSplit } from "@/components/shared/MediaSplit";
import { FOUNDER } from "@/content/about";

export function FounderProfile() {
  const { eyebrow, name, role, bio, image } = FOUNDER;

  return (
    <Section>
      <MediaSplit image={image} highlighted>
        <SectionHeader eyebrow={eyebrow} title={name} />
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand sm:text-sm">
          {role}
        </p>
        {bio.map((text) => (
          <p key={text} className="text-sm leading-relaxed text-ink/70 sm:text-base">
            {text}
          </p>
        ))}
      </MediaSplit>
    </Section>
  );
}
