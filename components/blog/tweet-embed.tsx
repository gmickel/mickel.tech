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
    <div className="not-prose my-8">
      <a
        className="group block overflow-hidden rounded-lg border border-white/10 bg-zinc-900/50 transition-all hover:border-white/20 hover:bg-zinc-900/70"
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-700">
              {avatarUrl ? (
                <img
                  alt={displayName}
                  className="h-full w-full object-cover"
                  src={avatarUrl}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-medium text-sm text-white">
                  {displayName.charAt(0)}
                </div>
              )}
            </div>
            {/* Name & handle */}
            <div className="leading-tight">
              <p className="font-medium text-white">{displayName}</p>
              <p className="text-sm text-white/50">@{username}</p>
            </div>
          </div>

          {/* X logo */}
          <svg
            className="h-5 w-5 shrink-0 text-white/30 transition-colors group-hover:text-white/50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Content */}
        <div className="px-4 pt-3 pb-4">
          <p className="whitespace-pre-wrap text-[15px] text-white/90 leading-relaxed">
            {content}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-white/5 border-t bg-white/[0.02] px-4 py-3">
          {date && <span className="text-sm text-white/40">{date}</span>}

          {impressions && (
            <div className="ml-auto flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-white/40"
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
                className={`text-sm ${isViral ? 'font-medium text-white/70' : 'text-white/40'}`}
              >
                {formatNumber(impressions)}
              </span>
              {impressionsContext && (
                <span className="text-white/30 text-xs">
                  {impressionsContext}
                </span>
              )}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
