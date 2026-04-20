'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SystemError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="atelier-surface atelier-paper relative min-h-screen overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-24 pb-24 md:gap-8 md:px-10 md:pt-36 md:pb-36">
        <div className="col-span-12 md:col-span-3">
          <p className="atelier-eyebrow text-[hsl(var(--rust))]">00 / Halt</p>
          <span className="atelier-numerals mt-3 block font-medium text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] text-[hsl(var(--rust))] leading-none">
            500
          </span>
        </div>
        <div className="col-span-12 md:col-span-7">
          <p className="atelier-mono mb-4 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
            Press jammed
          </p>
          <h1 className="atelier-display font-medium text-[clamp(1.9rem,1.4rem+2vw,3rem)] text-[hsl(var(--ink))] leading-[1.05] tracking-[-0.02em]">
            Something seized up.
          </h1>
          <p className="atelier-body mt-5 max-w-[58ch] text-[1.05rem] text-[hsl(var(--ink))]/80 leading-[1.55]">
            The render threw before it finished. Try again — it might pass on
            the second pass. If it doesn't, drop me a line and I'll fix the
            plate.
          </p>
          {error.digest ? (
            <p className="atelier-mono mt-4 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Incident · {error.digest}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="group inline-flex items-center gap-2 border border-[hsl(var(--ink))] bg-[hsl(var(--ink))] px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--paper))] transition-colors hover:bg-[hsl(var(--rust))]"
              onClick={reset}
              type="button"
            >
              Retry
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>
            <a
              className="inline-flex items-center gap-2 border border-[hsl(var(--ink))]/25 bg-transparent px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--rust))] hover:text-[hsl(var(--rust))]"
              href="/"
            >
              Return home
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
