import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  { value: '10+', label: 'Companies transformed', detail: 'mid-market B2B' },
  {
    value: '2',
    label: 'AI platforms founded',
    detail: 'DocIQ CLM + KISIM Clinical AI',
  },
  {
    value: '20+',
    label: 'Years in production',
    detail: 'regulated industries',
  },
] as const;

const phases = [
  {
    tag: 'PHASE 1',
    name: 'Process mapping',
    timeline: 'Week 1-2',
    items: [
      'Map workflows end-to-end: where data lives, where bottlenecks are, what breaks at scale',
      'Identify automation candidates, score by impact and feasibility',
      'Current-state architecture review: data flows, integrations, vendor lock-in',
      'Pain-point heatmap with business impact quantification',
    ],
  },
  {
    tag: 'PHASE 2',
    name: 'Context layer',
    timeline: 'Week 2-4',
    items: [
      'Secure knowledge foundation: enterprise search, document retrieval, structured + unstructured data',
      'RAG architecture: embeddings, chunking strategy, retrieval evaluation, citation grounding',
      'Data governance: access controls, PII handling, audit trails, retention policies',
      'Integration layer: CRM enrichment, transcription pipelines, knowledge graph',
    ],
  },
  {
    tag: 'PHASE 3',
    name: 'Agentic systems',
    timeline: 'Week 4-8',
    items: [
      'Production agents built on the context layer: co-pilots, automation, autonomous workflows',
      'Eval harnesses: gold-set tests, regression suites, quality gates before deployment',
      'Observability: usage telemetry, cost tracking, latency budgets, drift detection',
      'Guardrails: safety filters, human-in-the-loop gates, rollback procedures',
    ],
  },
  {
    tag: 'PHASE 4',
    name: 'Scale and measure',
    timeline: 'Month 2-6',
    items: [
      'Roll proven patterns across departments and use cases',
      'Monthly steering with quantified ROI against baseline',
      'Knowledge transfer: your team owns and evolves the systems',
      'Vendor posture review: build vs buy, avoid lock-in, renegotiate where needed',
    ],
  },
] as const;

const valueThemes = [
  {
    tag: '01',
    name: 'Ship Faster',
    desc: 'AI agents in the SDLC: plan, code, review, test, operate. From weeks to days.',
    metric: 'Delivery velocity 2-3x',
  },
  {
    tag: '02',
    name: 'Serve Better',
    desc: 'Support co-pilots, smart triage, proactive alerts. L1 deflection, faster resolution.',
    metric: 'Ticket deflection 40-60%',
  },
  {
    tag: '03',
    name: 'Sell More',
    desc: 'Sales co-pilots, auto RFP/proposals, renewal signals, deal coaching in pipeline.',
    metric: 'RFP turnaround 30-50% faster',
  },
  {
    tag: '04',
    name: 'Run Leaner',
    desc: 'Workflow automation, AI search, bots-first handling. Eliminate swivel-chair processes.',
    metric: 'Back-office hours down 30-40%',
  },
  {
    tag: '05',
    name: 'Know More',
    desc: 'Context-aware AI grounded in real company data. Enterprise search, CRM hygiene, knowledge graph.',
    metric: '20-30% knowledge worker uplift',
  },
] as const;

const domains = [
  {
    tag: '01',
    name: 'Enterprise RAG & Knowledge Systems',
    desc: 'Semantic search, document retrieval and citation-grounded Q&A over your own data. Not a chatbot wrapper. Production retrieval with evaluation, observability and governance.',
    examples: [
      'Internal knowledge bases with role-based access controls',
      'Document review and comparison (legal, compliance, procurement)',
      'Customer support with grounded answers and source citations',
      'Research and intelligence platforms with structured ingestion',
    ],
    outcomes: [
      'First-contact resolution up',
      'Knowledge worker productivity +20-30%',
      'Audit-ready, citation-grounded answers',
    ],
  },
  {
    tag: '02',
    name: 'AI Agents & Autonomous Systems',
    desc: 'Agents that do real work: process documents, triage requests, generate reports, monitor systems. Eval-driven, observable, with human-in-the-loop where it matters.',
    examples: [
      'Operations co-pilots for back-office workflows',
      'Service-desk automation with escalation and HITL',
      'Document processing and extraction pipelines',
      'Monitoring agents that watch systems and file actionable reports',
    ],
    outcomes: [
      'Agent handle time down 30%',
      'L1 ticket deflection 40-60%',
      'Support cost reduction with CSAT maintained',
    ],
  },
  {
    tag: '03',
    name: 'Private AI & LLM Infrastructure',
    desc: 'On-prem or VPC model deployment for companies that cannot send data to third-party APIs. Architecture, model selection, fine-tuning and inference optimization. Vendor-neutral.',
    examples: [
      'Self-hosted LLM infrastructure (GPU fleet, inference servers)',
      'Model evaluation and selection for your domain and language',
      'Fine-tuning pipelines for domain-specific performance',
      'Hybrid architectures: local for sensitive data, cloud for general tasks',
    ],
    outcomes: [
      'Full data sovereignty, zero vendor lock-in',
      'Domain-specific model performance',
      'TCO reduction vs per-token API pricing at scale',
    ],
  },
  {
    tag: '04',
    name: 'Process Automation & Workflow AI',
    desc: 'AI-powered automation identified during process mapping. Not RPA. Intelligent systems that handle variability, exceptions and edge cases with supervision.',
    examples: [
      'Invoice processing with validation and anomaly detection',
      'RFQ/RFP generation and response automation',
      'Data enrichment, CRM hygiene, master-data reconciliation',
      'Voice bots and conversational interfaces with escalation',
    ],
    outcomes: [
      'Quote generation time down 60%',
      'Manual processing hours down 30-40%',
      'Error rate reduction, lead-to-cash cycle shortened',
    ],
  },
] as const;

const painPoints = [
  'AI pilots that never made it to production',
  'Data scattered across systems with no unified access layer',
  'Teams buying AI tools ad-hoc with no coherent strategy',
  'Vendor-locked to a single provider with no exit plan',
  'Manual processes that should have been automated years ago',
  'No way to measure whether AI investments are paying off',
  'Low AI maturity, no governance or policy in place',
  'Boards that cannot evaluate AI proposals (no shared framework)',
] as const;

const opportunityTriggers = [
  {
    area: 'Software Development',
    trigger: 'Engineering headcount >20 or significant tech debt',
  },
  {
    area: 'Data & Knowledge',
    trigger: 'Employee count >50 or scattered knowledge bases',
  },
  {
    area: 'Service & Support',
    trigger: '>1,000 tickets/month or L1 consuming expensive headcount',
  },
  {
    area: 'Sales & Growth',
    trigger: 'Sales team >10 reps or manual RFP/quoting process',
  },
  { area: 'Back Office', trigger: '>100 vendors or >500 invoices/month' },
] as const;

export default function AiTransformation() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="ai-transformation"
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
            TOTAL AI TRANSFORMATION
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="AI SYSTEMS THAT RUN YOUR BUSINESS"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Every engagement starts with a process map, not a tool. I map how
            the business actually runs, build the knowledge and data foundation,
            then deploy production AI systems on top. From enterprise RAG to
            autonomous agents to private LLM infrastructure.
          </p>
        </div>

        {/* ── Core Thesis ── */}
        <div className="mb-24 border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            CORE THESIS
          </p>
          <h3 className="mb-4 font-bold text-2xl text-white md:text-3xl">
            Context layer first, automation on top
          </h3>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Every AI use case requires clean, governed data. Build the secure
            knowledge and context foundation first — enterprise search,
            transcription, CRM enrichment, document retrieval — then deploy
            agentic workflows on top. This sequence means each new use case is
            incremental, not from-scratch. Skip the foundation and every agent
            you build is a standalone pilot that never scales.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
            {[
              'Data Foundations',
              'Knowledge Layer',
              'Agentic Workflows',
              'AI-Native Operations',
            ].map((step, i) => (
              <span className="flex items-center gap-2" key={step}>
                <span className="border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary">
                  {step}
                </span>
                {i < 3 && <span className="text-primary/40">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── Proof + Pain Points ── */}
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

          <div className="lg:col-span-8">
            <p className="mb-6 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Common pain points I solve
            </p>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {painPoints.map((pp) => (
                <div className="flex items-start gap-3 bg-black p-5" key={pp}>
                  <span aria-hidden="true" className="mt-1 text-alert">
                    ×
                  </span>
                  <span className="text-sm text-white/80">{pp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5 Value Themes ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            VALUE THEMES
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Five ways AI delivers
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Every transformation maps to one or more of these outcomes. The
            assessment identifies which ones move the needle for your business.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {valueThemes.map((vt) => (
              <div
                className="group bg-black p-5 transition-colors hover:bg-primary/[0.03]"
                key={vt.tag}
              >
                <span className="font-mono text-[10px] text-primary">
                  {vt.tag}
                </span>
                <h4 className="mt-1 font-bold text-sm text-white">{vt.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {vt.desc}
                </p>
                <div className="mt-3 font-bold font-mono text-success text-xs">
                  {vt.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4-Phase Approach ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            APPROACH
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Process-first, then systems
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            AI alone will not fix broken operations. Understand the process
            first, build the data foundation second, deploy agents third,
            measure everything.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div
                className="group relative border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-primary/40"
                key={phase.tag}
              >
                <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <span className="font-bold font-mono text-primary text-xs tracking-[0.2em]">
                  {phase.tag}
                </span>
                <h4 className="mt-1 font-bold text-white text-xl">
                  {phase.name}
                </h4>
                <span className="font-mono text-muted-foreground text-xs">
                  {phase.timeline}
                </span>

                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/50"
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

        {/* ── Opportunity Triage ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            TRIAGE
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Where AI pays off first
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Not every process is ready for AI. The assessment identifies where
            you are above the threshold and where the impact justifies the
            investment.
          </p>

          <div className="overflow-hidden border border-white/10">
            <div className="hidden grid-cols-2 bg-white/5 p-4 font-mono text-muted-foreground text-xs uppercase tracking-wider md:grid">
              <span>Opportunity area</span>
              <span>Trigger threshold</span>
            </div>
            {opportunityTriggers.map((ot) => (
              <div
                className="grid grid-cols-1 gap-1 border-white/5 border-t p-4 md:grid-cols-2 md:gap-4"
                key={ot.area}
              >
                <span className="font-bold font-mono text-sm text-white">
                  {ot.area}
                </span>
                <span className="text-muted-foreground text-sm">
                  {ot.trigger}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Domains ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            DOMAINS
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            What I build
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {domains.map((d) => (
              <div className="bg-black p-8" key={d.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {d.tag}
                </span>
                <h4 className="mt-1 font-bold text-lg text-white">{d.name}</h4>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {d.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {d.examples.map((ex) => (
                    <li
                      className="flex items-start gap-2 font-mono text-white/60 text-xs"
                      key={ex}
                    >
                      <span className="mt-0.5 text-primary/40">·</span>
                      {ex}
                    </li>
                  ))}
                </ul>
                {/* Outcomes */}
                <div className="mt-4 border-white/5 border-t pt-3">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    Target outcomes
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.outcomes.map((o) => (
                      <span
                        className="border border-success/20 bg-success/5 px-2 py-1 font-mono text-[11px] text-success"
                        key={o}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
