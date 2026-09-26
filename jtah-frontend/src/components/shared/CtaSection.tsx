import { Button } from "@/components/ui/Button";
import { CTA_LINKS } from "@/lib/site";
import { RibbonDecor } from "@/components/ui/RibbonDecor";

export interface CtaAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface CtaSectionProps {
  title?: string;
  description?: string;
  actions?: CtaAction[];
}

const DEFAULT_CTA: Required<CtaSectionProps> = {
  title: "Be Part of the Journey",
  description:
    "Together, we can do more. Support our work, get involved or partner with us to create lasting change.",
  actions: [
    { label: "Donate", href: CTA_LINKS.donate, variant: "primary" },
    { label: "Volunteer", href: CTA_LINKS.volunteer },
    { label: "Partner", href: CTA_LINKS.partner },
  ],
};

export function CtaSection({
  title = DEFAULT_CTA.title,
  description = DEFAULT_CTA.description,
  actions = DEFAULT_CTA.actions,
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f1eff8] via-[#f8f7fc] to-[#f3f1f9] border-y border-[#3a3560]/[0.06]">
      {/* Decorative ribbon swooshes on the left */}
      <RibbonDecor side="left" />

      {/* Soft glow on the right */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-full bg-[#b7aee6]/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:pl-40 py-14 sm:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-3 max-w-md mx-auto md:mx-0">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#2e2a4f] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-sm text-[#3a3560]/65 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          {actions.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? "outline"}
              className="w-full sm:w-auto sm:px-9"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
