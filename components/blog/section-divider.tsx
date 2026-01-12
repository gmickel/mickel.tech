import type { ReactElement } from 'react';

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'dots';
}

export function SectionDivider({
  variant = 'default',
}: SectionDividerProps): ReactElement {
  if (variant === 'gradient') {
    return (
      <div className="not-prose my-12 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="not-prose my-12 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
    );
  }

  return (
    <div className="not-prose my-12 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />
      <span className="font-mono text-[10px] text-white/20">•</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}
