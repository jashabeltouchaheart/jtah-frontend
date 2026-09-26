import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VISION } from "@/content/about";

export function VisionPillars() {
  const { eyebrow, title, intro, pillars } = VISION;

  return (
    <Section>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={intro}
        align="center"
      />

      <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/10">
        {pillars.map(({ title, description, icon: Icon }) => (
          <li
            key={title}
            className="group flex flex-col items-center px-6 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_-10px_rgba(106,79,155,0.7)] transition-transform duration-300 group-hover:-translate-y-1">
              <Icon aria-hidden className="size-6" />
            </span>
            <h3 className="mt-5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink">
              {title}
            </h3>
            <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-ink/65">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
