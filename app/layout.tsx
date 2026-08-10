import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = { themeColor: "#f4f1ea", colorScheme: "light" };

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Utham Kumar | Technology Program & Product Leader";
  const description = "The portfolio of Utham Kumar, a technology program and product leader working across engineering delivery, secure digital platforms, enterprise AI, and cloud transformation.";
  return {
    title,
    description,
    applicationName: "Utham Kumar Portfolio",
    keywords: ["technology program management", "product leadership", "engineering delivery", "enterprise AI", "digital payments"],
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Utham Kumar, Technology Program and Product Leader" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" id="top"><body>{children}</body></html>;
}
