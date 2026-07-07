import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://aandreamelie.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cart",
        "/checkout",
        "/order-confirmation",
        "/admin",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
