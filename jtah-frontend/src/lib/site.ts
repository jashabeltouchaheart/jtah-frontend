/**
 * Site wide navigation and call to action links.
 * Update hrefs here once real pages exist and every Nav, Footer and CTA follows.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "News & Updates", href: "#news" },
];

export const CTA_LINKS = {
  donate: "#donate",
  volunteer: "#volunteer",
  partner: "#partner",
} as const;
