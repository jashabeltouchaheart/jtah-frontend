import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { CASES_GLANCE } from "@/content/cases";

export function CasesGlance() {
  const { title, intro, stats } = CASES_GLANCE;

  return (
    <section aria-label={title} className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-tint/50 p-6 sm:p-8 lg:grid-cols-[2fr_5fr] lg:items-center lg:gap-10 lg:p-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-ink/70">{intro}</p>
          </div>

          <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-ink/10">
            {stats.map(
              ({ value, prefix, suffix, label, icon: Icon, isYear }) => (
                <li key={label} className="pr-4 lg:px-6 lg:first:pl-0">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <p className="mt-3 font-serif text-3xl font-bold tabular-nums text-ink sm:text-4xl">
                    {prefix && <span className="mr-2">{prefix}</span>}
                    <CountUp
                      to={value}
                      from={isYear ? value - 20 : 0}
                      separator={!isYear}
                    />
                    {suffix}
                  </p>
                  <p className="mt-1 text-sm text-ink/70">{label}</p>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}
