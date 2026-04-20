import type { ReactElement } from 'react';

interface TocItem {
  id: string;
  title: string;
  children?: TocItem[];
}

interface TableOfContentsProps {
  items?: TocItem[];
}

export function TableOfContents({
  items = [],
}: TableOfContentsProps): ReactElement | null {
  if (!items.length) {
    return null;
  }
  return (
    <nav className="not-prose my-10 border-[hsl(var(--ink))]/15 border-y bg-[hsl(var(--paper))]/40 py-6 pr-6 pl-6 md:pl-8">
      <p className="atelier-eyebrow mb-5 text-[hsl(var(--rust))]">
        00 / Contents
      </p>
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              className="atelier-body group flex items-baseline gap-3 text-[hsl(var(--ink))]/85 transition-colors hover:text-[hsl(var(--rust))]"
              href={`#${item.id}`}
            >
              <span className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] tracking-[0.12em]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-3 bg-[hsl(var(--ink))]/25 transition-all group-hover:w-6 group-hover:bg-[hsl(var(--rust))]"
              />
              <span className="text-[0.98rem]">{item.title}</span>
            </a>
            {item.children && item.children.length > 0 && (
              <ol className="mt-2 ml-9 space-y-1.5">
                {item.children.map((child, j) => (
                  <li key={child.id}>
                    <a
                      className="atelier-body group flex items-baseline gap-3 text-[hsl(var(--ink))]/60 transition-colors hover:text-[hsl(var(--ink))]"
                      href={`#${child.id}`}
                    >
                      <span className="atelier-mono text-[9.5px] text-[hsl(var(--paper-muted))]/70 tracking-[0.12em]">
                        {String(i + 1).padStart(2, '0')}.
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-2 bg-[hsl(var(--ink))]/15 transition-all group-hover:w-4 group-hover:bg-[hsl(var(--rust))]"
                      />
                      <span className="text-[0.88rem]">{child.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
