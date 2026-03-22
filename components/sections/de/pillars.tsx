import Link from 'next/link';
import type { ReactNode } from 'react';
import SectionTitle from '@/components/ui/section-title';

const pillars: Array<{
  tag: string;
  id: string;
  title: string;
  headline: string;
  body: ReactNode;
  engagement: string;
  proof: string[];
  bullets: string[];
  href: string;
  linkLabel: string;
}> = [
  {
    tag: '01',
    id: 'sdlc',
    title: 'AI ENGINEERING',
    headline: 'Von Legacy-Prozessen zu autonomen Code-Fabriken',
    body: 'Ich transformiere, wie Ihre Teams Software mit AI-Agenten bauen. Kein Tool-Rollout. Ein kompletter Methodenwechsel von Ticket-getriebenen Zeremonien zu Spec-getriebener, agentengestützter Delivery. Zwei-Phasen-Rollout: zuerst Fundament (Tooling, Training, Quick Wins), dann Methodenwechsel (automatisierte Reviews, vernetzte Requirements, Observability-Flywheels). Bis hin zu L4: autonome Agenten liefern Features, Review-gesteuert, Menschen setzen Prioritäten.',
    engagement: '15-30 Tage Transformations-Lane',
    proof: [
      '10+ Teams transformiert',
      '500+ Ingenieure befähigt',
      '7+ Branchen',
    ],
    bullets: [
      'L0 bis L4 Reife: von keinen AI-Tools bis zu autonomen Code-Fabriken mit Review-gesteuerter Agent-Delivery',
      'Zwei-Phasen-Rollout: Phase 1 Fundament (20-30% Gewinn in Wochen), Phase 2 Methodenwechsel (2-3x nachhaltig)',
      'Everything-as-Code: Infra, Prompts, Evals, Guardrails und Agent-Skills, versioniert, nachvollziehbar, auditierbar',
      'Eval-getriebenes Gating, Cross-Model-Review und deterministische Checks bevor etwas live geht',
    ],
    href: '/de/sdlc',
    linkLabel: 'Zur vollständigen SDLC-Methodik',
  },
  {
    tag: '02',
    id: 'transform',
    title: 'AI SYSTEME',
    headline: 'AI-Systeme, die Ihr Geschäft betreiben, nicht nur gut aussehen',
    body: 'Jedes Engagement beginnt mit einem Prozess-Mapping, nicht mit einem Tool. Ich bilde ab, wie das Unternehmen tatsächlich funktioniert, wo die Daten liegen, wo die Engpässe sind, was bei Skalierung bricht, baue dann die Kontextschicht und deploye produktive Systeme darauf. Von Enterprise RAG und Wissensplattformen bis zu autonomen Agenten und privater LLM-Infrastruktur.',
    engagement: 'Prozess-Mapping + Blueprint + Produktivsystem',
    proof: [
      'AI-CLM-Plattform gegründet (DocIQ)',
      'Klinische AI geleitet (KISIM CIS)',
      '10+ Unternehmen transformiert',
    ],
    bullets: [
      'Prozess-first: Workflows End-to-End mappen, Automatisierungskandidaten identifizieren, nach Impact bewerten, bevor Agent-Code geschrieben wird',
      'Enterprise RAG und Wissenssysteme: sichere Retrieval, Embeddings, zitatbasierte Antworten über Ihre Dokumente',
      'Private AI und LLM-Infrastruktur: On-Prem oder VPC-Modelle, Data Governance, kein Vendor Lock-in',
      'AI-Agenten und autonome Systeme: Operations-Co-Pilots, Service-Desk-Automatisierung, Dokumentenreview, Voice Bots',
    ],
    href: '/de/ai-transformation',
    linkLabel: 'Zum Transformationsansatz',
  },
  {
    tag: '03',
    id: 'expert',
    title: 'GUTACHTEN & DUE DILIGENCE',
    headline: 'Wenn Software zur Rechts- oder Finanzfrage wird',
    body: (
      <>
        <a
          className="glow-link"
          href="https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html"
          rel="noreferrer"
          target="_blank"
        >
          ITDR-gelisteter technischer Experte
        </a>{' '}
        (Swiss IT Dispute Resolution Center) für unabhängige Analysen, wenn AI-
        und Software-Systeme zu rechtlichen, vertraglichen oder
        Investment-Fragen werden. 20+ Jahre Hands-on-Engineering bedeuten: Ich
        verfolge Ansprüche durch Code, Infrastruktur und Verträge, nicht nur
        durch ein Summary-Deck.
      </>
    ),
    engagement: 'Gutachten mit Live-Präsentation',
    proof: [
      'ITDR-gelisteter Experte',
      '20+ Jahre Engineering',
      'Healthcare, Legal, Finanz',
    ],
    bullets: [
      'Gutachten für Gerichte und Schiedsverfahren: forensische Code-Analyse, Vertrag-vs-Implementierung-Vergleich, klare Meinungen, die einer Kreuzbefragung standhalten',
      'AI- und Technologie-Due-Diligence für Investoren und Verwaltungsräte: Reifegrad-Assessments, Architektur-Reviews, Team- und Vendor-Risikoanalyse',
      'Unabhängige Projektbewertung: Quality Gates, KPIs, Abnahmekriterien, ein klares Ja/Nein, ob gelieferte Systeme die Pflichten erfüllen',
      'Regulierte Domänen: Produktionserfahrung in Healthcare, Legal, Finanz- und Public-Sector-Systemen, die Prüfungen standhalten',
    ],
    href: '/de/expert',
    linkLabel: 'Zum Expertenprofil',
  },
];

export default function Pillars() {
  return (
    <section
      className="relative border-white/5 border-y bg-secondary/20 px-6 py-24 md:px-20"
      id="systems"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <header className="max-w-2xl">
          <SectionTitle
            className="mb-4 font-bold text-4xl text-white"
            text="WAS ICH MACHE"
          />
          <p className="text-lg text-muted-foreground">
            Drei Bereiche tiefer Expertise. Jeder löst ein anderes Problem.
          </p>
        </header>

        <div className="space-y-8">
          {pillars.map((pillar, idx) => (
            <article
              className="group relative overflow-hidden border border-white/10 bg-background/50 transition-all duration-300 hover:border-primary/40"
              id={pillar.id}
              key={pillar.tag}
            >
              {/* Top glow line on hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              {/* Number watermark */}
              <div
                aria-hidden="true"
                className="absolute top-6 right-8 font-bold font-mono text-[120px] text-white/[0.03] leading-none transition-colors group-hover:text-primary/[0.06]"
              >
                {pillar.tag}
              </div>

              <div className="relative grid gap-8 p-8 md:grid-cols-12 md:p-12">
                {/* Left: headline + body + engagement */}
                <div className="space-y-6 md:col-span-7">
                  <div>
                    <span className="font-bold font-mono text-primary text-xs tracking-[0.2em]">
                      {pillar.title}
                    </span>
                    <h3 className="mt-2 font-bold text-2xl text-white leading-tight md:text-3xl">
                      {pillar.headline}
                    </h3>
                  </div>

                  <p className="max-w-xl text-muted-foreground leading-relaxed">
                    {pillar.body}
                  </p>

                  <div className="font-mono font-semibold text-primary text-xs uppercase tracking-[0.22em]">
                    Engagement: {pillar.engagement}
                  </div>
                </div>

                {/* Right: proof + bullets */}
                <div className="space-y-8 md:col-span-5">
                  {/* Proof points */}
                  <div className="flex flex-wrap gap-4">
                    {pillar.proof.map((p) => (
                      <div
                        className="border border-white/10 bg-white/[0.02] px-4 py-2"
                        key={p}
                      >
                        <span className="font-mono text-sm text-white">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Detail bullets */}
                  <ul className="space-y-3">
                    {pillar.bullets.map((bullet) => (
                      <li
                        className="flex items-start gap-3 font-mono text-sm text-white/80"
                        key={bullet}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 text-primary/60"
                        >
                          ›
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Deep-dive link */}
                  <Link
                    className="group/link mt-4 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-primary text-xs transition-all hover:border-primary hover:bg-primary/10"
                    href={pillar.href}
                  >
                    {pillar.linkLabel}
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom hover line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
