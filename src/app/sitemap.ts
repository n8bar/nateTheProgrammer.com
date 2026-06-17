import type { MetadataRoute } from 'next';
import { caseStudies } from '@/content/work';
import { posts } from '@/content/writing';

const base = 'https://natetheprogrammer.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ['', '/work', '/experience', '/writing', '/contact', '/playground'].map(
    (p) => ({ url: `${base}${p}`, lastModified: now }),
  );

  const work = caseStudies.map((s) => ({ url: `${base}/work/${s.slug}`, lastModified: now }));

  const writing = posts.map((p) => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: new Date(`${p.date}T00:00:00Z`),
  }));

  return [...staticRoutes, ...work, ...writing];
}
