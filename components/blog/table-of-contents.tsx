import type { ReactElement } from 'react';

interface TocItem {
  id: string;
  title: string;
  children?: TocItem[];
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps): ReactElement {
  return (
    <nav className="not-prose my-10 rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <p className="mb-4 font-mono text-[11px] text-emerald-400 uppercase tracking-widest">
        Contents
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="group flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              href={`#${item.id}`}
            >
              <span className="h-px w-4 bg-white/20 transition-all group-hover:w-6 group-hover:bg-emerald-400" />
              <span className="text-sm">{item.title}</span>
            </a>
            {item.children && item.children.length > 0 && (
              <ul className="mt-2 ml-6 space-y-1.5">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a
                      className="group flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
                      href={`#${child.id}`}
                    >
                      <span className="h-px w-2 bg-white/10 transition-all group-hover:w-4 group-hover:bg-cyan-400/50" />
                      <span className="text-xs">{child.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
