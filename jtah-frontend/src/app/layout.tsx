import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/site";
import { Playfair_Display, Inter } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

// Headings: Playfair Display. Body and UI: Inter.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Touching Lives Since 2000`,
    template: `%s | ${SITE.name}`, // other pages become "Events | JTAH Foundation"
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "JTAH Foundation",
    "Jashabel Touch-A-Heart Foundation",
    "women empowerment",
    "girl child education",
    "nonprofit",
    "community outreach",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} | Touching Lives Since 2000`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Touching Lives Since 2000`,
    description: SITE.description,
  },
  robots: { index: process.env.ALLOW_INDEXING === "true", follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
