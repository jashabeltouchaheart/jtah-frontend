/**
 * Site wide navigation and call to action links.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Updates", href: "#news" },
];

export const CTA_LINKS = {
  donate: "#donate",
  volunteer: "#volunteer",
  partner: "#partner",
} as const;

export const SITE = {
  name: "JTAH Foundation",
  legalName: "Jashabel Touch-A-Heart Foundation",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Jashabel Touch-A-Heart Foundation has been touching lives since 2000, promoting the welfare of women and the girl child through education, empowerment, health and advocacy.",
  foundingYear: "2000",
  socials: [
    "https://facebook.com/...",
    "https://x.com/jtahf?s=11",
    "https://youtube.com/@jtah.foundation?si=57tkLVDY8Lwirsun",
    "https://www.instagram.com/jtahfoundation?stkn=bWY5M3J2d2x2a3Vy",
    "https://linkedin.com/...",
  ],
};
