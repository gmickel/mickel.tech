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
type BlockquoteProps = ComponentProps<'blockquote'>;
type HrProps = ComponentProps<'hr'>;

/**
 * Atelier-register MDX components. Paper cream surface, Newsreader for
 * headings (via atelier-display class), Hanken Grotesk body, JetBrains
 * Mono for code. Code blocks use a graphite-inverted "codex panel" look.
 */

function H1(props: HeadingProps): ReactElement {
  return (
    <h1
      className="atelier-display mt-10 mb-6 font-medium text-[clamp(1.8rem,1.3rem+1.6vw,2.5rem)] text-[hsl(var(--ink))] leading-[1.1] tracking-[-0.015em]"
      {...props}
    />
  );
}

function H2(props: HeadingProps): ReactElement {
  return (
    <h2
      className="atelier-display mt-12 mb-4 font-medium text-[clamp(1.45rem,1.15rem+1vw,1.9rem)] text-[hsl(var(--ink))] leading-[1.15] tracking-[-0.01em]"
      {...props}
    />
  );
}

function H3(props: HeadingProps): ReactElement {
  return (
    <h3
      className="atelier-display mt-10 mb-3 font-medium text-[1.3rem] text-[hsl(var(--ink))] leading-snug"
      {...props}
    />
  );
}

function P(props: ParagraphProps): ReactElement {
  return (
    <p
      className="atelier-body mb-5 text-[1.02rem] text-[hsl(var(--ink))]/88 leading-[1.7]"
      {...props}
    />
  );
}

function A(props: AnchorProps): ReactElement {
  return (
    <a
      className="font-medium text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] decoration-from-font underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
      {...props}
    />
  );
}

function Ul(props: UnorderedListProps): ReactElement {
  return (
    <ul
      className="atelier-body mb-5 list-none space-y-2 text-[1.02rem] text-[hsl(var(--ink))]/88 leading-[1.7] [&>li]:relative [&>li]:pl-5 [&>li]:before:absolute [&>li]:before:top-[0.85em] [&>li]:before:left-0 [&>li]:before:h-px [&>li]:before:w-3 [&>li]:before:bg-[hsl(var(--rust))]"
      {...props}
    />
  );
}

function Ol(props: OrderedListProps): ReactElement {
  return (
    <ol
      className="atelier-body mb-5 list-decimal space-y-2 pl-6 text-[1.02rem] text-[hsl(var(--ink))]/88 leading-[1.7] marker:font-medium marker:text-[hsl(var(--rust))]"
      {...props}
    />
  );
}

function Li(props: ListItemProps): ReactElement {
  return <li {...props} />;
}

function Blockquote(props: BlockquoteProps): ReactElement {
  return (
    <blockquote
      className="[&>p]:atelier-display my-8 border-[hsl(var(--rust))] border-l-2 pl-6 font-[var(--font-display)] text-[1.2rem] text-[hsl(var(--ink))] italic leading-[1.45] [&>p]:mb-0 [&>p]:text-[1.2rem]"
      {...props}
    />
  );
}

function Hr(props: HrProps): ReactElement {
  return (
    <hr className="my-12 h-px border-0 bg-[hsl(var(--ink))]/15" {...props} />
  );
}

function Code(props: CodeProps): ReactElement {
  return (
    <code
      className="atelier-mono rounded-sm bg-[hsl(var(--ink))]/6 px-[0.35em] py-[0.1em] text-[0.88em] text-[hsl(var(--ink))]"
      {...props}
    />
  );
}

function Pre(props: PreProps): ReactElement {
  return (
    <div className="codex-panel my-7">
      <div
        aria-hidden="true"
        className="codex-panel__bar flex items-center gap-2"
      >
        <span className="codex-panel__dot" />
        <span className="codex-panel__dot" />
        <span className="codex-panel__dot" />
      </div>
      <pre
        className="atelier-mono overflow-x-auto px-5 py-4 text-[0.82rem] text-[hsl(var(--paper))] leading-[1.65] [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[hsl(var(--paper))]"
        {...props}
      />
    </div>
  );
}

export const mdxComponentsAtelier: MDXRemoteProps['components'] = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  hr: Hr,
  code: Code,
  pre: Pre,
  BlogImage,
  SectionDivider,
  TableOfContents,
  TweetEmbed,
};
