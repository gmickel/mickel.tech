import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { ComponentProps, ReactElement } from 'react';
import { BlogImage } from '@/components/blog/blog-image';
import { SectionDivider } from '@/components/blog/section-divider';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { TweetEmbed } from '@/components/blog/tweet-embed';

type HeadingProps = ComponentProps<'h1'>;
type ParagraphProps = ComponentProps<'p'>;
type AnchorProps = ComponentProps<'a'>;
type UnorderedListProps = ComponentProps<'ul'>;
type OrderedListProps = ComponentProps<'ol'>;
type ListItemProps = ComponentProps<'li'>;
type CodeProps = ComponentProps<'code'>;
type PreProps = ComponentProps<'pre'>;

function H1(props: HeadingProps): ReactElement {
  return (
    <h1
      className="mb-6 font-bold text-3xl text-white leading-tight md:text-4xl"
      {...props}
    />
  );
}

function H2(props: HeadingProps): ReactElement {
  return (
    <h2
      className="mt-10 mb-4 font-bold text-2xl text-white leading-snug md:text-3xl"
      {...props}
    />
  );
}

function H3(props: HeadingProps): ReactElement {
  return (
    <h3
      className="mt-8 mb-3 font-bold text-white text-xl leading-snug md:text-2xl"
      {...props}
    />
  );
}

function P(props: ParagraphProps): ReactElement {
  return (
    <p
      className="mb-4 text-base text-muted-foreground leading-relaxed"
      {...props}
    />
  );
}

function A(props: AnchorProps): ReactElement {
  return <a className="glow-link" {...props} />;
}

function Ul(props: UnorderedListProps): ReactElement {
  return (
    <ul
      className="mb-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed"
      {...props}
    />
  );
}

function Ol(props: OrderedListProps): ReactElement {
  return (
    <ol
      className="mb-4 list-decimal space-y-2 pl-5 text-muted-foreground leading-relaxed"
      {...props}
    />
  );
}

function Li(props: ListItemProps): ReactElement {
  return <li {...props} />;
}

function Code(props: CodeProps): ReactElement {
  return (
    <code
      className="rounded bg-secondary px-1.5 py-0.5 font-mono text-primary text-xs"
      {...props}
    />
  );
}

function Pre(props: PreProps): ReactElement {
  return (
    <pre
      className="mb-6 overflow-x-auto rounded border border-white/10 bg-black/80 p-4 font-mono text-xs leading-relaxed"
      {...props}
    />
  );
}

export const mdxComponents: MDXRemoteProps['components'] = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  code: Code,
  pre: Pre,
  BlogImage,
  SectionDivider,
  TableOfContents,
  TweetEmbed,
};
