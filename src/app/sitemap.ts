import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { concerns } from "@/data/concerns";
import { journalArticles } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aandreamelie.com";

  // Static routes
  const staticRoutes = [
    "",
    "/shop",
    "/concern",
    "/journal",
    "/our-story",
    "/purity",
    "/faq",
    "/contact",
    "/terms",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product detail pages
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic concern routes
  const concernRoutes = concerns.map((concern) => ({
    url: `${baseUrl}/concern/${concern.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic journal articles
  const journalRoutes = journalArticles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...concernRoutes, ...journalRoutes];
}
