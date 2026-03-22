import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  { value: 'ITDR', label: 'Listed Expert', detail: 'Swiss IT Dispute Resolution' },
  { value: '20+', label: 'Years engineering', detail: 'hands-on, not just advisory' },
  {
    value: '7+',
    label: 'Regulated industries',
    detail: 'healthcare, legal, finance, public sector',
  },
] as const;

const services = [
  {
    tag: '01',
    name: 'Expert Reports (Gutachten)',
    desc: 'Independent technical expert opinions for courts, arbitration tribunals and dispute resolution bodies. Structured analysis against defined questions with clear, defensible conclusions.',
    items: [
      'Forensic code and system analysis: trace claims through source code, infrastructure, logs and deployment history',
      'Contract-vs-implementation comparison: does the delivered system meet the contractual and technical specifications?',
      'Written opinions that withstand cross-examination: precise language, temporal anchoring, evidence-based conclusions',
      'Live brief-back to counsel, tribunal or board with Q&A',
    ],
  },
  {
    tag: '02',
    name: 'AI & Technology Due Diligence',
    desc: 'For investors, boards and acquirers who need a clear-eyed technical assessment before committing capital. Not a checkbox audit. A senior engineer who reads the code.',
    items: [
      'AI maturity and readiness: model quality, data governance, evaluation pipelines, production hardening',
      'Architecture review: scalability, security, technical debt, bus-factor risks',
      'SDLC and team assessment: delivery velocity, quality gates, process maturity (L0-L4)',
      'Vendor and stack risk: lock-in analysis, licensing exposure, migration complexity',
    ],
  },
  {
    tag: '03',
    name: 'Independent Project Assessment',
    desc: 'When a large IT project is off-track, over budget or heading for dispute. Independent assessment against contractual obligations, acceptance criteria and industry standards.',
    items: [
      'Quality gate review: are the defined milestones genuinely met or just signed off?',
      'KPI and SLA validation: do the delivered metrics match the contractual commitments?',
      'Acceptance testing: independent verification that the system does what was promised',
      'Clear yes/no recommendation with supporting evidence and risk assessment',
    ],
  },
  {
    tag: '04',
    name: 'Dispute Support & Arbitration',
    desc: 'Technical support throughout the dispute lifecycle. From initial case assessment to final testimony. Making complex technical material accessible to legal professionals and judges.',
    items: [
      'Copyright and Open Source analysis: licensing compliance, code provenance, attribution',
      'Fee and scope disputes: was the work performed, was it to specification, was the price reasonable?',
      'Platform and SaaS disputes: performance claims, uptime obligations, data handling',
      'Pre-dispute technical assessment: evaluate the strength of claims before committing to litigation',
    ],
  },
] as const;

const credentials: Array<{
  label: string;
  detail: string;
  href?: string;
}> = [
  {
    label: 'ITDR-Listed Technical Expert',
    detail: 'Swiss IT Dispute Resolution Center. Independent expert for ICT and AI system disputes.',
    href: 'https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html',
  },
  {
    label: 'Production AI in Regulated Domains',
    detail: 'Clinical AI for Swiss hospitals (KISIM CIS), AI-native contract management (DocIQ) used by enterprises and law firms.',
  },
  {
    label: 'OpenAI Red-Teaming Alumnus',
    detail: 'Model safety and abuse resilience evaluation for frontier AI systems.',
  },
  {
    label: 'Hands-On Engineering Background',
    detail: '20+ years building systems across healthcare, legal, banking, insurance, IoT, defence and public sector. I read the code, not just the summary.',
  },
];

const approach = [
  {
    step: '01',
    name: 'Scope & evidence',
    desc: 'Define the questions. Review contracts, specifications, code, infrastructure, logs, correspondence. Establish the evidence base.',
  },
  {
    step: '02',
    name: 'Technical analysis',
    desc: 'Hands-on investigation. Run the code, inspect the architecture, trace the claims through the system. No reliance on summaries.',
  },
  {
    step: '03',
    name: 'Written opinion',
    desc: 'Structured expert report (Gutachten) answering each defined question with evidence references, temporal anchoring and defensible conclusions.',
  },
  {
    step: '04',
    name: 'Brief-back & testimony',
    desc: 'Live presentation to counsel, tribunal or board. Prepared for cross-examination. Complex technical material made accessible.',
  },
] as const;

export default function TechnicalExpert() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="technical-expert"
    >
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
            TECHNICAL EXPERT &amp; DUE DILIGENCE
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="WHEN SOFTWARE BECOMES A LEGAL QUESTION"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Independent technical analysis for disputes, arbitration, due
            diligence and high-stakes project decisions. 20+ years of hands-on
            engineering means I can trace claims through code, infrastructure and
            contracts — not just read a summary deck.
          </p>
        </div>

        {/* Proof + Credentials */}
        <div className="grid gap-16 lg:grid-cols-12">
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

          <div className="space-y-6 lg:col-span-8">
            <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Credentials
            </p>
            {credentials.map((c) => (
              <div
                className="border-white/5 border-b pb-4 last:border-0"
                key={c.label}
              >
                <h4 className="font-bold text-sm text-white">
                  {c.href ? (
                    <a
                      className="glow-link"
                      href={c.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                </h4>
                <p className="mt-1 text-muted-foreground text-sm">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            APPROACH
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            From evidence to opinion
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {approach.map((a, i) => (
              <div
                className="group relative bg-black p-6 transition-colors hover:bg-primary/[0.03]"
                key={a.step}
              >
                <div className="mb-4 font-bold font-mono text-4xl text-primary/20 transition-colors group-hover:text-primary/40">
                  {a.step}
                </div>
                <h4 className="mb-2 font-bold font-mono text-sm text-white">
                  {a.name}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {a.desc}
                </p>
                {i < approach.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 font-mono text-primary/30 text-lg md:block"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            SERVICES
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Expert services
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((s) => (
              <div className="bg-black p-8" key={s.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {s.tag}
                </span>
                <h4 className="mt-1 font-bold text-lg text-white">
                  {s.name}
                </h4>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li
                      className="flex items-start gap-2 font-mono text-white/60 text-xs leading-relaxed"
                      key={item}
                    >
                      <span className="mt-0.5 text-primary/40">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 border-white/10 border-t pt-4 text-muted-foreground text-xs">
            // NOTE: EXPERT WORK IS CONFIDENTIAL. SPECIFIC CASES AND CLIENTS
            CANNOT BE DISCLOSED. REFERENCES AVAILABLE ON REQUEST TO COUNSEL.
          </p>
        </div>

        {/* ── Dispute Types ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            COVERAGE
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Types of disputes and assessments
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Making complex technical material accessible to legal professionals,
            judges and arbitrators. The expert report translates code, architecture
            and systems into clear, evidence-based conclusions.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Software delivery disputes',
                desc: 'Was the system delivered to specification? Does it meet contractual obligations and acceptance criteria?',
              },
              {
                name: 'Fee and scope disputes',
                desc: 'Was the work performed? Was it to specification? Was the price reasonable for what was delivered?',
              },
              {
                name: 'Copyright and Open Source',
                desc: 'Licensing compliance, code provenance, attribution. Is the codebase clean or does it carry license risk?',
              },
              {
                name: 'AI system disputes',
                desc: 'Model performance claims, data handling obligations, bias and fairness, EU AI Act compliance.',
              },
              {
                name: 'Platform and SaaS disputes',
                desc: 'Performance claims, uptime SLAs, data handling, migration obligations, vendor lock-in.',
              },
              {
                name: 'M&A technology diligence',
                desc: 'Pre-acquisition technical assessment: architecture, team, tech debt, AI maturity, vendor risk, IP cleanliness.',
              },
            ].map((dt) => (
              <div className="bg-black p-6" key={dt.name}>
                <h4 className="font-bold text-sm text-white">{dt.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {dt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Industry Experience ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            INDUSTRY EXPERIENCE
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Regulated domains, real systems
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Healthcare',
                detail: 'Clinical AI for Swiss hospitals, patient data pipelines, PII masking, medical device regulation',
              },
              {
                name: 'Legal & Compliance',
                detail: 'AI-native contract management, clause analysis, document review, legal copilots',
              },
              {
                name: 'Financial Services',
                detail: 'Banking, insurance, DeFi. Transaction systems, regulatory compliance, audit trails',
              },
              {
                name: 'Public Sector',
                detail: 'Defence, government IT, procurement systems. Security clearance, data sovereignty',
              },
            ].map((ind) => (
              <div className="bg-black p-6" key={ind.name}>
                <h4 className="font-bold text-sm text-white">{ind.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {ind.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Differentiator ── */}
        <div className="mt-24 border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            WHY ME
          </p>
          <h3 className="mb-4 font-bold text-2xl text-white md:text-3xl">
            I read the code, not just the summary
          </h3>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Most technical experts review documentation and interview
            stakeholders. I go further: I clone the repository, run the build
            pipeline, inspect the infrastructure, read the deployment logs and
            trace claims through actual code. 20+ years of shipping production
            systems means I know the difference between a system that works and
            one that passes a demo. That distinction matters when the opinion
            needs to withstand cross-examination.
          </p>
        </div>
      </div>
    </section>
  );
}
