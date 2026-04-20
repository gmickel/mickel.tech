import Image from 'next/image';
import type { ReactElement } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  /** Optional figure number, e.g. "01" or "02.03". Rendered in rust mono. */
  figure?: string;
  priority?: boolean;
}

/**
 * Atelier figure block. Thin ink border on warm cream, rust hairline
 * top bar that rhymes with the codex code panel, mono caption with
 * optional figure numeral in the margin.
 */
export function BlogImage({
  src,
  alt,
  caption,
  figure,
  priority = false,
}: BlogImageProps): ReactElement {
  return (
    <figure className="not-prose my-10">
      <div className="relative overflow-hidden border border-[hsl(var(--ink))]/12 bg-[hsl(var(--graphite))]/[0.02]">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-[hsl(var(--rust))]"
        />
        <Image
          alt={alt}
          className="h-auto w-full"
          height={800}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          src={src}
          width={1400}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 flex items-baseline gap-3 border-[hsl(var(--ink))]/10 border-t pt-2.5">
          <span className="atelier-mono shrink-0 text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
            Fig.{figure ? ` ${figure}` : ''}
          </span>
          <span className="atelier-body text-[0.88rem] text-[hsl(var(--ink))]/70 italic leading-[1.45]">
            {caption}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
