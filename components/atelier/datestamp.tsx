interface DatestampProps {
  iso: string;
  /** Optional label prefix, e.g. 'FILED' / 'BUILT'. */
  prefix?: string;
  className?: string;
}

function format(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return iso;
  }
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
}

/**
 * Workbench logbook datestamp.
 * Renders as `[YYYY.MM.DD]` in JetBrains Mono, navy.
 */
export default function Datestamp({ iso, prefix, className }: DatestampProps) {
  const stamp = `[${format(iso)}]`;
  return (
    <span
      className={[
        'atelier-mono inline-flex items-baseline gap-2 text-[11px] text-[hsl(var(--navy))] tracking-[0.08em]',
        className ?? '',
      ].join(' ')}
    >
      {prefix ? (
        <span className="text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
          {prefix}
        </span>
      ) : null}
      <time dateTime={iso}>{stamp}</time>
    </span>
  );
}
