import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';
import { slugifyTag } from './tag-utils';

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

async function getAllPostsInternal(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();

  if (!slugs.length) {
    return [];
  }

  const isPublished = (post: Post | null): post is Post =>
    post !== null && post.status !== 'draft';

  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));

  return posts
    .filter(isPublished)
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

// Memoize to avoid re-parsing MDX files during build
export const getAllPosts = cache(getAllPostsInternal);

export async function getLatestPosts(limit = 3): Promise<PostMeta[]> {
  const posts = await getAllPosts();

  return posts.slice(0, limit);
}

export async function getPublishedSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

// Tag infrastructure
export interface TagIndex {
  slugToDisplay: Map<string, string>;
  postsBySlug: Map<string, PostMeta[]>;
  slugs: string[];
}

async function getTagIndexInternal(): Promise<TagIndex> {
  const posts = await getAllPosts();
  const slugToDisplay = new Map<string, string>();
  const postsBySlug = new Map<string, PostMeta[]>();
  const collisions: Array<{ slug: string; tags: string[] }> = [];

  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      const slug = slugifyTag(tag);

      const existingDisplay = slugToDisplay.get(slug);
      if (existingDisplay && existingDisplay !== tag) {
        const collision = collisions.find((c) => c.slug === slug);
        if (collision) {
          if (!collision.tags.includes(tag)) {
            collision.tags.push(tag);
          }
        } else {
          collisions.push({ slug, tags: [existingDisplay, tag] });
        }
      }

      if (!slugToDisplay.has(slug)) {
        slugToDisplay.set(slug, tag);
      }

      const existing = postsBySlug.get(slug) ?? [];
      existing.push(post);
      postsBySlug.set(slug, existing);
    }
  }

  if (collisions.length > 0) {
    const msg = collisions
      .map((c) => `  "${c.slug}" ← [${c.tags.map((t) => `"${t}"`).join(', ')}]`)
      .join('\n');
    throw new Error(
      `Tag slug collisions detected:\n${msg}\n` +
        'Fix by normalizing tags in frontmatter.'
    );
  }

  return {
    slugToDisplay,
    postsBySlug,
    slugs: Array.from(slugToDisplay.keys()).sort(),
  };
}

// Memoize to avoid rebuilding tag index during build
export const getTagIndex = cache(getTagIndexInternal);

export async function getPostsByTag(tagSlug: string): Promise<PostMeta[]> {
  const index = await getTagIndex();
  return index.postsBySlug.get(tagSlug) ?? [];
}

export async function getTagDisplayName(
  tagSlug: string
): Promise<string | null> {
  const index = await getTagIndex();
  return index.slugToDisplay.get(tagSlug) ?? null;
}
