import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://talz.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
