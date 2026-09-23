import { HeroCarousel } from "@/components/home/HeroCarousel";
import { AboutSection } from "@/components/home/AboutSection";
import { FounderQuoteSection } from "@/components/home/FounderQuoteSection";
import { OurWorkSection } from "@/components/home/OurWorkSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { VideoTestimonialSection } from "@/components/home/VideoTestimonialSection";
import { EventsSection } from "@/components/home/EventsSection";
import { CtaSection } from "@/components/home/CtaSection";

// Re-fetch Sanity-backed sections
// at most once a minute, so publishing in the Studio shows up here without
// needing a new deploy every time.
export const revalidate = 60;

export default async function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <HeroCarousel />
      <AboutSection />
      <FounderQuoteSection />
      <OurWorkSection />
      <InnovationSection />
      <VideoTestimonialSection />
      <EventsSection />
      <CtaSection />
    </main>
  );
}
