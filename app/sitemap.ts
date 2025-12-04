import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/posts';

const siteUrl = 'https://mickel.tech';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await getAllPosts();

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/log`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/log/${post.slug}`,
    lastModified: new Date(post.publishedAt ?? now),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...baseEntries, ...postEntries];
}
