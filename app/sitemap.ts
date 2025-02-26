import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apilexica.com"; // Replace with your actual domain

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  // API routes
  const apiRoutes = [
    {
      url: `${baseUrl}/apis/premium-ai-image-upscaler-api`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // Add more API routes here as they are created
  ];

  // Combine all routes
  const allRoutes = [...staticRoutes, ...apiRoutes];

  // Log the total number of URLs for debugging
  console.log(`Total URLs in sitemap: ${allRoutes.length}`);
  console.log(
    "API URLs:",
    apiRoutes.map((r) => r.url)
  );

  return allRoutes;
}
