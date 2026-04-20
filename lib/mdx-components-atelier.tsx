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
 * Atelier MDX components — "field journal" register.
 *
 * Warm paper cream surface, Newsreader serif display (optically sized),
 * Hanken Grotesk body, JetBrains Mono for micro-type. Rust as single
 * accent. Tight vertical rhythm, hanging list markers, ornament
 * dividers — engineer's notebook over magazine.
 *
 * Per-element rhythm tuned to a 24px baseline at the 17px body size.
 * Heading top margins are generous; bottom margins tight so the
 * heading-to-body gap feels deliberate, not loose.
 */

function H1(props: HeadingProps): ReactElement {
  return (
    <h1
      className="atelier-display mt-14 mb-5 font-medium text-[clamp(2rem,1.5rem+1.4vw,2.65rem)] text-[hsl(var(--ink))] leading-[1.08] tracking-[-0.015em] first:mt-0"
      {...props}
    />
  );
}

function H2(props: HeadingProps): ReactElement {
  return (
    <h2
      className="atelier-display mt-14 mb-4 font-medium text-[clamp(1.55rem,1.2rem+1vw,2.05rem)] text-[hsl(var(--ink))] leading-[1.12] tracking-[-0.012em]"
      {...props}
    />
  );
}

function H3(props: HeadingProps): ReactElement {
  return (
    <h3
      className="atelier-display mt-10 mb-3 font-medium text-[1.3rem] text-[hsl(var(--ink))] leading-[1.25] tracking-[-0.005em]"
      {...props}
    />
  );
}

function P(props: ParagraphProps): ReactElement {
  return (
    <p
      className="atelier-body mb-[1.35em] text-[1.05rem] text-[hsl(var(--ink))]/90 leading-[1.65]"
      {...props}
    />
  );
}

function A(props: AnchorProps): ReactElement {
  return (
    <a
      className="font-medium text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] decoration-from-font underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))] hover:decoration-[hsl(var(--rust))]"
      {...props}
    />
  );
}

/**
 * UL — hanging rust diamond marker. The previous "3px wide rule" read
 * as a stray em-dash at body size; a tiny rotated square reads as a
 * glyph, not punctuation. Square is absolute, pulled into the margin.
 */
function Ul(props: UnorderedListProps): ReactElement {
  return (
    <ul
      className="atelier-body mt-[1em] mb-[1.5em] list-none space-y-[0.55em] pl-[1.35rem] text-[1.05rem] text-[hsl(var(--ink))]/90 leading-[1.65] [&>li]:relative [&>li]:before:absolute [&>li]:before:top-[0.66em] [&>li]:before:left-[-0.95rem] [&>li]:before:h-[5px] [&>li]:before:w-[5px] [&>li]:before:rotate-45 [&>li]:before:bg-[hsl(var(--rust))]"
      {...props}
    />
  );
}

/**
 * OL — tabular rust numerals hanging in the margin. No full-stop
 * cluttering the list; the rust hue carries the counting.
 */
function Ol(props: OrderedListProps): ReactElement {
  return (
    <ol
      className="atelier-body atelier-numerals mt-[1em] mb-[1.5em] list-decimal space-y-[0.55em] pl-[2rem] text-[1.05rem] text-[hsl(var(--ink))]/90 leading-[1.65] marker:font-medium marker:text-[hsl(var(--rust))]"
      {...props}
    />
  );
}

function Li(props: ListItemProps): ReactElement {
  return <li className="pl-1 [&>code]:text-[0.93em]" {...props} />;
}

/**
 * Blockquote — oversized rust open-quote glyph pulled into the margin,
 * Newsreader italic body. No left border (too utilitarian); the glyph
 * and italic do the work.
 */
function Blockquote(props: BlockquoteProps): ReactElement {
  return (
    <blockquote
      className="[&>p]:atelier-display relative my-10 pl-10 before:absolute before:top-[-0.15em] before:left-[-0.05em] before:font-[var(--font-display)] before:text-[4.5rem] before:text-[hsl(var(--rust))] before:leading-none before:content-['“'] [&>p]:mb-3 [&>p]:text-[1.2rem] [&>p]:text-[hsl(var(--ink))] [&>p]:italic [&>p]:leading-[1.45] [&>p]:last:mb-0"
      {...props}
    />
  );
}

/**
 * Hr — chapter break ornament. Small rust diamond centered between two
 * hairline ink rules. Feels deliberate, not arbitrary.
 */
function Hr(_props: HrProps): ReactElement {
  return (
    <div aria-hidden="true" className="my-14 flex items-center gap-5">
      <span className="h-px flex-1 bg-[hsl(var(--ink))]/15" />
      <span className="h-[6px] w-[6px] rotate-45 bg-[hsl(var(--rust))]" />
      <span className="h-px flex-1 bg-[hsl(var(--ink))]/15" />
    </div>
  );
}

/**
 * Inline code — tight rust underline, small ink background tint. Reads
 * as a distinct technical register without the "chunky chip" look.
 */
function Code(props: CodeProps): ReactElement {
  return (
    <code
      className="atelier-mono rounded-[2px] bg-[hsl(var(--ink))]/[0.055] px-[0.35em] py-[0.12em] text-[0.86em] text-[hsl(var(--ink))]"
      {...props}
    />
  );
}

/**
 * Pre (code block) — graphite codex panel with rust top bar and three
 * indicator dots. Monospace ink-on-paper inverted to paper-on-graphite.
 */
function Pre(props: PreProps): ReactElement {
  return (
    <div className="codex-panel my-8">
      <div
        aria-hidden="true"
        className="codex-panel__bar flex items-center gap-2"
      >
        <span className="codex-panel__dot" />
        <span className="codex-panel__dot" />
        <span className="codex-panel__dot" />
      </div>
      <pre
        className="atelier-mono overflow-x-auto px-5 py-4 text-[0.84rem] text-[hsl(var(--paper))] leading-[1.65] [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[hsl(var(--paper))]"
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
