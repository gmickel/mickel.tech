'use client';

import { usePathname } from 'next/navigation';

/**
 * Subway-map handoff between the atelier (commercial) shell and the
 * legacy cyberpunk workshop shell. Mounted at the top of the legacy
 * Shell only — signals "you have crossed into the unfinished side"
 * with a return link to the atelier home.
 *
 * Mono font, faint colour, fixed at the very top above the legacy
 * header. Subtle on purpose: it should feel like a station name as
 * you cross a line, not a marketing banner.
 */
export default function WorkshopBanner() {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const homeHref = isDE ? '/de' : '/';

  const copy = isDE
    ? {
        prefix: '// werkstatt',
        descriptor: 'die unfertige seite · rohwerkzeuge · open notebooks',
        back: 'zurück zur praxis',
      }
    : {
        prefix: '// workshop',
        descriptor: 'the unfinished side · raw tools · open notebooks',
        back: 'back to the practice',
      };

  return (
    <aside
      aria-label={isDE ? 'Werkstatt-Hinweis' : 'Workshop notice'}
      className="fixed top-0 right-0 left-0 z-50 flex h-7 items-center justify-between border-primary/15 border-b bg-background/95 px-4 font-mono text-[10px] tracking-[0.18em] backdrop-blur-md md:px-6"
    >
      <div className="flex items-center gap-3 truncate">
        <span className="text-primary/70">{copy.prefix}</span>
        <span
          aria-hidden="true"
          className="hidden h-px w-4 bg-primary/30 sm:block"
        />
        <span className="hidden truncate text-muted-foreground/70 sm:inline">
          {copy.descriptor}
        </span>
      </div>
      <a
        className="group flex shrink-0 items-center gap-2 text-muted-foreground/80 transition-colors hover:text-primary"
        href={homeHref}
      >
        <span
          aria-hidden="true"
          className="group-hover:-translate-x-0.5 transition-transform"
        >
          ←
        </span>
        <span className="uppercase">{copy.back}</span>
      </a>
    </aside>
  );
}
