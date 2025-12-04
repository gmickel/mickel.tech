'use server';

import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const MDX_EXTENSION = /\.mdx$/;

export type PostStatus = 'draft' | 'published';

export interface PostFrontmatter {
  title: string;
  summary?: string;
  publishedAt: string;
  tags?: string[];
  mediumUrl?: string;
  substackUrl?: string;
  canonicalSource?: 'medium' | 'substack' | 'native';
  status?: PostStatus;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

async function ensurePostsDir(): Promise<boolean> {
  try {
    await fs.access(POSTS_DIR);
    return true;
  } catch {
    return false;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const exists = await ensurePostsDir();
  if (!exists) {
    return [];
  }

  const entries = await fs.readdir(POSTS_DIR);

  return entries
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(MDX_EXTENSION, ''));
}

async function readPostFile(slug: string): Promise<Post | null> {
  const exists = await ensurePostsDir();
  if (!exists) {
    return null;
  }

  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(raw);

    const frontmatter = data as Partial<PostFrontmatter>;

    if (!(frontmatter.title && frontmatter.publishedAt)) {
      return null;
    }

    const meta: PostMeta = {
      slug,
      title: frontmatter.title,
      summary: frontmatter.summary ?? '',
      publishedAt: frontmatter.publishedAt,
      tags: frontmatter.tags ?? [],
      mediumUrl: frontmatter.mediumUrl,
      substackUrl: frontmatter.substackUrl,
      canonicalSource: frontmatter.canonicalSource ?? 'native',
      status: frontmatter.status ?? 'published',
    };

    return {
      ...meta,
      content,
    };
  } catch {
    return null;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await readPostFile(slug);

  if (!post || post.status === 'draft') {
    return null;
  }

  return post;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();

  if (!slugs.length) {
    return [];
  }

  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));

  return posts
    .filter((post): post is Post => Boolean(post) && post.status !== 'draft')
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      publishedAt: post.publishedAt,
      tags: post.tags,
      mediumUrl: post.mediumUrl,
      substackUrl: post.substackUrl,
      canonicalSource: post.canonicalSource,
      status: post.status,
    }))
    .sort((a, b) => {
      const aTime = new Date(a.publishedAt).getTime();
      const bTime = new Date(b.publishedAt).getTime();

      return bTime - aTime;
    });
}

export async function getLatestPosts(limit = 3): Promise<PostMeta[]> {
  const posts = await getAllPosts();

  return posts.slice(0, limit);
}
