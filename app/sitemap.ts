import { MetadataRoute } from 'next';
import { getAllPageSlugs } from '@/lib/page-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://seodxb.com';
  const slugs = getAllPageSlugs();

  const dynamicPages = slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date('2026-04-10'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const staticPages = [
    { url: baseUrl, lastModified: new Date('2026-04-10'), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-04-09'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: new Date('2026-04-08'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/aeo-geo`, lastModified: new Date('2026-04-10'), changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/results`, lastModified: new Date('2026-04-07'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-04-05'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-04-10'), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-04-09'), changeFrequency: 'weekly' as const, priority: 0.6 },
  ];

  return [...staticPages, ...dynamicPages];
}
