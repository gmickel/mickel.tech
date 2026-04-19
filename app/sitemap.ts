import type { MetadataRoute } from 'next';

import { getAppSlugs } from '@/lib/apps';
import { BENCH_EVALS } from '@/lib/bench-evals';
import { getAllPosts, getTagIndex } from '@/lib/posts';

const siteUrl = 'https://mickel.tech';

// Pages with both EN + DE versions
const translatedPaths = [
  '',
  '/sdlc',
  '/ai-transformation',
  '/expert',
  '/case-studies',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [posts, tagIndex] = await Promise.all([getAllPosts(), getTagIndex()]);
  const appSlugs = getAppSlugs();

  // Translated pages with hreflang alternates
  const i18nPages: MetadataRoute.Sitemap = translatedPaths.flatMap((path) => {
    const enUrl = `${siteUrl}${path || ''}`;
    const deUrl = `${siteUrl}/de${path}`;
    const alternates = {
      languages: { en: enUrl, de: deUrl },
    };

    return [
      {
        url: enUrl,
        priority: path === '' ? 1 : 0.9,
        changeFrequency: 'monthly' as const,
        lastModified: now,
        alternates,
      },
      {
        url: deUrl,
        priority: path === '' ? 0.9 : 0.85,
        changeFrequency: 'monthly' as const,
        lastModified: now,
        alternates,
      },
    ];
  });

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/log`,
      priority: 0.8,
      changeFrequency: 'weekly',
      lastModified: now,
    },
    {
      url: `${siteUrl}/apps`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: now,
    },
    {
      url: `${siteUrl}/gmickel-bench`,
      priority: 0.8,
      changeFrequency: 'weekly',
      lastModified: now,
    },
  ];

  const appPages: MetadataRoute.Sitemap = appSlugs.map((slug) => ({
    url: `${siteUrl}/apps/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/log/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const tagPages: MetadataRoute.Sitemap = tagIndex.slugs.map((slug) => ({
    url: `${siteUrl}/log/tag/${slug}`,
    priority: 0.6,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }));

  const evalPages: MetadataRoute.Sitemap = BENCH_EVALS.map((e) => ({
    url: `${siteUrl}/gmickel-bench/${e.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }));

  return [
    ...i18nPages,
    ...staticPages,
    ...appPages,
    ...postPages,
    ...tagPages,
    ...evalPages,
  ];
}
