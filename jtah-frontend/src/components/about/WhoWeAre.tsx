import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaSplit } from "@/components/shared/MediaSplit";
import { WHO_WE_ARE } from "@/content/about";

export function WhoWeAre() {
  const { eyebrow, title, paragraphs, image } = WHO_WE_ARE;

  return (
    <Section>
      <MediaSplit image={image}>
        <SectionHeader eyebrow={eyebrow} title={title} />
        {paragraphs.map((text) => (
          <p key={text} className="text-sm leading-relaxed text-ink/70 sm:text-base">
            {text}
          </p>
        ))}
      </MediaSplit>
    </Section>
  );
}
