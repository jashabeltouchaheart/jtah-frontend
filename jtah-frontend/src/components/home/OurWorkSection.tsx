"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ImageCard } from "../ui/ImageCard";

interface Program {
  title: string;
  description: string;
  bg: string;
  href: string;
}

const PROGRAMS: Program[] = [
  {
    title: "Education & Skills",
    description:
      "Equipping individuals with the knowledge and skills for a brighter future.",
    bg: "linear-gradient(135deg, #c48b60 0%, #9e643c 100%)",
    href: "#education",
  },
  {
    title: "Women Empowerment",
    description:
      "Creating opportunities for women to lead, thrive, and build stronger communities.",
    bg: "linear-gradient(135deg, #749377 0%, #517155 100%)",
    href: "#women",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Improving access to healthcare and mental wellness support for vulnerable communities.",
    bg: "linear-gradient(135deg, #9175b5 0%, #684a91 100%)",
    href: "#health",
  },
  {
    title: "Advocacy & Awareness",
    description:
      "Amplifying voices, driving change, and influencing policies for a more inclusive society.",
    bg: "linear-gradient(135deg, #2c334d 0%, #1f2336 100%)",
    href: "#advocacy",
  },
];

export function OurWorkSection() {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-28 bg-[#eeecf7]/30 border-b border-[#3a3560]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        <SectionHeader
          eyebrow="What we do"
          title="Our Work"
          action={<ArrowLink href="#programs">Explore All Programs</ArrowLink>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog, index) => (
            <ImageCard
              key={prog.title}
              title={prog.title}
              description={prog.description}
              placeholder={prog.bg}
              href={prog.href}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
