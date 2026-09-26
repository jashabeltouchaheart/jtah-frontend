import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Users,
  HeartHandshake,
  HandHeart,
  Scissors,
  BookOpen,
} from "lucide-react";

export const ABOUT_HERO = {
  eyebrow: "About JTAH",
  title: ["For The Love", "of Humanity"],
  subtitle: "Touching Lives Since 2000",
  description:
    "Jashabel Touch-A-Heart Foundation (JTAH) is a human rights, non-governmental, non-profit organisation dedicated to promoting the welfare and interests of women and the girl child.",
  image: {
    src: "/images/about/hero.jpg",
    alt: "A mother and daughter supported by JTAH Foundation",
  },
  imagePosition: "object-[center_35%]",
};

export const WHO_WE_ARE = {
  eyebrow: "Who we are",
  title: "A Force for Positive Change",
  paragraphs: [
    "JTAH has been touching lives since 2000. We are a human rights, non-governmental, non-profit organisation focused on the welfare and interests of women and the girl child, particularly poor housewives, single parents, young mothers and girls.",
    "We work to provide a strong support system for less privileged and oppressed women and girls, helping them access the resources, opportunities and care they need to build better lives.",
  ],
  image: {
    src: "/images/about/who-we-are.jpg",
    alt: "A JTAH facilitator speaking with women at a community session",
  },
} as const;

export const FOUNDING_YEAR = {
  year: 2000,
  countFrom: 1980,
  caption: "The year JTAH began its work.",
} as const;

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}
export const VISION = {
  eyebrow: "Our vision",
  title: "A Brighter Future for Women & Girls",
  intro: "Our vision is built on three key pillars.",

  pillars: [
    {
      title: "Advocacy",
      description: "To be an advocate for women and the girl child.",
      icon: Megaphone,
    },
    {
      title: "Empowerment",
      description: "To empower as many as we can in society.",
      icon: Users,
    },
    {
      title: "Humanity",
      description: "For the love of humanity.",
      icon: HeartHandshake,
    },
  ] satisfies Pillar[],
};

export const FOUNDER = {
  eyebrow: "Meet the founder",
  name: "Mrs. Favour Linda Uzoamaka Ogbodo-Benson",
  role: "Founder & Executive Director",
  bio: [
    "Mrs. Favour Linda Uzoamaka Ogbodo-Benson founded JTAH in 2000.",
    "She is an actor, film producer, publisher, blogger and human rights activist, with a focus on violence against women and the girl child.",
  ],
  image: {
    src: "/images/about/founder.jpg",
    alt: "Mrs. Favour Linda Uzoamaka Ogbodo-Benson, Founder and Executive Director of JTAH Foundation",
  },
} as const;

export interface CoreArea {
  title: string;
  description: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
}

export const CORE_AREAS = {
  eyebrow: "Our core areas",
  title: "Creating Opportunities for a Better Tomorrow",
  areas: [
    {
      title: "Welfare",
      description:
        "Periodic intervention programmes providing food, clothing and medical care to people in need, including poor housewives, single parents and young mothers.",
      icon: HandHeart,
      image: {
        src: "/images/about/core-welfare.jpg",
        alt: "JTAH volunteers supporting a mother and child",
      },
    },
    {
      title: "Training",
      description:
        "Vocational and practical skills that support self-employment and economic independence.",
      icon: Scissors,
      image: {
        src: "/images/about/core-training.jpg",
        alt: "A woman learning to sew at a JTAH skills session",
      },
    },
    {
      title: "Education",
      description:
        "Scholarships and educational support, because education is key to better opportunities for the girl child.",
      icon: BookOpen,
      image: {
        src: "/images/about/core-education.jpg",
        alt: "Schoolgirls supported by JTAH scholarships",
      },
    },
  ] satisfies CoreArea[],
};

export interface Milestone {
  year: string;
  title: string;
  description?: string;
}

export interface Journey {
  eyebrow: string;
  title: string;
  milestones: Milestone[];
  /** Remove once all milestones are verified */
  pendingNote?: string;
}

export const JOURNEY: Journey = {
  eyebrow: "Our story",
  title: "A Journey of Impact",
  milestones: [{ year: "2000", title: "JTAH Foundation founded" }],
  pendingNote: "More milestones will be added as they are verified.",
};
