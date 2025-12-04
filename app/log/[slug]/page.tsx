import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { mdxComponents } from '@/lib/mdx-components';
import { mdxOptions } from '@/lib/mdx-options';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';

type ParamsPromise = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getPostSlugs();

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

  return {
    title: post.title,
    description,
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
    <article className="mx-auto max-w-3xl px-6 pt-24 pb-32 md:px-0">
      <header className="mb-10 space-y-4 border-white/10 border-b pb-6">
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
              <span
                className="inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase"
                key={`${post.slug}-${tag}`}
              >
                # {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote
          components={mdxComponents}
          options={mdxOptions}
          source={post.content}
        />
      </div>
    </article>
  );
}
