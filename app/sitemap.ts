import type { MetadataRoute } from "next";

const base = "https://fresh-cup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/bubble-tea-in-don-mills",
    "/bubble-tea-near-fairview-mall",
    "/boba-peanut-plaza",
    "/bubble-tea-north-york",
    "/menu",
    "/daily-special",
    "/about",
    "/gallery",
    "/contact",
    "/review",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
