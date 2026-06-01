import type { MetadataRoute } from 'next';
import { CHEATSHEETS } from '@/lib/cheatsheets';
import { loadModels } from '@/lib/data';

export const dynamic = 'force-static';

const SITE_URL = 'https://talz.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/cheatsheet`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/calculator`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const cheatsheetRoutes: MetadataRoute.Sitemap = CHEATSHEETS.map((cs) => ({
    url: `${SITE_URL}/cheatsheet/${cs.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const modelRoutes: MetadataRoute.Sitemap = loadModels().map((m) => ({
    url: `${SITE_URL}/model/${m.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...cheatsheetRoutes, ...modelRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}
