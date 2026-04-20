import { Link } from 'next-view-transitions';
import { slugifyTag } from '@/lib/tag-utils';

interface TagRowProps {
  tags: readonly string[];
  hrefPrefix?: string;
  className?: string;
}

/**
 * Mono tag row with rust hash marks. Used on /log listings + post headers.
 * If hrefPrefix given, tags link to `${hrefPrefix}/${slug}`; else plain.
 */
export default function TagRow({ tags, hrefPrefix, className }: TagRowProps) {
  if (!tags.length) {
    return null;
  }
  return (
    <ul
      className={[
        'atelier-mono flex flex-wrap items-center gap-x-4 gap-y-2 text-[10.5px] uppercase tracking-[0.14em]',
        className ?? '',
      ].join(' ')}
    >
      {tags.map((tag) => {
        const slug = slugifyTag(tag);
        const label = (
          <>
            <span aria-hidden="true" className="mr-1 text-[hsl(var(--rust))]">
              #
            </span>
            <span className="text-[hsl(var(--paper-muted))]">{tag}</span>
          </>
        );
        return (
          <li key={tag}>
            {hrefPrefix ? (
              <Link
                className="transition-colors hover:[&_span:last-child]:text-[hsl(var(--ink))]"
                href={`${hrefPrefix}/${slug}`}
              >
                {label}
              </Link>
            ) : (
              <span>{label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
