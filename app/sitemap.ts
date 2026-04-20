import type { MetadataRoute } from 'next';

import { getAppSlugs } from '@/lib/apps';
import { BENCH_EVALS } from '@/lib/bench-evals';
import { CASE_STUDIES } from '@/lib/case-studies';
import { getAllPosts, getTagIndex } from '@/lib/posts';

const siteUrl = 'https://mickel.tech';

// Pages with both EN + DE versions. x-default points to EN by convention.
const translatedPaths = [
  '',
  '/sdlc',
  '/ai-transformation',
  '/expert',
  '/case-studies',
  '/about',
  '/imprint',
  '/privacy',
];

function i18nAlternates(path: string) {
  const enUrl = `${siteUrl}${path || ''}`;
  const deUrl = `${siteUrl}/de${path}`;
  return {
    languages: {
      en: enUrl,
      de: deUrl,
      'x-default': enUrl,
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [posts, tagIndex] = await Promise.all([getAllPosts(), getTagIndex()]);
  const appSlugs = getAppSlugs();

  // Translated pages with hreflang alternates
  const i18nPages: MetadataRoute.Sitemap = translatedPaths.flatMap((path) => {
    const enUrl = `${siteUrl}${path || ''}`;
    const deUrl = `${siteUrl}/de${path}`;
    const alternates = i18nAlternates(path);

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

  // Case study detail pages (both EN and DE)
  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.flatMap(
    (study) => {
      const path = `/case-studies/${study.id}`;
      const alternates = i18nAlternates(path);
      return [
        {
          url: `${siteUrl}${path}`,
          priority: 0.75,
          changeFrequency: 'monthly' as const,
          lastModified: now,
          alternates,
        },
        {
          url: `${siteUrl}/de${path}`,
          priority: 0.7,
          changeFrequency: 'monthly' as const,
          lastModified: now,
          alternates,
        },
      ];
    }
  );

  // Shared EN-only sections (bilingual audience, no DE mirror — /log, /apps).
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
    ...caseStudyPages,
    ...staticPages,
    ...appPages,
    ...postPages,
    ...tagPages,
    ...evalPages,
  ];
}
