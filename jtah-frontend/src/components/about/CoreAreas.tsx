import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CORE_AREAS } from "@/content/about";
import { ImageCard } from "../ui/ImageCard";

export function CoreAreas() {
  const { eyebrow, title, areas } = CORE_AREAS;

  return (
    <Section tone="tint">
      <SectionHeader eyebrow={eyebrow} title={title} />

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {areas.map((area, index) => (
          <li key={area.title}>
            <ImageCard {...area} delay={index * 0.08} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
