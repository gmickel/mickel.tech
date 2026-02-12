// Server Component - static content with CSS animations for the static shell
import type { ReactNode } from 'react';
import SectionTitle from '@/components/ui/section-title';

const services: Array<{
  title: string;
  body: string | ReactNode;
  engagement: string;
  bullets: string[];
}> = [
  {
    title: 'AGENTIC SDLC & DELIVERY',
    body: 'I redesign how your teams build software with AI agents — not a tooling rollout, a full methodology shift. Process, verification, team structure and culture change that works on brownfield codebases and existing teams, not just greenfield demos. Already rolled out to 10+ teams across industries.',
    engagement:
      'Engagement: 15–30 day agentic SDLC lane. I teach your team and co-ship one bespoke AI lane on your stack that doubles or triples release velocity, then hand it back clean.',
    bullets: [
      'Replace agile ceremonies with AI-native plan–build–test–run: specs not stories, one-pizza pods not two-pizza squads, eval-driven gating not manual QA.',
      'Use focused lanes (2–4 people + agents) to prove the pattern with clear ownership, automated checks and practiced rollback, then scale across teams.',
      'Everything-as-code: infra, prompts, evals, guardrails and agent skills with full traceability and telemetry, so you see what changed, why, and what it did to KPIs.',
    ],
  },
  {
    title: 'AI PLATFORMS & AGENTIC SYSTEMS',
    body: 'Most "AI platforms" are just thin wrappers around a single model. I design real platforms and agents: unified context, clean data, evals, observability and safety so agents actually ship, don\'t stall as pilots, and map to real revenue, efficiency or risk outcomes.',
    engagement:
      'Engagement: 7-day production agent. Platform blueprint + one fully evaluated, production-grade agent deployed into your stack — shipped, not a slide.',
    bullets: [
      'Platform blueprints that combine context engineering, data pipelines, retrieval/RAG patterns, eval harnesses and observability into an everything-as-code stack.',
      'Concrete agents for your business: operations co-pilots, RFQ/RFP and quoting assistants, knowledge-base copilots, service-desk automation, document-review agents and voice bots—built on your platform, not as throwaway demos.',
      'Skills, tools, prompts, workflows and guardrails as versioned code with gold-set evals and telemetry so you can see which agents earn their keep and which should be retired.',
    ],
  },
  {
    title: 'STRATEGIC ADVISORY & FRACTIONAL CTO',
    body: 'For boards, CEOs, CTOs and PE investors who need a senior technical counterpart for AI and core software decisions. I join for a limited number of days per month to own the hard conversations about architecture, SDLC, teams and vendors until the internal organisation is ready.',
    engagement:
      'Engagement: 1–3 days per month as fractional CTO / AI program lead, aligned with board and release cadences.',
    bullets: [
      'Board- and C-level sparring on AI and technology roadmaps: where to place bets, where to say no, and how to turn experiments into an operating capability.',
      'Architecture and SDLC oversight: review lanes, platforms and major projects, define non-negotiable guardrails, and give clear go/no-go calls on big releases or rewrites.',
      'Org design and incentives: shape FDE-style squads, flow-focused rituals and metrics (DORA, NRR, cycle time) so teams are rewarded for outcomes, not ticket volume.',
      'Vendor and stack posture: build vs buy vs partner, residency and compliance constraints, and negotiations that keep you flexible instead of locked-in to the first glossy demo.',
    ],
  },
  {
    title: 'TECHNICAL EXPERT & DUE DILIGENCE',
    body: (
      <>
        <a
          className="glow-link"
          href="https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html"
          rel="noreferrer"
          target="_blank"
        >
          Listed Technical Expert at ITDR
        </a>{' '}
        (Swiss IT Dispute Resolution Center), providing independent analysis
        when software and AI systems become legal or financial questions instead
        of purely technical ones.
      </>
    ),
    engagement:
      'Engagement: written expert opinion / Gutachten with defined questions, evidence review and a live brief-back.',
    bullets: [
      'Expert work for disputes and arbitration: forensic code and system analysis in copyright/Open Source cases, comparison of implementations against contracts and specs, and clear written opinions that withstand cross-examination.',
      'Independent assessment of large IT projects: define and review quality gates, KPIs and acceptance criteria, and give a yes/no view on whether delivered systems meet contractual and technical obligations.',
      'AI & technology due diligence for investors and boards: AI maturity and readiness assessments, architecture and SDLC reviews, team and vendor risk analysis, and simple language recommendations you can act on.',
    ],
  },
];

export default function Services() {
  return (
    <section
      className="relative border-white/5 border-y bg-secondary/20 px-6 py-24 md:px-20"
      id="systems"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <header className="max-w-2xl">
          <SectionTitle
            className="mb-4 font-bold text-4xl text-white"
            text="WHAT I BUILD"
          />
          <p className="text-lg text-muted-foreground">
            Four ways I create value. Pick the one that hurts most right now.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <article
              className="group interactive fade-in slide-in-from-bottom-4 relative animate-in overflow-hidden border border-white/10 bg-background/50 fill-mode-both p-8 transition-all duration-300 hover:border-primary/50 hover:bg-background/80"
              key={`service-${service.title}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 p-4 font-bold font-mono text-4xl text-white/10 opacity-20 transition-colors group-hover:text-primary/20"
              >
                0{idx + 1}
              </div>

              <h3 className="mb-6 font-bold font-mono text-primary text-xl tracking-tight">
                {service.title}
              </h3>

              <p className="mb-8 min-h-[80px] text-muted-foreground leading-relaxed">
                {service.body}
              </p>

              <p className="mb-6 font-mono font-semibold text-primary text-xs uppercase tracking-[0.22em] md:text-sm">
                {service.engagement}
              </p>

              <ul
                aria-label={`${service.title} features`}
                className="space-y-3"
              >
                {service.bullets.map((bullet) => (
                  <li
                    className="flex items-start gap-3 font-mono text-sm text-white/80"
                    key={bullet}
                  >
                    <span aria-hidden="true" className="mt-1 text-primary">
                      ›
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
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
