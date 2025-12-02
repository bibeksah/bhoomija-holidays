import { MetadataRoute } from "next";
import { packages } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhumijaholidays.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/packages",
    "/destinations",
    "/destinations/kathmandu",
    "/destinations/janakpurdham",
    "/plan-my-trip",
    "/contact",
    "/faq",
    "/reviews",
    "/policies/terms",
    "/policies/privacy",
    "/policies/cancellation",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Package pages
  const packageRoutes = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...packageRoutes];
}
