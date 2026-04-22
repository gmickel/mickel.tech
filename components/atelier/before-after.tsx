import type { ReactNode } from 'react';

interface Panel {
  caption: string;
  body: ReactNode;
  tone?: 'muted' | 'accent';
}

interface AtelierBeforeAfterProps {
  before: Panel;
  after: Panel;
}

const captionTone: Record<NonNullable<Panel['tone']>, string> = {
  muted: 'text-[hsl(var(--paper-muted))]',
  accent: 'text-[hsl(var(--rust))]',
};

export default function AtelierBeforeAfter({
  before,
  after,
}: AtelierBeforeAfterProps) {
  const beforeTone = before.tone ?? 'muted';
  const afterTone = after.tone ?? 'accent';
  return (
    <div className="grid gap-px bg-[hsl(var(--ink))]/10 md:grid-cols-2">
      <figure className="bg-[hsl(var(--paper))] p-5 md:p-7">
        <figcaption
          className={`atelier-mono text-[10px] uppercase tracking-[0.18em] ${captionTone[beforeTone]}`}
        >
          {before.caption}
        </figcaption>
        <div className="atelier-body mt-4 text-[0.92rem] text-[hsl(var(--ink))]/85 leading-[1.55]">
          {before.body}
        </div>
      </figure>
      <figure className="bg-[hsl(var(--paper))] p-5 md:p-7">
        <figcaption
          className={`atelier-mono text-[10px] uppercase tracking-[0.18em] ${captionTone[afterTone]}`}
        >
          {after.caption}
        </figcaption>
        <div className="atelier-body mt-4 text-[0.92rem] text-[hsl(var(--ink))]/85 leading-[1.55]">
          {after.body}
        </div>
      </figure>
    </div>
  );
}
