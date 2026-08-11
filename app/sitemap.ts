import type { MetadataRoute } from "next";
import { insights } from "@/data/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uthamkumar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-09");
  return [
    { url: baseUrl, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/work/release-intelligence`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/dependency-intelligence`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/engineering-control-tower`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/ai-sdlc-governance`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/cyber-risk-command-center`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/engineering-experience-index`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
