import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/json-ld';
import { mdxComponents } from '@/lib/mdx-components';
import { mdxOptions } from '@/lib/mdx-options';
import { getPostBySlug, getPublishedSlugs } from '@/lib/posts';
import { slugifyTag } from '@/lib/tag-utils';

type ParamsPromise = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getPublishedSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const description =
    post.summary ??
    'System log entry from Gordon Mickel on AI SDLC, platforms and operational agents.';

  const url = `https://mickel.tech/log/${post.slug}`;

  // Determine canonical based on source
  let canonical: string;
  if (post.canonicalSource === 'medium' && post.mediumUrl) {
    canonical = post.mediumUrl;
  } else if (post.canonicalSource === 'substack' && post.substackUrl) {
    canonical = post.substackUrl;
  } else {
    canonical = `/log/${slug}`;
  }

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url,
      publishedTime: post.publishedAt,
      authors: ['Gordon Mickel'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  };
}

function formatDate(iso: string): string {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return date.toLocaleDateString('en-CH', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default async function LogPostPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Log', url: '/log' },
          { name: post.title, url: `/log/${post.slug}` },
        ])}
      />
      <article className="mx-auto max-w-3xl px-6 pt-24 pb-32 md:px-0">
        <header className="mb-10 space-y-4 border-white/10 border-b pb-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] text-muted-foreground"
          >
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link className="hover:text-primary" href="/log">
              Log
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Post</span>
          </nav>
          <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
            SYSTEM_LOG ENTRY
          </p>
          <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-muted-foreground uppercase">
            <span>{formatDate(post.publishedAt)}</span>
            {post.canonicalSource ? (
              <span>Source: {post.canonicalSource.toUpperCase()}</span>
            ) : null}
          </div>
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  className="inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase transition-colors hover:border-primary/40 hover:text-primary"
                  href={`/log/tag/${slugifyTag(tag)}`}
                  key={`${post.slug}-${tag}`}
                >
                  # {tag}
                </Link>
              ))}
            </div>
          ) : null}
          {post.substackUrl ? (
            <div className="flex flex-wrap items-center gap-3 rounded border border-primary/30 bg-primary/5 p-4 text-primary text-sm">
              <span className="font-bold text-[11px] uppercase tracking-wide">
                Substack
              </span>
              <a
                className="underline underline-offset-4 transition-colors hover:text-white"
                href={post.substackUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read the original on Substack and subscribe for updates →
              </a>
            </div>
          ) : null}
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote
            components={mdxComponents}
            // biome-ignore lint/suspicious/noExplicitAny: MDX types are complex
            options={mdxOptions as any}
            source={post.content}
          />
        </div>
      </article>
    </>
  );
}
