import { ImageCard } from "@/components/ui/ImageCard";
import type { CaseStory } from "@/content/cases";
import { categoryLabel } from "@/lib/cases";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" }).format(
    new Date(iso),
  );

interface CaseCardProps {
  story: CaseStory;
  delay?: number;
}

export function CaseCard({ story, delay }: CaseCardProps) {
  return (
    <ImageCard
      eyebrow={`${categoryLabel(story.category)} · ${formatDate(story.date)}`}
      title={story.title}
      description={story.summary}
      image={story.image}
      delay={delay}
    />
  );
}
