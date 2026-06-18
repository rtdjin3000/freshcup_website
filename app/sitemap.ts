import type { MetadataRoute } from "next";

const base = "https://freshcupbubbletea.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/daily-special", "/about", "/gallery", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
