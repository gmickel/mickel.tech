// SINGLE SOURCE OF TRUTH for the homepage "Recent releases" rail.
// Hand-curated. Reorder the array to control display order.

export interface Release {
  /** Maps to /apps/[appSlug] for the internal link. */
  appSlug: string;
  name: string;
  /** Short italic tagline beneath the name. */
  taglineEN: string;
  taglineDE: string;
  /** Mono-typed version label (e.g. "v0.38.1", "1.3.4", "Apr 2026"). */
  version: string;
  /** ISO-8601 ship date. Used for the eyebrow date. */
  shippedAt: string;
  /** What's new in this release — 2 sentences max. */
  notesEN: string;
  notesDE: string;
  tags: readonly string[];
  image: string;
  imageKind: 'logo' | 'shot';
  /** External link (App Store, GitHub release, product site). */
  externalHref: string;
  externalLabelEN: string;
  externalLabelDE: string;
  /** Status accent: 'released' | 'preview' | 'production'. Drives chip color. */
  status: 'released' | 'preview' | 'production';
}

export const RELEASES: Release[] = [
  {
    appSlug: 'dettivo',
    name: 'Dettivo',
    taglineEN: 'Local-first dictation + meeting capture for Mac.',
    taglineDE: 'Lokale Diktier- und Meeting-App für Mac.',
    version: '1.3.4',
    shippedAt: '2026-04-23',
    notesEN:
      'Real-app screenshots throughout the marketing site, editorial colophon footer, sharpened benchmark copy (median 59 ms stop-to-insert). Soft-launched at dettivo.com — sales open April 2026.',
    notesDE:
      'Echte App-Screenshots quer durch die Marketing-Seite, redaktionelles Kolophon-Footer, geschärfte Benchmark-Zahlen (Median 59 ms Stop-zu-Einfügen). Soft-Launch unter dettivo.com — Verkauf ab April 2026.',
    tags: ['macOS', 'Dictation', 'Meetings'],
    image: '/dettivo/logo.svg',
    imageKind: 'logo',
    externalHref: 'https://dettivo.com',
    externalLabelEN: 'dettivo.com →',
    externalLabelDE: 'dettivo.com →',
    status: 'preview',
  },
  {
    appSlug: 'flow-next',
    name: 'Flow-Next',
    taglineEN: 'Zero-dep agent orchestration for Claude Code.',
    taglineDE: 'Agenten-Orchestrierung für Claude Code, ohne Abhängigkeiten.',
    version: 'v0.38.1',
    shippedAt: '2026-04-25',
    notesEN:
      'New /flow-next:capture skill and interview-style grill-me enhancements. Codex sync hotfixes plus the /flow-next:audit + memory-migrate workflows from 0.37 line.',
    notesDE:
      'Neue /flow-next:capture-Skill und Interview-Modus grill-me. Codex-Sync-Hotfixes plus /flow-next:audit + memory-migrate aus der 0.37er-Linie.',
    tags: ['Claude Code', 'Plugin', 'Open Source'],
    image: '/flow/logo.svg',
    imageKind: 'logo',
    externalHref:
      'https://github.com/gmickel/gmickel-claude-marketplace/releases',
    externalLabelEN: 'GitHub releases →',
    externalLabelDE: 'GitHub-Releases →',
    status: 'released',
  },
  {
    appSlug: 'gno',
    name: 'GNO',
    taglineEN: 'Local search + hosted publishing for your second brain.',
    taglineDE: 'Lokale Suche + Hosted-Publishing für dein Zweitgehirn.',
    version: 'Apr 2026',
    shippedAt: '2026-04-24',
    notesEN:
      'Local-first encrypted publishing, an editorial reader pass (typography, tables, drop-cap), and append-to-space artifact uploads. Public benchmark command for the local hybrid search.',
    notesDE:
      'Lokal-first verschlüsseltes Publishing, redaktioneller Reader-Pass (Typographie, Tabellen, Drop-Cap) und Artefakt-Uploads in bestehende Spaces. Öffentliches Benchmark-Kommando für die lokale Hybrid-Suche.',
    tags: ['CLI', 'Search', 'Publishing'],
    image: '/gno/logo.svg',
    imageKind: 'logo',
    externalHref: 'https://gno.sh',
    externalLabelEN: 'gno.sh →',
    externalLabelDE: 'gno.sh →',
    status: 'released',
  },
];

export function getLatestReleases(limit = 3): Release[] {
  return [...RELEASES]
    .sort((a, b) => b.shippedAt.localeCompare(a.shippedAt))
    .slice(0, limit);
}
