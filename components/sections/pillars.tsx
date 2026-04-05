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
    headline: 'From legacy processes to autonomous code factories',
    body: 'I redesign how your teams build software with AI agents. Not a tooling rollout. A full methodology shift from ticket-driven ceremonies to spec-driven, agent-assisted delivery. Two-stage rollout: foundation first (tooling, training, quick wins), then methodology shift (automated reviews, connected requirements, observability flywheels). All the way to L4: autonomous agents ship features, review-gated, humans set priorities.',
    engagement: '15-30 day transformation lane',
    proof: ['10+ teams transformed', '500+ engineers enabled', '7+ industries'],
    bullets: [
      'L0 to L4 maturity: from no AI tools to autonomous code factories with review-gated agent delivery',
      'Two-stage rollout: Stage 1 foundation (20-30% gain in weeks), Stage 2 methodology shift (2-3x sustained)',
      'Everything-as-code: infra, prompts, evals, guardrails and agent skills — versioned, traced, auditable',
      'Eval-driven gating, cross-model review and deterministic checks before anything ships',
    ],
    href: '/sdlc',
    linkLabel: 'See full SDLC methodology',
  },
  {
    tag: '02',
    id: 'transform',
    title: 'AI SYSTEMS',
    headline: 'AI systems that run your business, not just demo well',
    body: 'Every engagement starts with a process map, not a tool. I map how the business actually runs — where the data lives, where the bottlenecks are, what breaks at scale — then build the context layer and deploy production systems on top. From enterprise RAG and knowledge platforms to autonomous agents and private LLM infrastructure.',
    engagement: 'Process map + blueprint + production system',
    proof: [
      'Founded AI CLM platform (DocIQ)',
      'Led clinical AI (KISIM CIS)',
      '10+ companies transformed',
    ],
    bullets: [
      'Process-first: map workflows end-to-end, identify automation candidates, score by impact — before writing agent code',
      'Enterprise RAG and knowledge systems: secure retrieval, embeddings, citation-grounded answers over your documents',
      'Private AI and LLM infrastructure: on-prem or VPC models, data governance, no vendor lock-in',
      'AI agents and autonomous systems: operations co-pilots, service-desk automation, document review, voice bots',
    ],
    href: '/ai-transformation',
    linkLabel: 'See transformation approach',
  },
  {
    tag: '03',
    id: 'expert',
    title: 'EXPERT & DUE DILIGENCE',
    headline: 'When software becomes a legal or financial question',
    body: (
      <>
        <a
          className="glow-link"
          href="https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html"
          rel="noreferrer"
          target="_blank"
        >
          ITDR-listed Technical Expert
        </a>{' '}
        (Swiss IT Dispute Resolution Center) providing independent analysis when
        AI and software systems become legal, contractual or investment
        questions. 20+ years of hands-on engineering means I can trace claims
        through code, infrastructure and contracts — not just read a summary
        deck.
      </>
    ),
    engagement: 'Expert opinion / Gutachten with live brief-back',
    proof: [
      'ITDR-listed expert',
      '20+ years engineering',
      'Healthcare, legal, finance',
    ],
    bullets: [
      'Expert reports (Gutachten) for courts and arbitration: forensic code analysis, contract-vs-implementation comparison, clear opinions that withstand cross-examination',
      'AI and technology due diligence for investors and boards: maturity assessments, architecture reviews, team and vendor risk analysis',
      'Independent project assessment: quality gates, KPIs, acceptance criteria — a yes/no view on whether delivered systems meet obligations',
      'Regulated domains: production experience in healthcare, legal, financial and public-sector systems designed to withstand scrutiny',
    ],
    href: '/expert',
    linkLabel: 'See expert profile',
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
            text="WHAT I DO"
          />
          <p className="text-lg text-muted-foreground">
            Three areas of deep expertise. Each one solves a different problem.
          </p>
        </header>

        <div className="space-y-8">
          {pillars.map((pillar) => (
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
