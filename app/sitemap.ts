import type { MetadataRoute } from "next";
import { insights } from "@/data/content";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-09");
  return [
    { url: SITE_URL, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/work/release-intelligence`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/dependency-intelligence`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/engineering-control-tower`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/ai-sdlc-governance`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/cyber-risk-command-center`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/engineering-experience-index`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
