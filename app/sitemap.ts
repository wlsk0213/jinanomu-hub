import type { MetadataRoute } from 'next';
import { site, nav } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...nav.map((n) => ({
      url: `${site.url}${n.href}`,
      lastModified: now,
      changeFrequency: (n.href === '/writing/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: n.href === '/writing/' ? 0.9 : 0.7,
    })),
  ];
}
