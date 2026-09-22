import { HeroCarousel } from '@/components/home/HeroCarousel';
import { AboutSection } from '@/components/home/AboutSection';
import { OurWorkSection } from '@/components/home/OurWorkSection';
import { InnovationSection } from '@/components/home/InnovationSection';
import { EventsSection } from '@/components/home/EventsSection';
import { CtaSection } from '@/components/home/CtaSection';

export default async function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <HeroCarousel />
      <AboutSection />
      <OurWorkSection />
      <InnovationSection />
      <EventsSection />
      <CtaSection />
    </main>
  );
}