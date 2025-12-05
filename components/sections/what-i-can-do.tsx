const items = [
  {
    title: 'SHIP A REAL POC (30 DAYS)',
    summary:
      'Hands-on build that proves value with evals, telemetry and a rollback plan—not a slideware demo.',
    deliverables: [
      'Working agent/workflow on your data',
      'Gold-set evals + basic guardrails',
      'Runbook, handover, next release plan',
    ],
  },
  {
    title: 'FRACTIONAL CTO / AI PROGRAM LEAD',
    summary:
      'Own the hard calls with the board and teams: lanes, vendors, SLAs, risk and release discipline.',
    deliverables: [
      'Weekly exec brief + risk/decision log',
      'Release cadence / incident dashboards',
      'Vendor posture + contracts reviewed',
    ],
  },
  {
    title: 'AI SDLC UPGRADE',
    summary:
      'Replace “agile theatre” with lanes, eval gates and observability so AI changes ship daily and safely.',
    deliverables: [
      'Lanes & playbooks live in prod',
      'Eval gates in CI + rollback muscle',
      'Telemetry wired (cost, latency, win-rate)',
    ],
  },
  {
    title: 'PLATFORM & AGENT READINESS',
    summary:
      'Data, guardrails, observability and safety posture so agents don’t stall as pilots or break compliance.',
    deliverables: [
      'Context & retrieval blueprint',
      'Guardrails + abuse/safety checks',
      'Observability + incident drills',
    ],
  },
];

export default function WhatICanDo() {
  return (
    <section
      className="relative border-white/5 border-y bg-black/70 px-6 py-24 md:px-20"
      id="what-i-can-do"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="flex flex-col gap-3">
          <p className="font-mono text-primary text-[11px] tracking-[0.25em]">
            WHAT I CAN DO FOR YOU
          </p>
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            High-value moves that land fast and hold up under scrutiny
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            I take the ownership lane: design, build, evaluate, and leave you
            with a repeatable pattern—not a dependency.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <article
              className="group relative flex flex-col gap-4 overflow-hidden border border-white/10 bg-background/60 p-6 transition-all duration-300 hover:border-primary/60 hover:bg-background/90"
              key={item.title}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.08),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between">
                <p className="font-mono text-primary text-xs tracking-[0.2em]">
                  DELIVERABLE
                </p>
                <span className="font-mono text-muted-foreground text-[11px]">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>
              <h3 className="font-bold text-xl text-white leading-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.summary}
              </p>
              <ul className="space-y-2 font-mono text-sm text-white/80">
                {item.deliverables.map((line) => (
                  <li className="flex items-start gap-2" key={line}>
                    <span aria-hidden="true" className="mt-1 text-primary">
                      ▸
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            className="interactive inline-flex items-center justify-center bg-primary px-7 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="#contact"
          >
            [ BOOK A WORKING SESSION ]
          </a>
          <a
            className="interactive inline-flex items-center justify-center border border-white/20 px-7 py-3 font-mono text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="/log"
          >
            VIEW SYSTEM LOG
          </a>
        </div>
      </div>
    </section>
  );
}

