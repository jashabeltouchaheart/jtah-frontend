import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JOURNEY } from "@/content/about";

export function JourneyTimeline() {
  const { eyebrow, title, milestones, pendingNote } = JOURNEY;

  return (
    <Section>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <ol className="relative mt-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-6">
        {/* Connecting line: vertical on mobile, horizontal on desktop */}
        <span
          aria-hidden
          className="absolute bottom-7 left-7 top-7 w-px bg-ink/10 md:bottom-auto md:left-0 md:right-0 md:h-px md:w-auto"
        />

        {milestones.map(({ year, title, description }) => (
          <li
            key={`${year}-${title}`}
            className="relative flex items-start gap-4 md:flex-1 md:flex-col"
          >
            <span className="flex h-14 min-w-14 items-center justify-center rounded-full bg-ink px-4 text-sm font-bold tabular-nums text-white">
              {year}
            </span>
            <div className="pt-3 md:pt-0">
              <h3 className="font-sans text-base font-semibold text-ink">
                {title}
              </h3>
              {description && (
                <p className="mt-1 text-sm leading-relaxed text-ink/65">
                  {description}
                </p>
              )}
            </div>
          </li>
        ))}

        {/* Placeholder step until more milestones are confirmed */}
        {pendingNote && (
          <li className="relative flex items-center gap-4 md:flex-1 md:flex-col md:items-start">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-dashed border-ink/25 bg-white text-ink/50">
              <ArrowRight
                aria-hidden
                className="size-5 rotate-90 md:rotate-0"
              />
            </span>
            <p className="text-sm text-ink/55">{pendingNote}</p>
          </li>
        )}
      </ol>
    </Section>
  );
}
