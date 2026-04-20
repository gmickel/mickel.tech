import type { ReactElement } from 'react';

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'dots';
  label?: string;
}

/**
 * Atelier section divider. Three variants, all paper-native:
 *
 * - `default`: hairline rules with a small rust diamond centered.
 *   The workhorse break between related sections.
 *
 * - `gradient`: a short rust rule fading to ink at both ends. Softer
 *   transition, good for breaking prose into airy movements.
 *
 * - `dots`: three rust diamonds descending in size, a typographic
 *   ornament for major chapter breaks within long posts.
 *
 * An optional `label` appears as a mono eyebrow above the ornament,
 * useful for "§ Part II" style movement marks.
 */
export function SectionDivider({
  variant = 'default',
  label,
}: SectionDividerProps): ReactElement {
  if (variant === 'gradient') {
    return (
      <div className="not-prose my-14 flex flex-col items-center gap-2">
        {label ? <EyebrowLabel label={label} /> : null}
        <div
          aria-hidden="true"
          className="h-px w-full max-w-[28rem] bg-gradient-to-r from-transparent via-[hsl(var(--rust))]/55 to-transparent"
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="not-prose my-14 flex flex-col items-center gap-3">
        {label ? <EyebrowLabel label={label} /> : null}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-[0.65rem]"
        >
          <span className="h-[4px] w-[4px] rotate-45 bg-[hsl(var(--rust))]/55" />
          <span className="h-[7px] w-[7px] rotate-45 bg-[hsl(var(--rust))]" />
          <span className="h-[4px] w-[4px] rotate-45 bg-[hsl(var(--rust))]/55" />
        </div>
      </div>
    );
  }

  return (
    <div className="not-prose my-14 flex flex-col items-center gap-3">
      {label ? <EyebrowLabel label={label} /> : null}
      <div
        aria-hidden="true"
        className="flex w-full max-w-[26rem] items-center gap-5"
      >
        <span className="h-px flex-1 bg-[hsl(var(--ink))]/18" />
        <span className="h-[6px] w-[6px] rotate-45 bg-[hsl(var(--rust))]" />
        <span className="h-px flex-1 bg-[hsl(var(--ink))]/18" />
      </div>
    </div>
  );
}

function EyebrowLabel({ label }: { label: string }): ReactElement {
  return (
    <span className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.22em]">
      {label}
    </span>
  );
}
