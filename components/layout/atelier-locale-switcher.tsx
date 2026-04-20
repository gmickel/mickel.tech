'use client';

import { usePathname } from 'next/navigation';
import SmartLink from '@/components/atelier/smart-link';

/**
 * Paths that have a mirrored `/de/...` route. Anything outside this set
 * (and the prefix checks below) falls back to `/de` home.
 */
const DE_EQUIVALENT_PATHS = new Set([
  '/',
  '/sdlc',
  '/expert',
  '/ai-transformation',
  '/case-studies',
  '/about',
  '/imprint',
  '/privacy',
  '/log',
  '/apps',
]);

const DE_EQUIVALENT_PREFIXES = ['/case-studies/', '/log/', '/apps/'];

const DE_PREFIX_RE = /^\/de/;

function hasDeEquivalent(path: string): boolean {
  if (DE_EQUIVALENT_PATHS.has(path)) {
    return true;
  }
  return DE_EQUIVALENT_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function toEnHref(path: string): string {
  if (!path.startsWith('/de')) {
    return path;
  }
  const stripped = path.replace(DE_PREFIX_RE, '');
  return stripped || '/';
}

function toDeHref(path: string): string {
  if (path.startsWith('/de')) {
    return path;
  }
  if (path === '/') {
    return '/de';
  }
  if (hasDeEquivalent(path)) {
    return `/de${path}`;
  }
  return '/de';
}

interface AtelierLocaleSwitcherProps {
  variant?: 'dark' | 'paper';
}

export default function AtelierLocaleSwitcher({
  variant = 'dark',
}: AtelierLocaleSwitcherProps) {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const enHref = toEnHref(pathname);
  const deHref = toDeHref(pathname);

  const mutedClass =
    variant === 'paper'
      ? 'text-[hsl(var(--ink))]/55 hover:text-[hsl(var(--rust))]'
      : 'text-[hsl(var(--paper))]/55 hover:text-[hsl(var(--rust))]';
  const activeClass = 'text-[hsl(var(--rust))]';
  const linkBase =
    'cursor-pointer transition-colors focus-visible:outline-none focus-visible:text-[hsl(var(--rust))]';

  return (
    <span className="atelier-eyebrow inline-flex items-center gap-1">
      <SmartLink
        aria-current={isDE ? undefined : 'true'}
        aria-label="Switch to English"
        className={`${linkBase} ${isDE ? mutedClass : activeClass}`}
        href={enHref}
      >
        EN
      </SmartLink>
      <span aria-hidden="true" className="opacity-30">
        /
      </span>
      <SmartLink
        aria-current={isDE ? 'true' : undefined}
        aria-label="Sprache auf Deutsch wechseln"
        className={`${linkBase} ${isDE ? activeClass : mutedClass}`}
        href={deHref}
      >
        DE
      </SmartLink>
    </span>
  );
}
