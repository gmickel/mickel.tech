import Image from 'next/image';
import type { ReactElement } from 'react';

interface TweetEmbedProps {
  username: string;
  displayName: string;
  avatarUrl?: string;
  content: string;
  tweetUrl: string;
  date?: string;
  impressions?: number;
  impressionsContext?: string;
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
}

/**
 * Atelier tweet card — paper cream with thin ink border, rust hairline
 * top bar, ink typography, and mono micro-metadata. Handles tweets
 * quoted inline within a field note.
 */
export function TweetEmbed({
  username,
  displayName,
  avatarUrl,
  content,
  tweetUrl,
  date,
  impressions,
  impressionsContext,
}: TweetEmbedProps): ReactElement {
  const isViral = impressions && impressions >= 100_000;

  return (
    <div className="not-prose my-10">
      <a
        className="group relative block overflow-hidden border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))]/50 transition-colors hover:border-[hsl(var(--rust))]/40 hover:bg-[hsl(var(--paper))]/80"
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-[hsl(var(--rust))]"
        />

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[hsl(var(--ink))]/15 bg-[hsl(var(--graphite))]/[0.06]">
              {avatarUrl ? (
                <Image
                  alt={displayName}
                  className="h-full w-full object-cover"
                  height={40}
                  src={avatarUrl}
                  unoptimized
                  width={40}
                />
              ) : (
                <div className="atelier-display flex h-full w-full items-center justify-center font-medium text-[1.1rem] text-[hsl(var(--ink))]">
                  {displayName.charAt(0)}
                </div>
              )}
            </div>
            <div className="leading-tight">
              <p className="atelier-body font-medium text-[0.95rem] text-[hsl(var(--ink))]">
                {displayName}
              </p>
              <p className="atelier-mono text-[11px] text-[hsl(var(--paper-muted))] tracking-[0.05em]">
                @{username}
              </p>
            </div>
          </div>

          <svg
            aria-hidden="true"
            className="h-[18px] w-[18px] shrink-0 text-[hsl(var(--ink))]/35 transition-colors group-hover:text-[hsl(var(--rust))]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5">
          <p className="atelier-body whitespace-pre-wrap text-[0.98rem] text-[hsl(var(--ink))]/90 leading-[1.6]">
            {content}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-[hsl(var(--ink))]/10 border-t bg-[hsl(var(--ink))]/[0.025] px-5 py-3">
          {date ? (
            <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              {date}
            </span>
          ) : (
            <span />
          )}

          {impressions ? (
            <div className="ml-auto flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-[14px] w-[14px] text-[hsl(var(--paper-muted))]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span
                className={`atelier-mono text-[11px] tracking-[0.08em] ${
                  isViral
                    ? 'text-[hsl(var(--rust))]'
                    : 'text-[hsl(var(--paper-muted))]'
                }`}
              >
                {formatNumber(impressions)}
              </span>
              {impressionsContext ? (
                <span className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))]/80 uppercase tracking-[0.16em]">
                  {impressionsContext}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </a>
    </div>
  );
}
