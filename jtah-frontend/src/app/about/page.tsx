import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { FoundingYear } from "@/components/about/FoundingYear";
import { VisionPillars } from "@/components/about/VisionPillars";
import { FounderProfile } from "@/components/about/FounderProfile";
import { CoreAreas } from "@/components/about/CoreAreas";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { CtaSection } from "@/components/shared/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jashabel Touch-A-Heart Foundation has promoted the welfare of women and the girl child in Nigeria since 2000.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <FoundingYear />
      <VisionPillars />
      <FounderProfile />
      <CoreAreas />
      <JourneyTimeline />
      <CtaSection />
    </main>
  );
}
