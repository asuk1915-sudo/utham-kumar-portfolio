import type { Metadata, Viewport } from "next";
import "./globals.css";
import { HOME_DESCRIPTION, HOME_TITLE, PERSON_NAME, PROFESSIONAL_PROFILE_URL, SITE_URL } from "./site";

export const viewport: Viewport = { themeColor: "#f4f1ea", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  applicationName: `${PERSON_NAME} Technology Portfolio`,
  authors: [{ name: PERSON_NAME, url: PROFESSIONAL_PROFILE_URL }],
  creator: PERSON_NAME,
  keywords: ["technology program management", "product leadership", "engineering delivery", "AI-driven secure computing systems", "cloud architecture", "digital payments"],
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: "Utham Kumar Technology Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: `${PERSON_NAME}, Technology Program and Product Leader` }],
  },
  twitter: { card: "summary_large_image", title: HOME_TITLE, description: HOME_DESCRIPTION, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" id="top"><body>{children}</body></html>;
}
