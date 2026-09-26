import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { FOUNDER } from "@/content/about";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { FoundingYear } from "@/components/about/FoundingYear";
import { VisionPillars } from "@/components/about/VisionPillars";
import { FounderProfile } from "@/components/about/FounderProfile";
import { CoreAreas } from "@/components/about/CoreAreas";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { CtaSection } from "@/components/shared/CtaSection";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Since 2000, Jashabel Touch-A-Heart Foundation has championed the welfare and rights of women and the girl child in Nigeria through welfare, training, education and advocacy.",
  path: "/about",
  image: {
    url: "/images/about/hero.jpg",
    alt: "JTAH Foundation supporting a mother and daughter",
  },
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE.url}/about`,
  name: `About ${SITE.name}`,
  mainEntity: {
    "@type": "NGO",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    foundingDate: SITE.foundingYear,
    founder: {
      "@type": "Person",
      name: "Favour Linda Uzoamaka Ogbodo-Benson",
      jobTitle: FOUNDER.role,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-white">
      <JsonLd data={aboutJsonLd} />

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
