import { MetadataRoute } from "next";
import { packages } from "@/data/packages";
import { galleryItems } from "@/data/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhumijaholidays.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/packages",
    "/gallery",
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

  // Gallery pages
  const galleryRoutes = galleryItems.map((item) => ({
    url: `${baseUrl}/gallery/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...packageRoutes, ...galleryRoutes];
}
