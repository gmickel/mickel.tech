import { Link } from 'next-view-transitions';
import AtelierShell from '@/components/layout/atelier-shell';

export default function NotFound() {
  return (
    <AtelierShell>
      <section className="atelier-paper relative">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-24 pb-24 md:gap-8 md:px-10 md:pt-36 md:pb-36">
          <div className="col-span-12 md:col-span-3">
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">
              00 / Missing
            </p>
            <span className="atelier-numerals mt-3 block font-medium text-[clamp(4rem,3rem+4vw,7rem)] text-[hsl(var(--rust))] leading-none">
              404
            </span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="atelier-mono mb-4 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Page not found
            </p>
            <h1 className="atelier-display font-medium text-[clamp(1.9rem,1.4rem+2vw,3rem)] text-[hsl(var(--ink))] leading-[1.05] tracking-[-0.02em]">
              This page isn't filed here.
            </h1>
            <p className="atelier-body mt-5 max-w-[60ch] text-[1.05rem] text-[hsl(var(--ink))]/80 leading-[1.55]">
              Either it was archived, or the link was never set. No harm done;
              the workshop is still open and the masthead is one click away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="group inline-flex items-center gap-2 border border-[hsl(var(--ink))] bg-[hsl(var(--ink))] px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--paper))] transition-colors hover:bg-[hsl(var(--rust))]"
                href="/"
              >
                Return to masthead
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                className="inline-flex items-center gap-2 border border-[hsl(var(--ink))]/25 bg-transparent px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--rust))] hover:text-[hsl(var(--rust))]"
                href="/log"
              >
                Read field notes
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <nav
              aria-label="Quick links"
              className="atelier-mono mt-10 flex flex-wrap gap-x-5 gap-y-2 border-[hsl(var(--ink))]/10 border-t pt-6 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]"
            >
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/sdlc"
              >
                Agentic PDLC
              </Link>
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/expert"
              >
                Independent expert
              </Link>
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/ai-transformation"
              >
                AI transformation
              </Link>
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/apps"
              >
                Workshop
              </Link>
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/#contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </AtelierShell>
  );
}
