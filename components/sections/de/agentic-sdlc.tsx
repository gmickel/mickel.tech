import Link from 'next/link';
import CourseSignup from '@/components/course-signup';
import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  { value: '10+', label: 'Teams ausgerollt', detail: 'Mittelstand B2B' },
  {
    value: '500+',
    label: 'Ingenieure befähigt',
    detail: 'Methodik + Tooling',
  },
  { value: '7+', label: 'Branchen', detail: 'Healthcare bis Finanz' },
] as const;

const stages = [
  {
    tag: 'PHASE 1',
    name: 'Fundament',
    timeline: 'Wochen 1-4',
    impact: '20-30%',
    impactLabel: 'Produktivitätsgewinn',
    items: [
      'Tooling-Rollout: IDE-Agenten, API-Keys, Security-Konfiguration',
      'Hands-on-Training: Pair Programming an echten Aufgaben, keine Slides',
      'Starter Kit: Rules, Guides, PR-Templates, Eval-Baselines',
      'Quick Wins: 2-3x bei individuellen Aufgaben, um Vertrauen aufzubauen',
    ],
  },
  {
    tag: 'PHASE 2',
    name: 'Methodenwechsel',
    timeline: 'Monate 2-6',
    impact: '2-3x',
    impactLabel: 'nachhaltiger Multiplikator',
    items: [
      'Automatisierte Reviews: AI reviewt 100% der PRs, Menschen fokussieren auf kritische Pfade',
      'Vernetzte Requirements: Specs fliessen in Agent-Tasks, Output fliesst zurück in Abnahme',
      'Observability-Flywheels: Agenten überwachen CI/CD, erstellen automatisch Bugs mit Root Cause',
      'Selbst-Iteration: Agent führt Tests aus, liest Fehler, fixt, wiederholt',
    ],
  },
] as const;

const maturityLevels = [
  {
    level: 'L0',
    name: 'Legacy',
    desc: 'Keine AI-Tools, alles manuell',
    impact: 'Baseline',
    active: false,
  },
  {
    level: 'L1',
    name: 'Assistent',
    desc: 'Copilot eingeführt, gleicher Prozess',
    impact: '10-15%',
    active: false,
  },
  {
    level: 'L2',
    name: 'Befähigt',
    desc: 'Starter Kit + Coaching, Gewohnheiten ändern sich',
    impact: '20-30%',
    active: false,
  },
  {
    level: 'L3',
    name: 'Nativ',
    desc: 'Spec-getrieben, agentische Workflows, Menschen orchestrieren',
    impact: '2-3x',
    active: false,
  },
  {
    level: 'L4',
    name: 'Fabrik',
    desc: 'Autonome Agenten liefern, Review-gesteuert',
    impact: '5-10x',
    active: true,
  },
] as const;

const assessmentPillars = [
  {
    tag: '01',
    name: 'Requirements & Planung',
    items: [
      'Geschriebene Specs mit Abnahmekriterien',
      'AI-generierte Implementierungspläne',
      'Duplikat-/Konflikterkennung im Backlog',
    ],
  },
  {
    tag: '02',
    name: 'Code-Generierung',
    items: [
      'Agent baut von Spec, nicht Autocomplete',
      'Standards durchgesetzt von AI (Lint, Architektur, Docs)',
      'AI-gestützte Legacy-Migration',
    ],
  },
  {
    tag: '03',
    name: 'Testing & QA',
    items: [
      'Tests automatisch aus Specs generiert',
      'AI reviewt 100% der PRs, hebt kritische Pfade hervor',
      'Agent iteriert selbst (ausführen, fehlschlagen, fixen, wiederholen)',
    ],
  },
  {
    tag: '04',
    name: 'CI/CD & Deployment',
    items: [
      'Pipeline as Code, Agenten lesen + modifizieren',
      'Feature Flags für progressiven Rollout',
      'DORA-Metriken getrackt + sichtbar',
    ],
  },
  {
    tag: '05',
    name: 'Monitoring & AIOps',
    items: [
      'Agenten überwachen Logs, erstellen automatisch Bugs',
      'Produktions-Incidents automatisch triagiert',
      'Nutzungsdaten fliessen zurück in Produktentscheidungen',
    ],
  },
] as const;

const pipeline = [
  {
    step: 'Planen',
    desc: 'Agent liest Spec + Code, mappt Abhängigkeiten, schreibt Subtasks',
  },
  { step: 'Design', desc: 'Mockups zu Component-Stubs mit Tokens + a11y' },
  { step: 'Bauen', desc: 'Multi-File-Edits, Tests, Docs, Format, Lint' },
  { step: 'Testen', desc: 'Gold-Set + Regressions-Harness, Flake-Alerts' },
  {
    step: 'Review',
    desc: 'AI-First-Pass, Risiko-Tiers, Mensch entscheidet Merge',
  },
  {
    step: 'Deploy',
    desc: 'Trunk + Flags, gestaffelter Rollout, Preflight-Checks',
  },
  { step: 'Betrieb', desc: 'Log-Korrelation, Hotfix-PRs, Kosten-Alerts' },
] as const;

const pillars = [
  {
    tag: '01',
    name: 'Brownfield-first',
    desc: 'Funktioniert auf bestehenden Codebasen, etablierten Teams und Legacy-Prozessen. Keine Greenfield-Demos.',
  },
  {
    tag: '02',
    name: 'Verifikation-first',
    desc: 'Eval-getriebenes Gating, Cross-Model-Review und deterministische Checks bevor etwas live geht.',
  },
  {
    tag: '03',
    name: 'Everything-as-Code',
    desc: 'Infra, Prompts, Evals, Guardrails und Agent-Skills, versioniert, nachvollziehbar und auditierbar.',
  },
  {
    tag: '04',
    name: 'Kultur, nicht nur Tools',
    desc: 'Teamstruktur, Prozessredesign und Governance, die nach dem Engagement bestehen bleibt.',
  },
  {
    tag: '05',
    name: 'Mandatsgetrieben',
    desc: 'Leadership-Backing ist der stärkste Erfolgsprädiktor. Freiwillige Adoption stagniert.',
  },
] as const;

const evidence = [
  {
    href: '/log/merchants-of-complexity-why-ai-finally-delivers-what-agile-promised',
    title: 'The Merchants of Complexity',
    tag: 'Warum Agile-Theater stirbt, wenn AI in den SDLC kommt',
  },
  {
    href: '/log/ralph-mode-why-ai-agents-should-forget',
    title: 'Ralph Mode: Why Agents Should Forget',
    tag: 'Autonome Schleifen mit gesteuertem Gedächtnis',
  },
  {
    href: '/log/untrusted-actor-pattern-ralph-mode',
    title: 'The Untrusted Actor Pattern',
    tag: 'Cross-Model-Verifikation als Sicherheitsnetz',
  },
] as const;

export default function AgenticSdlc() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="agentic-sdlc"
    >
      {/* Subtle scan-line texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            KERNKOMPETENZ // AGENTIC SDLC
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="AGENTISCHES SOFTWARE ENGINEERING, DAS WIRKLICH FUNKTIONIERT"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Kein Tooling-Demo. Eine vollständige Methodik für
            Software-Entwicklung mit AI-Agenten -- Prozessredesign,
            Verifikationsmuster, Teamstruktur und Kulturwandel, der den Kontakt
            mit Brownfield-Codebasen, regulierten Branchen und echter
            organisatorischer Komplexität überlebt.
          </p>
        </div>

        {/* Asymmetric layout: proof strip + pillars */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: proof numbers -- oversized, vertical */}
          <div className="space-y-10 lg:col-span-4">
            {proofPoints.map((p) => (
              <div className="border-primary/30 border-l-2 pl-6" key={p.label}>
                <div className="font-bold font-mono text-5xl text-primary md:text-6xl">
                  {p.value}
                </div>
                <div className="mt-1 font-mono text-sm text-white uppercase tracking-wider">
                  {p.label}
                </div>
                <div className="font-mono text-muted-foreground text-xs">
                  {p.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Right: pillars + tooling + evidence */}
          <div className="space-y-12 lg:col-span-8">
            {/* Methodology pillars */}
            <div>
              <p className="mb-6 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                Methodik-Säulen
              </p>
              <div className="grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((p) => (
                  <div className="bg-black p-5" key={p.tag}>
                    <span className="font-mono text-[10px] text-primary">
                      {p.tag}
                    </span>
                    <h3 className="mt-1 font-bold text-white">{p.name}</h3>
                    <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tooling strip */}
            <div>
              <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                Open-Source-Tooling
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="group flex flex-1 items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
                  href="/apps/flow-next"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-bold font-mono text-primary text-sm">
                    FN
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-primary">
                      Flow-Next
                    </p>
                    <p className="font-mono text-muted-foreground text-xs">
                      Agent-Orchestrierungs-Plugin
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex flex-1 items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
                  href="/gmickel-bench"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-bold font-mono text-primary text-sm">
                    GB
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-primary">
                      gmickel-bench
                    </p>
                    <p className="font-mono text-muted-foreground text-xs">
                      Praxisnahe AI-Coding-Evals
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Evidence -- blog links */}
            <div>
              <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                Aus dem Log
              </p>
              <div className="space-y-2">
                {evidence.map((e) => (
                  <Link
                    className="group flex items-baseline justify-between gap-4 border-white/5 border-b py-3 transition-colors last:border-0 hover:border-primary/20"
                    href={e.href}
                    key={e.href}
                  >
                    <div>
                      <span className="font-medium text-sm text-white group-hover:text-primary">
                        {e.title}
                      </span>
                      <span className="ml-3 hidden font-mono text-muted-foreground text-xs sm:inline">
                        {e.tag}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-muted-foreground text-xs transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Two-Stage Rollout Model ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            ROLLOUT-MODELL
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Zwei-Phasen-Rollout
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Die meisten Unternehmen stoppen beim Tooling. Dort liegen noch 70%
            des Werts. Phase 1 beweist das Muster. Phase 2 verändert, wie das
            Team arbeitet.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {stages.map((s) => (
              <div
                className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-primary/40"
                key={s.tag}
              >
                {/* Glow bar top */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="font-bold font-mono text-primary text-xs tracking-[0.2em]">
                      {s.tag}
                    </span>
                    <h4 className="mt-1 font-bold text-2xl text-white">
                      {s.name}
                    </h4>
                    <span className="font-mono text-muted-foreground text-xs">
                      {s.timeline}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold font-mono text-3xl text-success">
                      {s.impact}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase">
                      {s.impactLabel}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      className="flex items-start gap-3 font-mono text-sm text-white/80"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/60"
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── L0-L4 Maturity Model ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            REIFEGRADMODELL
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            L0 bis L4
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Die meisten Unternehmen stehen bei L0-L1. Ich bringe Teams auf L4.
          </p>

          <div className="flex flex-col gap-px overflow-hidden border border-white/10 bg-white/10 md:flex-row">
            {maturityLevels.map((m) => (
              <div
                className={`flex-1 p-5 ${m.active ? 'border-primary/40 bg-primary/[0.06]' : 'bg-black'}`}
                key={m.level}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-bold font-mono text-lg ${m.active ? 'text-primary' : 'text-white/40'}`}
                  >
                    {m.level}
                  </span>
                  <span
                    className={`font-bold text-sm ${m.active ? 'text-white' : 'text-white/60'}`}
                  >
                    {m.name}
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                  {m.desc}
                </p>
                <div
                  className={`mt-3 font-bold font-mono text-xs ${m.active ? 'text-success' : 'text-white/30'}`}
                >
                  {m.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7-Step Pipeline ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            PIPELINE
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Von Planung bis Betrieb, Agenten bei jedem Schritt
          </h3>

          <div className="relative flex flex-col gap-px overflow-hidden border border-white/10 bg-white/10 md:flex-row">
            {pipeline.map((p, i) => (
              <div
                className="group relative flex-1 bg-black p-4 transition-colors hover:bg-primary/[0.04]"
                key={p.step}
              >
                <span className="font-mono text-[10px] text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-1 font-bold font-mono text-sm text-white">
                  {p.step}
                </h4>
                <p className="mt-1.5 text-muted-foreground text-xs leading-relaxed">
                  {p.desc}
                </p>
                {/* Arrow connector */}
                {i < pipeline.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="-right-1.5 -translate-y-1/2 absolute top-1/2 z-10 hidden font-mono text-primary/30 text-xs md:block"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 5 Assessment Pillars ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            DIAGNOSE
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            5-Säulen-Assessment
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Jedes Engagement startet mit einer Baseline. Jede Säule wird mit 1-5
            Sternen bewertet. Die meisten Teams landen bei 1-2.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {assessmentPillars.map((ap) => (
              <div className="bg-black p-5" key={ap.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {ap.tag}
                </span>
                <h4 className="mt-1 font-bold text-sm text-white">{ap.name}</h4>
                <ul className="mt-3 space-y-1.5">
                  {ap.items.map((item) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/40"
                      >
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Course signup CTA */}
        <div className="mt-16">
          <CourseSignup />
        </div>
      </div>
    </section>
  );
}
