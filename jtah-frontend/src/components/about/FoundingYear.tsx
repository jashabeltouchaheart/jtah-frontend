import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { RibbonDecor } from "@/components/ui/RibbonDecor";
import { FOUNDING_YEAR } from "@/content/about";

export function FoundingYear() {
  const { year, countFrom, caption } = FOUNDING_YEAR;

  return (
    <section
      aria-label="Founding year"
      className="relative overflow-hidden border-y border-ink/[0.06] bg-gradient-to-r from-[#f1eff8] via-[#f8f7fc] to-[#f3f1f9]"
    >
      {/* Same decoration as the homepage "Be Part of the Journey" banner */}
      <RibbonDecor side="right" className="hidden sm:block" />

      <Container className="relative flex flex-col items-center gap-5 py-12 text-center sm:flex-row sm:gap-10 sm:py-16 sm:text-left">
        <CountUp
          from={countFrom}
          to={year}
          className="font-serif text-6xl font-bold tabular-nums tracking-tight text-ink sm:text-7xl lg:text-8xl"
        />
        <span aria-hidden className="h-px w-12 bg-ink/15 sm:h-16 sm:w-px" />
        <p className="max-w-xs font-serif text-xl leading-snug text-ink/80 sm:text-2xl">
          {caption}
        </p>
      </Container>
    </section>
  );
}
