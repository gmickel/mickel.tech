// Server Component - no 'use client' needed since this is static content
import SectionTitle from '@/components/ui/section-title';

const timeline = [
  {
    period: 'NOW',
    role: 'OPERATING PRINCIPAL, AI & TECH',
    company: 'GROWTHFACTORS (BU BREGAL UNTERNEHMERKAPITAL)',
    desc: 'Value-creation mandate for AI and technology across mid-market B2B portfolio companies across Europe: agentic SDLC rollouts to 10+ teams, platforms, agents and vendor posture.',
  },
  {
    period: 'PARALLEL',
    role: 'OWNER & PRINCIPAL ADVISOR',
    company: 'MICKEL TECH',
    desc: 'Independent AI & tech advisor to C-suites and investors on AI strategy, architecture, disputes and large IT decisions.',
  },
  {
    period: 'BEFORE',
    role: 'HEAD OF AI & ENGINEERING LEAD',
    company: 'CISTEC AG',
    desc: "Secured the C-suite mandate and led KISIM Clinical AI: clinical LLM platform, PII masking and evaluation pipelines for Switzerland's leading CIS.",
  },
  {
    period: 'EARLIER',
    role: 'FOUNDER, CEO & LEAD DEVELOPER',
    company: 'CONTRACT VAULT / DOCIQ',
    desc: 'Founded and built an AI-powered contract lifecycle management platform, raised seed funding and landed major enterprises including the Swiss Insurance Association (SVV).',
  },
  {
    period: 'LONGER ARC',
    role: 'SENIOR ENGINEERING & CTO ROLES',
    company: 'VARIOUS',
    desc: '20+ years shipping systems across hosting, e-commerce, banking, insurance, IoT, defence and public sector before specialising in AI platforms.',
  },
] as const;

const trustItems = [
  'Production AI in regulated domains: clinical AI for Swiss hospitals (KISIM) and an AI-native CLM platform used by enterprises and law firms.',
  'Operating Principal (AI & Tech) at GrowthFactors / BU Bregal Unternehmerkapital, running agentic SDLC and platform programmes across mid-market B2B companies across Europe.',
  'ITDR-listed Technical Expert for ICT and AI systems: independent expert reports for disputes, arbitration and large-project acceptance.',
  'Agentic SDLC methodology rolled out to 10+ teams and 500+ engineers — process, tooling and culture change, not just tool adoption. Everything-as-code with eval-driven gating.',
  'Hands-on architecture and advisory across healthcare, legal, finance, DeFi and public sector – used to navigating regulation and internal politics, not just code.',
  'OpenAI red-teaming network alumnus on model safety and abuse resilience.',
] as const;

export default function Chronology() {
  return (
    <section
      className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 pt-24 pb-32 md:grid-cols-2 md:px-20"
      id="expert"
    >
      {/* Left: Why Trust Me */}
      <div className="space-y-12">
        <SectionTitle
          className="font-bold text-4xl text-white"
          text="WHY PEOPLE TRUST ME WITH HARD PROBLEMS"
        />

        <ul
          aria-label="Trust credentials"
          className="space-y-6 font-mono text-muted-foreground text-sm"
        >
          {trustItems.map((item) => (
            <li className="flex items-start gap-4" key={item}>
              <div
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 bg-primary"
              />
              <p className="text-white/80">{item}</p>
            </li>
          ))}
        </ul>

        <p className="border-white/10 border-t pt-4 text-muted-foreground text-xs">
          // NOTE: MOST WORK IS CONFIDENTIAL. REFERENCES AVAILABLE ON REQUEST.
        </p>
      </div>

      {/* Right: Timeline */}
      <div className="relative space-y-8 border-white/10 border-l pl-8 md:pl-12">
        <h3 className="mb-8 font-bold font-mono text-lg">CHRONOLOGY</h3>

        {timeline.map((item) => (
          <article className="group relative" key={`timeline-${item.period}`}>
            {/* Dot on line */}
            <div
              aria-hidden="true"
              className="-left-[3.25rem] absolute top-2 h-2 w-2 rounded-full border border-white/50 bg-background transition-colors group-hover:border-primary group-hover:bg-primary"
            />

            <div className="mb-8 space-y-1">
              <div className="mb-1 font-mono text-primary text-xs">
                {item.period}
              </div>
              <h4 className="font-bold text-white">
                {item.role}{' '}
                <span className="text-muted-foreground">— {item.company}</span>
              </h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
