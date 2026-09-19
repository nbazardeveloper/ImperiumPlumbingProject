import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/services-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/about",
    "/reviews",
    "/faq",
    "/service-area",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const servicePaths = services.map((s) => `/services/${s.slug}`);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.5,
  }));
}
