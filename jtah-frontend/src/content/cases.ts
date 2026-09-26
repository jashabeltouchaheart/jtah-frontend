import { CTA_LINKS } from "@/lib/site";
import type { CtaSectionProps } from "@/components/shared/CtaSection";
import type { LucideIcon } from "lucide-react";
import { Users, FileText, HeartHandshake, CalendarDays } from "lucide-react";

export const CASES_HERO = {
  eyebrow: "Our cases",
  title: ["Real People.", "Real Situations.", "Our Support."],
  description:
    "Every case represents a person, a family or a community in need. At JTAH, we listen, we respond, and we work towards lasting solutions.",
  image: {
    src: "/images/our-work/hero.jpg",
    alt: "A young girl looking ahead with hope",
  },
};

export const CASE_CATEGORIES = [
  { key: "women-girls", label: "Women & Girls" },
  { key: "child-welfare", label: "Child Welfare" },
  { key: "domestic-violence", label: "Domestic Violence" },
  { key: "family-disputes", label: "Family Disputes" },
  { key: "landlord-tenant", label: "Landlord & Tenant" },
  { key: "extortion", label: "Extortion" },
  { key: "police-cases", label: "Police Cases" },
] as const;

export type CaseCategory = (typeof CASE_CATEGORIES)[number]["key"];

export interface CaseStory {
  slug: string;
  title: string;
  summary: string;
  category: CaseCategory;
  date: string;
  image?: { src: string; alt: string };
}

// Anonymised sample stories. Replace with client-approved cases before launch.
export const CASES: CaseStory[] = [
  {
    slug: "a-young-girls-path-to-safety",
    title: "A Young Girl's Path to Safety",
    summary:
      "A 16-year-old girl was rescued from an abusive home and provided with safe shelter, counselling and access to education.",
    category: "women-girls",
    date: "2024-05-12",
  },
  {
    slug: "freedom-from-abuse",
    title: "Freedom from Abuse",
    summary:
      "A woman escaped a violent relationship and received legal support, medical care and counselling to help her rebuild her life.",
    category: "domestic-violence",
    date: "2024-02-28",
  },
  {
    slug: "reuniting-a-family",
    title: "Reuniting a Family",
    summary:
      "Through mediation and support services, JTAH helped a family resolve a long-standing dispute and rebuild their relationship.",
    category: "family-disputes",
    date: "2023-08-03",
  },
  {
    slug: "a-safe-place-to-call-home",
    title: "A Safe Place to Call Home",
    summary:
      "A vulnerable family facing eviction was supported by JTAH to secure a safe and stable home.",
    category: "landlord-tenant",
    date: "2023-01-17",
  },
  {
    slug: "justice-for-a-young-man",
    title: "Justice for a Young Man",
    summary:
      "A young man was falsely accused and extorted. JTAH provided legal support and worked with the authorities to resolve the case.",
    category: "extortion",
    date: "2022-11-09",
  },
  {
    slug: "support-through-legal-process",
    title: "Support Through Legal Process",
    summary:
      "JTAH guided a woman through a police case, ensuring her rights were protected throughout the process.",
    category: "police-cases",
    date: "2022-07-14",
  },
];

export interface CaseStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
  isYear?: boolean;
}

export const CASES_GLANCE = {
  title: "Our Cases at a Glance",
  intro:
    "Behind every case is a story of courage, resilience and hope. Here are some of the areas where we have provided support.",
  stats: [
    { value: 1000, suffix: "+", label: "People supported", icon: Users },
    { value: 500, suffix: "+", label: "Cases handled", icon: FileText },
    {
      value: 6,
      suffix: "+",
      label: "Key intervention areas",
      icon: HeartHandshake,
    },
    {
      value: 2000,
      prefix: "Since",
      label: "Years of service",
      icon: CalendarDays,
      isYear: true,
    },
  ] satisfies CaseStat[],
};

export const CASES_CTA: CtaSectionProps = {
  title: "You Are Not Alone",
  description:
    "If you or someone you know needs help, reach out to us. Every conversation is confidential and handled with care.",
  actions: [
    { label: "Get in Touch", href: CTA_LINKS.contact, variant: "primary" },
    { label: "Donate", href: CTA_LINKS.donate },
  ],
};
