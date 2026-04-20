/**
 * Lead magnet #1 -- PDLC Maturity Model L0-L4.
 *
 * For CTOs / VP Eng / PE operating partners. A self-assessment plus
 * ladder document showing where the engineering org sits, what each
 * level looks like, and what to do next.
 *
 * Source content drawn from:
 *  - vault: AI-Native SDLC One-Pager (L0-L4 model + 5 pillars + pipeline)
 *  - vault: GF AI Maturity Model & Actions
 *  - mickel.tech: components/sections/atelier/sdlc-maturity.tsx
 */

const RUNGS = [
  {
    num: 'L0',
    name: 'Legacy',
    body: 'No agentic tooling, no methodology change, ticket-driven delivery, manual everything. The cycle-time ceiling is wherever the slowest engineer happens to be.',
    impact: 'Baseline',
    impactNote: 'no AI uplift',
  },
  {
    num: 'L1',
    name: 'Assistant',
    body: 'Cursor, Claude Code, OpenAI Codex or similar in active use. Same process, faster typing. No methodology change, no measurement, no portfolio strategy. Productivity gains are real but uneven and uncaptured.',
    impact: '10-15%',
    impactNote: 'individual lift',
  },
  {
    num: 'L2',
    name: 'Foundation',
    body: 'Standard tooling, training and a baseline KPI framework deployed. Spec-first habits forming. First measurable cycle-time wins. Centralised guardrails for prompts and data. AI-assisted reviews and a documented methodology.',
    impact: '20-30%',
    impactNote: 'first 90 days',
  },
  {
    num: 'L3',
    name: 'Spec-driven',
    body: 'Agents drive most code production from specs. Cross-model review and eval gates enforce quality. Everything-as-code: prompts, evals, guardrails versioned. Lighthouse lanes for the most autonomous workflows.',
    impact: '2-3×',
    impactNote: 'sustained throughput',
  },
  {
    num: 'L4',
    name: 'Factory',
    body: 'Autonomous agents ship features end-to-end, review-gated. Humans set priorities; agents execute. Continuous evaluation flywheels feed observability back into specs. Engineering organisation reshaped around product / spec leadership.',
    impact: '5-10×',
    impactNote: 'review-gated agentic',
  },
] as const;

const PILLARS = [
  {
    num: '01',
    name: 'Requirements & Planning',
    questions: [
      'Written specs with acceptance criteria before coding starts.',
      'Agent generates implementation plan from spec (tasks, dependencies, risks).',
      'Agent reviews plan for gaps, conflicts, missing edge cases.',
      'Duplicate or conflicting requirements auto-detected across the backlog.',
      'Planning accuracy measured and fed back into the estimation model.',
    ],
  },
  {
    num: '02',
    name: 'Code Generation & Refactoring',
    questions: [
      'Agentic coding-tool adoption tracked across the engineering org.',
      'Agents build from spec, not just autocomplete.',
      'Standards enforced by AI: lint, architecture, docs, naming.',
      'Auto-generated documentation kept in sync with code changes.',
      'Codebase-drift prevention (spec vs implementation).',
      'Legacy migration assisted by spec-first agentic workflows.',
    ],
  },
  {
    num: '03',
    name: 'Testing & Quality',
    questions: [
      'Automated test coverage on every change.',
      'Tests auto-generated from specs and acceptance criteria.',
      'AI reviews 100% of PRs and surfaces critical paths for human review (10-20%).',
      'Automated vulnerability scanning on every commit.',
      'Agents self-iterate (run, fail, fix, re-run) on broken builds.',
      'AI-powered visual QA and end-to-end testing in the pipeline.',
    ],
  },
  {
    num: '04',
    name: 'CI/CD & Deployment',
    questions: [
      'Pipeline as code (not click-ops); agents can read and modify it.',
      'Agents trigger deploys, read failures, auto-fix and re-run.',
      'Feature flags for progressive rollout and instant rollback.',
      'Infrastructure as code; agents provision environments.',
      'Environment parity (dev = staging = prod).',
      'DORA metrics tracked and visible to the engineering org.',
    ],
  },
  {
    num: '05',
    name: 'Monitoring & Operations',
    questions: [
      'DORA metrics tracked: lead time, MTTR, deploy frequency, change-failure rate.',
      'Agents watch logs and errors, auto-file bugs with root cause.',
      'Production incidents auto-triaged and routed.',
      'Usage data feeds back into product decisions and feature proposals.',
      'Observability flywheel: monitor → detect → fix → learn → improve.',
      'Alert noise systematically reduced (signal vs noise).',
    ],
  },
] as const;

const PIPELINE = [
  {
    n: '1',
    label: 'Plan',
    body: 'Agent reads spec and code, flags ambiguities, maps dependencies, estimates, writes subtasks to your work-management system. Spec prompts are version-controlled.',
  },
  {
    n: '2',
    label: 'Design',
    body: 'Multimodal agent turns mockups into component stubs with design tokens and a11y fixes. Emits a written PLAN.md that humans review.',
  },
  {
    n: '3',
    label: 'Build',
    body: 'Agent edits multiple files, respects AGENTS.md conventions, adds tests and docs, runs format / lint. Best-of-N for risky diffs.',
  },
  {
    n: '4',
    label: 'Test',
    body: 'Agent generates and maintains tests. Gold-set + regression harness. Flake alerts. Drift checks weekly.',
  },
  {
    n: '5',
    label: 'Review',
    body: 'AI first-pass on P0/P1 + PII / secret / perf. Risk tiers (Low: auto, Medium: human + agent, High: two humans + security). Human owns the merge.',
  },
  {
    n: '6',
    label: 'Deploy',
    body: 'Trunk-based + flags. Staged rollout. CI rollback job. Pre-flight policy check (residency, secrets, observability hooks).',
  },
  {
    n: '7',
    label: 'Operate',
    body: 'Agent correlates logs and metrics back to commits. Proposes hotfix PRs. Drafts incident timeline. Cost and latency budget alerts.',
  },
] as const;

export default function PdlcMaturityPdf() {
  return (
    <>
      {/* ---- COVER ---- */}
      <section className="lm-page lm-cover">
        <div>
          <p className="lm-cover-top">Mickel Tech · Field Guide 01</p>
          <h1 className="lm-cover-title">
            PDLC Maturity Model
            <br />
            <span style={{ color: 'var(--rust)' }}>L0 → L4</span>
          </h1>
        </div>
        <div>
          <p className="lm-cover-sub">
            Where your engineering organisation sits today, and what each level
            looks like when the rest of the world has already moved to agentic
            delivery.
          </p>
          <div style={{ height: '20mm' }} />
          <dl className="lm-cover-meta">
            <div>
              <dt>For</dt>
              <dd>CTOs, VP Engineering, PE operating partners</dd>
            </div>
            <div>
              <dt>From</dt>
              <dd>Gordon Mickel · mickel.tech</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Agentic PDLC · Independent expert · AI systems</dd>
            </div>
            <div>
              <dt>Use</dt>
              <dd>Read, score yourself, share with the leadership team</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---- WHAT THIS IS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">01 / What this is</p>
        <h2 className="lm-h1">A maturity ladder, not a tooling list.</h2>

        <p className="lm-lead">
          Most engineering organisations are still running yesterday&apos;s
          methodology against agents that already outpace them. The first
          mistake is to mistake the symptom (slow delivery) for the cause (a
          methodology that pre-dates agents).
        </p>

        <p>
          This guide describes five levels of agentic PDLC maturity, L0 through
          L4, and what each one looks like in practice. It is deliberately
          short. Read it in twenty minutes, score yourself against the
          five-pillar self-assessment on page nine, and you have a defensible
          starting point for any conversation with your engineering leadership,
          your board or your operating partners.
        </p>

        <p>
          The model has been refined across multiple multi-product engineering
          organisations of 50-250+ engineers, in regulated and unregulated
          sectors. It is the same scoring framework used in paid PDLC
          diagnostics.
        </p>

        <div className="lm-rule" />

        <h3 className="lm-h3">Three things this guide does not promise</h3>
        <ol>
          <li>
            <strong>It does not tell you which tool to buy.</strong> Tools
            change every quarter. The methodology does not.
          </li>
          <li>
            <strong>It is not a sales document.</strong> If you can take this
            and run with it internally, that is a successful outcome.
          </li>
          <li>
            <strong>It does not promise a 10× overnight.</strong> L1 → L2 is 90
            days of disciplined work. L2 → L3 is the harder shift -- methodology
            and review architecture. L4 is a destination, not a starting point.
          </li>
        </ol>

        <div className="lm-rule" />

        <p className="lm-mono" style={{ color: 'var(--ink-muted)' }}>
          PAGE 1 / 14 · MICKEL TECH · PDLC MATURITY MODEL
        </p>
      </section>

      {/* ---- THE LADDER ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">02 / The ladder</p>
        <h2 className="lm-h1">Five levels, one direction.</h2>

        <p className="lm-lead">
          Most engineering organisations sit between L0 and L1. The interesting
          work begins at L2. All throughput numbers assume constant or better
          DORA change-failure rate; throughput without quality is a downgrade.
        </p>

        <div style={{ marginTop: '8mm' }}>
          {RUNGS.map((r) => (
            <div className="lm-rung" key={r.num}>
              <div className="lm-rung-num">{r.num}</div>
              <div>
                <p className="lm-rung-name">{r.name}</p>
                <p className="lm-rung-body">{r.body}</p>
              </div>
              <div className="lm-rung-impact">
                {r.impact}
                <small>{r.impactNote}</small>
              </div>
            </div>
          ))}
        </div>

        <p className="lm-foot">PAGE 2 / 14 · THE LADDER</p>
      </section>

      {/* ---- LEVEL DETAIL: L0 / L1 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">03 / Level detail · L0 and L1</p>
        <h2 className="lm-h1">Where most engineering orgs actually sit.</h2>

        <h3 className="lm-h2" style={{ marginTop: '4mm' }}>
          L0: Legacy
        </h3>
        <p>
          No agentic tooling. Code is hand-written, line by line, by humans.
          Reviews are slow and inconsistent. The pipeline is whatever someone
          built when the team was four people. Tickets drive the work; specs are
          an afterthought when they exist at all.
        </p>
        <p>
          <strong>You are here if:</strong> you cannot point to a single
          engineer using an agentic coding tool in production this week, or you
          can but your CI/CD pipeline does not run any agent. The baseline.
        </p>

        <h3 className="lm-h2">L1: Assistant</h3>
        <p>
          Engineers use Cursor, Claude Code, OpenAI Codex or similar
          opportunistically. Productivity gains are real but uneven. Some
          engineers swear by the tools, some are skeptical, some have stopped
          after the first frustrating session. There is no methodology, no
          metrics, no portfolio strategy. License management is wherever someone
          bought seats; prompt management is whatever each engineer keeps in a
          Notion page.
        </p>
        <p>
          <strong>You are here if:</strong> tools are in active use but you
          cannot attribute productivity uplift to them in numbers, and there is
          no central guidance on which tools to use, when, or how they fit
          together.
        </p>

        <p className="lm-pullquote" style={{ marginTop: '6mm' }}>
          The trap at L1 is concluding that &quot;AI does not work for us&quot;
          when what is failing is the absence of methodology, not the presence
          of agents.
        </p>

        <p className="lm-foot">PAGE 3 / 14 · L0 AND L1</p>
      </section>

      {/* ---- LEVEL DETAIL: L2 / L3 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">04 / Level detail · L2 and L3</p>
        <h2 className="lm-h1">The shift that actually compounds.</h2>

        <h3 className="lm-h2" style={{ marginTop: '4mm' }}>
          L2: Foundation
        </h3>
        <p>
          Standard tooling deployed across the engineering organisation.
          Internal playbooks. Prompt patterns. A code-review pattern that uses
          agents on first pass and humans on the high-leverage decisions.
          License management is centralised; model selection is documented;
          observability covers AI usage as well as application health. Cycle
          time and review time are baselined in week one and tracked monthly.
        </p>
        <p>
          <strong>You are here if:</strong> there is a documented methodology
          any new engineer can follow, AI usage is measured rather than felt,
          and the first measurable wins (20-30% throughput uplift) are visible
          inside 90 days.
        </p>

        <h3 className="lm-h2">L3: Spec-driven</h3>
        <p>
          Specs are the unit of work. Agents drive most code production from
          specs and other agents review their output before it reaches a human.
          Eval gates enforce quality on every meaningful change. Cross-model
          review catches single-model blind spots. An everything-as-code
          repository holds prompts, evals, guardrails and agent skills under
          version control. Lighthouse lanes deploy autonomously.
        </p>
        <p>
          <strong>You are here if:</strong> throughput is sustained at 2-3× the
          L2 baseline, agent-vs-human authorship ratio is tracked (and shifting
          toward agents), and the eval suite gates every merge.
        </p>

        <p className="lm-pullquote" style={{ marginTop: '6mm' }}>
          L1 → L2 is a 90-day disciplined rollout. L2 → L3 is a methodology
          shift that takes one to three months and changes how the engineering
          organisation thinks about its own work.
        </p>

        <p className="lm-foot">PAGE 4 / 14 · L2 AND L3</p>
      </section>

      {/* ---- LEVEL DETAIL: L4 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">05 / Level detail · L4</p>
        <h2 className="lm-h1">Where engineering becomes orchestration.</h2>

        <h3 className="lm-h2" style={{ marginTop: '4mm' }}>
          L4: Factory
        </h3>
        <p>
          Autonomous agents ship features end-to-end. Reviews are automated and
          gated, with humans pulled in only for highest-risk decisions. Most
          production code is reviewed (or written) by agents. The engineering
          organisation is reshaped around product and spec leadership rather
          than line-by-line implementation. Senior engineers spend their time on
          edge cases, judgement calls, agent supervision and product framing.
        </p>
        <p>
          <strong>You are here if:</strong> review gates run autonomously, most
          merges are agent-authored, your engineering org has shifted its hiring
          profile away from line implementers and toward spec-leads and
          reviewers, and the cost of producing the tenth feature in a sprint is
          materially lower than the cost of the first.
        </p>

        <h3 className="lm-h3">Counter-question for L4</h3>
        <p>
          The right question at L4 is not &quot;how do we get even faster?&quot;
          but &quot;what new product surface does this enable that was
          previously uneconomic?&quot; Most organisations underprice the
          second-order effect, features that were not on the roadmap because
          they were not viable at L0/L1 cost suddenly become obvious. Plan for
          that.
        </p>

        <div className="lm-rule" />

        <h3 className="lm-h3">A note on numbers</h3>
        <p>
          The percentages and multipliers in this model are operating ranges
          observed across multiple engineering organisations. Individual
          programmes vary. The spread within a level is often larger than the
          gap between levels, what matters is the direction of travel and the
          shape of the methodology, not the headline number.
        </p>

        <p className="lm-foot">PAGE 5 / 14 · L4</p>
      </section>

      {/* ---- ASSESSMENT INTRO ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">06 / Self-assessment</p>
        <h2 className="lm-h1">
          Five pillars. Five questions each. Twenty minutes.
        </h2>

        <p className="lm-lead">
          Score each statement as a star count (☐ = 0, ☑ = 1). Five statements
          per pillar; maximum five stars per pillar. The honest scoring is more
          valuable than the generous one.
        </p>

        <div className="lm-rule" />

        <table className="lm-table">
          <thead>
            <tr>
              <th>Average pillar score</th>
              <th>Maturity level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lm-num">&lt; 1.0</td>
              <td>L0: Legacy</td>
            </tr>
            <tr>
              <td className="lm-num">1.0-1.9</td>
              <td>L1: Assistant</td>
            </tr>
            <tr>
              <td className="lm-num">2.0-3.0</td>
              <td>L2: Foundation</td>
            </tr>
            <tr>
              <td className="lm-num">3.1-4.0</td>
              <td>L3: Spec-driven</td>
            </tr>
            <tr>
              <td className="lm-num">4.1-5.0</td>
              <td>L4: Factory</td>
            </tr>
          </tbody>
        </table>

        <h3 className="lm-h3">Three caps that override the average</h3>
        <ul>
          <li>
            <strong>If CI/CD pillar score is below 2:</strong> cap the overall
            result at L1. You cannot run agentic delivery on a pipeline that is
            click-ops or that does not roll back.
          </li>
          <li>
            <strong>If Monitoring pillar score is below 2:</strong> cap the
            overall result at L2. Without observability you cannot close the
            eval flywheel that L3 depends on.
          </li>
          <li>
            <strong>If Requirements & Planning pillar score is below 2:</strong>{' '}
            cap the overall result at L1. Specs are the unit of work at L2 and
            above; without them, agents have nothing to drive from.
          </li>
        </ul>

        <p className="lm-foot">PAGE 6 / 14 · SCORING</p>
      </section>

      {/* ---- PILLARS 1-2 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">07 / Pillars · 1 of 3</p>
        <h2 className="lm-h1">Requirements, Code.</h2>

        {PILLARS.slice(0, 2).map((p) => (
          <div className="lm-pillar" key={p.num}>
            <p className="lm-pillar-num">{p.num}</p>
            <h3 className="lm-pillar-name">{p.name}</h3>
            <ul className="lm-pillar-questions">
              {p.questions.map((q) => (
                <li key={q}>
                  <span aria-hidden="true" className="lm-pillar-stars">
                    ☐ ☐ ☐ ☐ ☐
                  </span>
                  <span className="lm-pillar-q">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="lm-foot">PAGE 7 / 14 · PILLARS</p>
      </section>

      {/* ---- PILLARS 3-4 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">08 / Pillars · 2 of 3</p>
        <h2 className="lm-h1">Testing, CI/CD.</h2>

        {PILLARS.slice(2, 4).map((p) => (
          <div className="lm-pillar" key={p.num}>
            <p className="lm-pillar-num">{p.num}</p>
            <h3 className="lm-pillar-name">{p.name}</h3>
            <ul className="lm-pillar-questions">
              {p.questions.map((q) => (
                <li key={q}>
                  <span aria-hidden="true" className="lm-pillar-stars">
                    ☐ ☐ ☐ ☐ ☐
                  </span>
                  <span className="lm-pillar-q">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="lm-foot">PAGE 8 / 14 · PILLARS</p>
      </section>

      {/* ---- PILLARS 5 ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">09 / Pillars · 3 of 3</p>
        <h2 className="lm-h1">Monitoring & Operations.</h2>

        {PILLARS.slice(4).map((p) => (
          <div className="lm-pillar" key={p.num}>
            <p className="lm-pillar-num">{p.num}</p>
            <h3 className="lm-pillar-name">{p.name}</h3>
            <ul className="lm-pillar-questions">
              {p.questions.map((q) => (
                <li key={q}>
                  <span aria-hidden="true" className="lm-pillar-stars">
                    ☐ ☐ ☐ ☐ ☐
                  </span>
                  <span className="lm-pillar-q">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lm-rule" />

        <h3 className="lm-h3">Now do this</h3>
        <ol>
          <li>Score each pillar honestly. Average the five.</li>
          <li>Apply the three caps from page six.</li>
          <li>Locate yourself on the L0-L4 ladder.</li>
          <li>
            Read the &quot;what good looks like&quot; pipeline on the next page
            against your weakest pillar.
          </li>
          <li>Pick one thing to change in the next 30 days, not five.</li>
        </ol>

        <p className="lm-foot">PAGE 9 / 14 · PILLARS</p>
      </section>

      {/* ---- WHAT GOOD LOOKS LIKE ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">10 / What good looks like</p>
        <h2 className="lm-h1">Seven steps with agents in every loop.</h2>

        <p className="lm-lead">
          The L3 reference pipeline. Agents touch every step; humans own the
          merge and the priorities.
        </p>

        <div style={{ marginTop: '6mm' }}>
          {PIPELINE.map((p) => (
            <div
              key={p.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '12mm 28mm 1fr',
                gap: '5mm',
                padding: '3.5mm 0',
                borderBottom: '0.5pt solid var(--rule)',
              }}
            >
              <div
                className="lm-num"
                style={{
                  fontSize: '14pt',
                  fontWeight: 500,
                  color: 'var(--rust)',
                }}
              >
                {p.n}
              </div>
              <div
                className="lm-num"
                style={{
                  fontSize: '12pt',
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}
              >
                {p.label}
              </div>
              <div style={{ fontSize: '10pt' }}>{p.body}</div>
            </div>
          ))}
        </div>

        <p className="lm-foot">PAGE 10 / 14 · PIPELINE</p>
      </section>

      {/* ---- ROLLOUT ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">11 / Rollout</p>
        <h2 className="lm-h1">Two stages, not a big bang.</h2>

        <p className="lm-lead">
          The methodology shift fails the same way every time when it is
          attempted as a single transformation programme. The alternative is a
          two-stage rollout that compounds.
        </p>

        <div className="lm-cols-2" style={{ marginTop: '6mm' }}>
          <div>
            <h3 className="lm-h3">Stage 1: Foundation (2-4 weeks)</h3>
            <ul>
              <li>
                Baseline metrics: cycle time, review time, deploy frequency,
                change-failure rate.
              </li>
              <li>
                Standard tooling deployed: editor stack, model selection,
                license management, prompt registry.
              </li>
              <li>
                One or two lighthouse lanes shipped end-to-end with the new
                methodology, alongside the team.
              </li>
              <li>Internal methodology playbook written.</li>
            </ul>
            <p className="lm-mono" style={{ color: 'var(--rust)' }}>
              OUTCOME · 20-30% measurable cycle-time reduction in the first 90
              days.
            </p>
          </div>
          <div>
            <h3 className="lm-h3">Stage 2: Methodology shift (1.5-3 months)</h3>
            <ul>
              <li>Eval-gated agentic delivery in production.</li>
              <li>Cross-model review pipeline.</li>
              <li>
                Everything-as-code repository for prompts, evals, guardrails,
                agent skills.
              </li>
              <li>
                Monthly steering until the team owns the system end-to-end.
              </li>
            </ul>
            <p className="lm-mono" style={{ color: 'var(--rust)' }}>
              OUTCOME · 2-3× sustained throughput. Engineering org reshaped
              around product / spec leadership.
            </p>
          </div>
        </div>

        <div className="lm-rule" style={{ marginTop: '8mm' }} />

        <h3 className="lm-h3">A common failure mode</h3>
        <p>
          Skipping Stage 1 and going straight to L3 / L4 patterns on a team that
          has not yet adopted spec-first habits or built the eval scaffolding.
          The result is theatre, agentic-looking PRs without the discipline
          underneath. The fastest way to L3 is the disciplined route through L2.
        </p>

        <p className="lm-foot">PAGE 11 / 14 · ROLLOUT</p>
      </section>

      {/* ---- METRICS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">12 / Metrics that matter</p>
        <h2 className="lm-h1">Numbers a board can argue with.</h2>

        <p className="lm-lead">
          Anecdote does not survive a board review. Baseline these in week one,
          report them monthly.
        </p>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Metric</th>
              <th>What it tells you</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delivery</td>
              <td>Lead time for changes</td>
              <td>Spec to production. Direct proxy for cycle time.</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>Deploy frequency</td>
              <td>Trunk health and rollback discipline.</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>Change-failure rate</td>
              <td>Quality of what you ship, not just speed.</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>MTTR (mean time to restore)</td>
              <td>Operational maturity.</td>
            </tr>
            <tr>
              <td>PDLC</td>
              <td>Spec quality score</td>
              <td>How often agent-generated plans need rewrites.</td>
            </tr>
            <tr>
              <td>PDLC</td>
              <td>Eval-gate pass rate</td>
              <td>How often agent output meets the bar on first pass.</td>
            </tr>
            <tr>
              <td>PDLC</td>
              <td>Agent : human authorship ratio</td>
              <td>Where the work is actually getting done.</td>
            </tr>
            <tr>
              <td>PDLC</td>
              <td>Observability → spec feedback latency</td>
              <td>How fast the flywheel closes.</td>
            </tr>
            <tr>
              <td>Adoption</td>
              <td>% PRs with AI assist</td>
              <td>Real adoption, not seat count.</td>
            </tr>
            <tr>
              <td>Quality</td>
              <td>Gold-set accuracy and drift delta</td>
              <td>Whether your evals are still meaningful.</td>
            </tr>
          </tbody>
        </table>

        <p className="lm-foot">PAGE 12 / 14 · METRICS</p>
      </section>

      {/* ---- FAILURE MODES ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">13 / Failure modes</p>
        <h2 className="lm-h1">Six places it usually breaks.</h2>

        <p className="lm-lead">
          Patterns that show up across multiple engagements. Worth checking
          against your own programme.
        </p>

        <ol>
          <li>
            <strong>Tool rollout, no methodology change.</strong> Cursor
            licenses bought, methodology untouched. The tools become an
            individual-productivity uplift (10-15%) rather than an org uplift.
            Stalls at L1.
          </li>
          <li>
            <strong>Specs treated as a documentation chore.</strong> Specs are
            the unit of work at L2+. If they are written after the code, the
            agent has nothing to drive from.
          </li>
          <li>
            <strong>No eval pipeline.</strong> Without evals, agent output
            quality is felt rather than measured. Agents drift, prompts rot, and
            there is no signal until production breaks.
          </li>
          <li>
            <strong>Single-model dependence.</strong> Cross-model review catches
            what a single model misses. Picking one frontier model and trusting
            it is the equivalent of code review by the same person who wrote the
            code.
          </li>
          <li>
            <strong>Review by humans on every change.</strong> At L3+ humans
            should review the high-risk 10-20%, not the routine 80%. Reviewing
            everything is the L1 trap dressed up as quality discipline.
          </li>
          <li>
            <strong>No observability flywheel.</strong> Production data should
            feed back into specs and evals. If it does not, you are running L1
            with extra steps.
          </li>
        </ol>

        <p className="lm-foot">PAGE 13 / 14 · FAILURE MODES</p>
      </section>

      {/* ---- CLOSING ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">14 / What next</p>
        <h2 className="lm-h1">Three ways to use this.</h2>

        <ol>
          <li>
            <strong>Score yourself and run with it.</strong> The model is yours
            to use internally. If the methodology shift makes sense and you have
            the bandwidth to drive it in-house, this guide plus the pipeline
            reference on page ten is enough to start.
          </li>
          <li>
            <strong>Score yourself and bring me in for the diagnostic.</strong>{' '}
            A two-week paid PDLC Diagnostic produces a defensible baseline, a
            90-day plan and an executive readout, using this same model. From
            CHF 15,000.
          </li>
          <li>
            <strong>Engage the full two-stage rollout.</strong> Foundation
            sprint (2-4 weeks) plus full methodology shift (1.5-3 months). For
            organisations treating PDLC as a strategic capability rather than a
            dev-tools refresh.
          </li>
        </ol>

        <div className="lm-cta">
          <p className="lm-eyebrow" style={{ color: 'hsl(42 32% 89% / 0.7)' }}>
            Engage
          </p>
          <h2 className="lm-h2">
            A 30-minute discovery call is the cheapest way in.
          </h2>
          <p style={{ marginTop: '4mm' }}>
            On the call we agree whether agentic PDLC is the right shape for
            your team, what an engagement looks like, and what the next step
            would be. No deck, no pre-work. If it is not a fit, I say so on the
            call.
          </p>
          <dl className="lm-cta-row">
            <div>
              <dt>Book</dt>
              <dd>cal.com/gmickel/discovery30</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>gordon@mickel.tech</dd>
            </div>
            <div>
              <dt>Read</dt>
              <dd>mickel.tech/sdlc</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Binningen, CH · DE / EN</dd>
            </div>
          </dl>
        </div>

        <p className="lm-foot">
          PAGE 14 / 14 · MICKEL TECH · PDLC MATURITY MODEL
        </p>
      </section>
    </>
  );
}
