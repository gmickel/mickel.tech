'use client';

import { usePathname } from 'next/navigation';

const dePrefix = /^\/de/;

export default function AtelierLocaleSwitcher({
  variant = 'dark',
}: {
  variant?: 'dark' | 'paper';
}) {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const targetPath = isDE
    ? pathname.replace(dePrefix, '') || '/'
    : `/de${pathname}`;

  const baseStyle =
    variant === 'paper'
      ? 'text-[hsl(var(--ink))]/55 hover:text-[hsl(var(--rust))]'
      : 'text-[hsl(var(--paper))]/55 hover:text-[hsl(var(--rust))]';

  return (
    <a
      className={`atelier-eyebrow inline-flex items-center gap-1 transition-colors ${baseStyle}`}
      href={targetPath}
    >
      <span className="sr-only">
        {isDE ? 'Switch to English' : 'Sprache auf Deutsch wechseln'}
      </span>
      <span
        aria-hidden="true"
        className={isDE ? '' : 'text-[hsl(var(--rust))]'}
      >
        EN
      </span>
      <span aria-hidden="true" className="opacity-30">
        /
      </span>
      <span
        aria-hidden="true"
        className={isDE ? 'text-[hsl(var(--rust))]' : ''}
      >
        DE
      </span>
    </a>
  );
}
