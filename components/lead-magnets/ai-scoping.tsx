/**
 * Lead magnet #2 -- AI Engagement Scoping Guide.
 *
 * For CEOs / COOs / GMs / deal teams. How to scope an AI engagement so
 * it ships, not stalls. Process map first, tools second.
 *
 * Source content: vault playbooks (Selection Gates D1-D4, Maturity Model,
 * One-Pager) plus the productised offer ladder live on /ai-transformation.
 */

const FAILURE_PATTERNS = [
  {
    label: 'The vendor pitch',
    body: 'A vendor demo is gorgeous. The platform is real. You buy. Six months later there is a tab in the application no one opens. Pattern: tool was selected before the workflow was mapped.',
  },
  {
    label: 'The strategy paper',
    body: 'A consulting deck arrives with a 28-page AI strategy and a roadmap. It is well-written. Nothing ships from it. Pattern: strategy detached from process; no system actually instrumented.',
  },
  {
    label: 'The bottoms-up sprawl',
    body: 'Engineering picks up Cursor, marketing picks up a copywriting tool, sales picks up an SDR agent. Twelve subscriptions, no governance, no shared data. Pattern: no central capability function.',
  },
  {
    label: 'The board pressure pilot',
    body: '"We need to be doing something with AI by Q2." Pilot stood up to satisfy the board. KPIs unclear. Outcome: a thing exists; nobody can say if it worked. Pattern: governance ahead of clarity on what is being governed.',
  },
];

const GATES = [
  {
    code: 'D1',
    name: 'KPI clarity',
    body: 'Named, baselined, measurable KPIs the engagement is supposed to move. Examples: deflection rate, FCR, MTTR, gross profit per minute, NRR, ARPU, cycle time. If you cannot name the KPI in one sentence, defer the engagement.',
  },
  {
    code: 'D2',
    name: 'Reversible path',
    body: 'A defined rollout sequence: shadow → partial → full, with rollback plans at each step. AI work that cannot be rolled back without engineering heroics is high-risk; design the reversibility before the build.',
  },
  {
    code: 'D3',
    name: 'Data and stack access',
    body: 'APIs, keys, service accounts available within two weeks, or credible stubs that mirror real shape. Engagements that wait six weeks for a data pull lose momentum and shed sponsors.',
  },
  {
    code: 'D4',
    name: 'Sponsor and budget',
    body: 'A named executive sponsor with budget authority, not a project champion three layers down. KPI ownership at the same level. Without this, the engagement does not survive its first reprioritisation.',
  },
];

const OFFERS = [
  {
    n: '01',
    name: 'Strategy Session',
    when: '1 day, on-site or remote',
    price: 'CHF 3,000-5,000',
    body: 'Half- to full-day working session on one specific question, vendor selection, build-vs-buy, architecture review, "is this the right AI use case." Written notes and a clear next-step recommendation by end of day. Fee credited against any follow-on engagement within 90 days.',
  },
  {
    n: '02',
    name: 'Process Map + AI Opportunity Audit',
    when: '2-3 weeks fixed',
    price: 'CHF 15,000-25,000',
    body: 'Map workflows end-to-end. Score automation candidates by impact and feasibility. Propose 3-5 prioritised initiatives with ROI estimates and a 90-day plan. Board-ready report. The lowest-risk way to find out where AI actually pays for itself in your specific operations.',
  },
  {
    n: '03',
    name: 'AI System Build',
    when: '4-10 weeks fixed',
    price: 'CHF 40,000-150,000',
    body: 'Production deployment of one AI system class: operations agents, knowledge platform with verifiable retrieval, voice, sovereign or private LLM. Requirements through go-live with operations handover. Built for the day after the demo, not the demo.',
  },
  {
    n: '04',
    name: 'Fractional AI Lead',
    when: '1-2 days/week, monthly retainer',
    price: 'Quarterly minimum',
    body: 'Programme governance, vendor selection, hands-on architecture, internal capability building. For organisations that need senior AI leadership without making the full hire. Designed to make the team self-sufficient, not dependent; engagements end when the team owns the discipline.',
  },
];

export default function AiScopingPdf() {
  return (
    <>
      {/* ---- COVER ---- */}
      <section className="lm-page lm-cover">
        <div>
          <p className="lm-cover-top">Mickel Tech · Field Guide 02</p>
          <h1 className="lm-cover-title">
            AI Engagement
            <br />
            <span style={{ color: 'var(--rust)' }}>Scoping Guide</span>
          </h1>
        </div>
        <div>
          <p className="lm-cover-sub">
            How to scope an AI engagement so it actually ships, process map
            first, tool selection second, vendor pitch third or never.
          </p>
          <div style={{ height: '20mm' }} />
          <dl className="lm-cover-meta">
            <div>
              <dt>For</dt>
              <dd>CEOs, COOs, GMs, PE deal teams</dd>
            </div>
            <div>
              <dt>From</dt>
              <dd>Gordon Mickel · mickel.tech</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>AI systems & transformation · independent practice</dd>
            </div>
            <div>
              <dt>Use</dt>
              <dd>Decide whether an AI initiative is real or premature</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---- WHY MOST AI INITIATIVES STALL ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">01 / Why most AI initiatives stall</p>
        <h2 className="lm-h1">
          The pattern is not technical. It is procedural.
        </h2>

        <p className="lm-lead">
          AI initiatives that fail rarely fail because the model was wrong. They
          fail because the engagement was scoped against the wrong question,
          usually a tool or a vendor, instead of against a workflow, a
          constraint and a measurable outcome.
        </p>

        <p>
          Across operations, support, finance, sales and engineering, the four
          failure patterns below show up again and again. If your current AI
          initiative looks like one of them, the highest-ROI intervention is not
          a faster model, it is a re-scope.
        </p>

        <div style={{ marginTop: '6mm' }}>
          {FAILURE_PATTERNS.map((f) => (
            <div
              key={f.label}
              style={{
                borderLeft: '2pt solid var(--rust)',
                padding: '2mm 0 2mm 5mm',
                margin: '5mm 0',
              }}
            >
              <p
                className="lm-num"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13pt',
                  fontWeight: 500,
                  margin: '0 0 1.5mm 0',
                }}
              >
                {f.label}
              </p>
              <p style={{ margin: 0, fontSize: '10pt' }}>{f.body}</p>
            </div>
          ))}
        </div>

        <p className="lm-pullquote" style={{ marginTop: '6mm' }}>
          The right first question is never &quot;which AI tool should we
          buy.&quot; It is &quot;which workflow is most expensive, and which
          part of it is the bottleneck.&quot;
        </p>

        <p className="lm-foot">
          PAGE 1 / 12 · MICKEL TECH · AI ENGAGEMENT SCOPING GUIDE
        </p>
      </section>

      {/* ---- PROCESS MAP FIRST ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">02 / Process map first</p>
        <h2 className="lm-h1">Map the workflow before the tool.</h2>

        <p className="lm-lead">
          The cheapest, fastest way to surface real AI opportunities is to map
          the end-to-end workflow on a wall before any vendor enters the
          conversation. The map answers four questions in twenty minutes that no
          demo can answer in a week.
        </p>

        <h3 className="lm-h2">The four questions</h3>
        <ol>
          <li>
            <strong>Where does the data live?</strong> Which systems hold the
            inputs, where are they stale, who owns the writes. Answers determine
            whether an AI use case is even feasible inside the next two
            quarters.
          </li>
          <li>
            <strong>Where are the bottlenecks?</strong> The workflow has a
            slowest step, and that step is rarely where attention is currently
            going. AI work is highest-value when it dissolves the bottleneck,
            not when it accelerates a step that was already fast.
          </li>
          <li>
            <strong>What breaks at scale?</strong> If volume doubled tomorrow,
            which step is the first to crack? The brittleness map drives
            prioritisation.
          </li>
          <li>
            <strong>Where is the human glue?</strong> Every workflow has humans
            manually stitching together tools that should be connected. That
            glue is usually the strongest signal of where automation pays back
            fastest.
          </li>
        </ol>

        <div className="lm-rule" />

        <h3 className="lm-h3">Output of a process map</h3>
        <p>
          A workflow diagram (not a strategy deck) annotated with the three
          highest-value automation candidates, the data dependencies of each,
          the rough effort estimate, and the measurable KPI each would move.
          This is the input to scoping the actual engagement.
        </p>

        <p className="lm-foot">PAGE 2 / 12 · PROCESS MAP FIRST</p>
      </section>

      {/* ---- THE FOUR GATES ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">03 / The four gates</p>
        <h2 className="lm-h1">A go / no-go test before any AI engagement.</h2>

        <p className="lm-lead">
          Use these four selection gates before committing budget. An engagement
          that fails any one of them is not ready -- irrespective of how
          exciting the opportunity looks.
        </p>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Gate</th>
              <th>Name</th>
              <th>What pass looks like</th>
            </tr>
          </thead>
          <tbody>
            {GATES.map((g) => (
              <tr key={g.code}>
                <td className="lm-num" style={{ color: 'var(--rust)' }}>
                  {g.code}
                </td>
                <td>
                  <strong>{g.name}</strong>
                </td>
                <td>{g.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lm-rule" />

        <h3 className="lm-h3">Three caps that override good intentions</h3>
        <ul>
          <li>
            <strong>If the workflow is not stable</strong> (procedure changes
            monthly), defer AI work until it is. Automating a moving target
            burns budget without compounding.
          </li>
          <li>
            <strong>If governance is below 2/5</strong> (no audit trail, no
            residency commitments, no banned-intent ledger), fix that first. AI
            in production without governance is reputational debt accruing in
            the background.
          </li>
          <li>
            <strong>
              If the cycle time of the underlying organisation is quarterly
            </strong>
            , AI cannot fix that, it will only make the quarterly cycle produce
            more output. Address the cadence first or pair the AI work with a
            delivery-cadence change.
          </li>
        </ul>

        <p className="lm-foot">PAGE 3 / 12 · GATES</p>
      </section>

      {/* ---- SCOPE TO PRODUCTISED OFFERS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">04 / Scope to a productised offer</p>
        <h2 className="lm-h1">Four shapes engagements take.</h2>

        <p className="lm-lead">
          Most engagements fit one of four shapes. Picking the right shape early
          prevents the most common scoping failure, paying for a build before
          you have done the audit, or paying for an audit when a one-day
          strategy session would have answered the question.
        </p>

        {OFFERS.map((o) => (
          <div
            key={o.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '14mm 1fr 30mm',
              gap: '6mm',
              padding: '4mm 0',
              borderBottom: '0.5pt solid var(--rule)',
            }}
          >
            <div
              className="lm-num"
              style={{
                fontSize: '14pt',
                color: 'var(--rust)',
                fontWeight: 500,
              }}
            >
              {o.n}
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13pt',
                  fontWeight: 500,
                  margin: '0 0 1mm 0',
                }}
              >
                {o.name}
              </p>
              <p
                className="lm-mono"
                style={{ color: 'var(--ink-muted)', margin: '0 0 2mm 0' }}
              >
                {o.when}
              </p>
              <p style={{ margin: 0, fontSize: '10pt' }}>{o.body}</p>
            </div>
            <div
              className="lm-num"
              style={{
                fontSize: '11pt',
                fontWeight: 500,
                textAlign: 'right',
              }}
            >
              {o.price}
            </div>
          </div>
        ))}

        <p className="lm-foot">PAGE 4 / 12 · OFFERS</p>
      </section>

      {/* ---- DECISION TREE ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">05 / Decision tree</p>
        <h2 className="lm-h1">Which shape, when.</h2>

        <p className="lm-lead">
          A short decision tree. Read top-down. Stop at the first branch that
          fits.
        </p>

        <div style={{ marginTop: '6mm', fontSize: '10.5pt' }}>
          <p>
            <strong>Q1.</strong> Do you have one specific question (vendor
            selection, build-vs-buy, &quot;is this the right use case&quot;)
            that you can articulate in one sentence?
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>YES</strong>: book a Strategy Session. Get a defensible
            answer in a day.
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>NO</strong>: continue.
          </p>

          <div className="lm-rule" />

          <p>
            <strong>Q2.</strong> Do you know <em>which</em> workflow you want AI
            to address, with a baseline KPI you would expect it to move?
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>NO</strong>: book a Process Map + Audit. Two to three
            weeks. Identifies which 3-5 workflows actually move P&amp;L. Output
            drives every subsequent decision.
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>YES</strong>: continue.
          </p>

          <div className="lm-rule" />

          <p>
            <strong>Q3.</strong> Have all four selection gates (D1-D4 on page 3)
            been passed for the workflow you want to address?
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>NO</strong>: do not commit budget yet. The Process Map +
            Audit is still the right starting point, fix the gates as part of
            it.
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>YES</strong>: scope an AI System Build. Production
            deployment of one system class. Fixed-fee.
          </p>

          <div className="lm-rule" />

          <p>
            <strong>Q4.</strong> Do you need ongoing senior AI leadership for a
            portfolio of initiatives without making the full executive hire?
          </p>
          <p style={{ paddingLeft: '6mm' }}>
            → <strong>YES</strong>: Fractional AI Lead. Quarterly minimum.
            Designed to make the team self-sufficient, that is the test of
            whether it worked.
          </p>
        </div>

        <p className="lm-foot">PAGE 5 / 12 · DECISION TREE</p>
      </section>

      {/* ---- CONVERSATION TEMPLATE ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">06 / Intake conversation</p>
        <h2 className="lm-h1">Eight questions for the first call.</h2>

        <p className="lm-lead">
          A discovery call goes better when both sides have done twenty minutes
          of preparation. These are the questions I ask on every first call,
          answers in advance compress the call from discovery to scoping.
        </p>

        <ol>
          <li>
            <strong>What is the workflow you want AI to address?</strong> One
            paragraph. No jargon.
          </li>
          <li>
            <strong>What KPI would you expect AI to move?</strong> Name it.
            State the current baseline. State a target.
          </li>
          <li>
            <strong>Where does the underlying data live?</strong> Systems,
            owners, access posture, latency.
          </li>
          <li>
            <strong>What is the current process at the bottleneck?</strong> Who,
            how often, with what tools, in what time.
          </li>
          <li>
            <strong>What have you tried so far?</strong> Tools, vendors,
            internal pilots. What worked, what did not, why.
          </li>
          <li>
            <strong>Who is the executive sponsor?</strong> Title, budget
            authority, time available, what success looks like to them.
          </li>
          <li>
            <strong>What is the rollback plan if it does not work?</strong> How
            reversible is the deployment.
          </li>
          <li>
            <strong>What does &quot;done&quot; look like in 90 days?</strong>{' '}
            Concrete, observable, measurable.
          </li>
        </ol>

        <p className="lm-foot">PAGE 6 / 12 · INTAKE</p>
      </section>

      {/* ---- RED FLAGS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">07 / Red flags</p>
        <h2 className="lm-h1">When to walk, both sides.</h2>

        <p className="lm-lead">
          Some patterns mean the engagement should not proceed yet, or at all.
          From either side. Honest red flags save both parties three months of
          expensive disappointment.
        </p>

        <h3 className="lm-h3">From the buyer side</h3>
        <ul>
          <li>
            <strong>The advisor cannot say no.</strong> If the answer to every
            scoping question is &quot;yes, I can do that,&quot; scope is being
            padded. A good advisor declines work that is not a fit.
          </li>
          <li>
            <strong>The pitch leads with a tool.</strong> Tools are
            implementation, not strategy. If the first conversation is about a
            model or a platform, the workflow has not been mapped.
          </li>
          <li>
            <strong>No anti-retainer position.</strong> Engagements designed to
            make you self-sufficient are built differently from engagements
            designed to extend. Ask the question.
          </li>
          <li>
            <strong>No reversibility design.</strong> If the rollout has no
            rollback plan, the work is being scoped optimistically. Pause.
          </li>
        </ul>

        <h3 className="lm-h3">From the advisor side</h3>
        <ul>
          <li>
            <strong>No named sponsor.</strong> If the deal is brokered by
            someone three layers down with no executive air cover, the
            engagement does not survive its first reprioritisation.
          </li>
          <li>
            <strong>KPI cannot be named.</strong> If neither side can name the
            KPI in one sentence, the work cannot be measured. Stop.
          </li>
          <li>
            <strong>Workflow is in flux.</strong> Procedure changing monthly
            means automation will be obsolete on arrival.
          </li>
          <li>
            <strong>Adversarial scoping conversation.</strong>
            Negotiation is normal; adversarial framing in scoping is a preview
            of the engagement. If it is uncomfortable now it will not get
            easier.
          </li>
        </ul>

        <p className="lm-foot">PAGE 7 / 12 · RED FLAGS</p>
      </section>

      {/* ---- ROI ARITHMETIC ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">08 / ROI arithmetic</p>
        <h2 className="lm-h1">A defensible number for the board.</h2>

        <p className="lm-lead">
          A useful AI engagement should pay itself back inside four quarters in
          the worst case. If you cannot rough it on the back of an envelope, the
          work has not been scoped to a measurable outcome.
        </p>

        <h3 className="lm-h3">The arithmetic, in three lines</h3>
        <ol>
          <li>
            <strong>Baseline cost</strong> of the workflow today: hours × loaded
            cost × frequency, plus the loss when the bottleneck blocks
            downstream revenue or capacity.
          </li>
          <li>
            <strong>Realistic recovery</strong> after the AI work ships:
            commonly 30-60% of the baseline cost in the first 90 days, climbing
            as the system matures and adoption deepens.
          </li>
          <li>
            <strong>Engagement cost</strong> divided by recovered run-rate
            equals payback period. Anything below four quarters in the worst
            case clears the bar.
          </li>
        </ol>

        <h3 className="lm-h3">Two numbers worth tracking separately</h3>
        <ul>
          <li>
            <strong>Cost-out</strong>: hours and dollars no longer consumed by
            the old process.
          </li>
          <li>
            <strong>Capacity-up</strong>: revenue or output the
            previously-bottlenecked function can now produce. This is where the
            biggest second-order effect lives, features that were not on the
            roadmap because they were not viable at baseline cost.
          </li>
        </ul>

        <p className="lm-pullquote" style={{ marginTop: '6mm' }}>
          The engagements that compound do not just save cost. They unlock
          product surface that was previously uneconomic. Plan for that on the
          second-order effect, not just the first.
        </p>

        <p className="lm-foot">PAGE 8 / 12 · ROI</p>
      </section>

      {/* ---- GOVERNANCE ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">09 / Governance you actually need</p>
        <h2 className="lm-h1">Six things, not sixty.</h2>

        <p className="lm-lead">
          Most AI governance frameworks are written for boards that want to feel
          responsible. Six controls cover the operationally important ground;
          the rest is documentation theatre.
        </p>

        <ol>
          <li>
            <strong>Residency policy.</strong> Where data is allowed to travel.
            What stays on-prem or in your VPC. Sovereign inference for regulated
            workflows.
          </li>
          <li>
            <strong>Audit log.</strong> Every AI invocation logged with inputs,
            outputs, model, prompt version, user, time. Stored for the retention
            period your industry requires.
          </li>
          <li>
            <strong>Banned-intent ledger.</strong> What the system is not
            allowed to do. Reviewed quarterly.
          </li>
          <li>
            <strong>Eval suites and drift checks.</strong> Quality is measured
            continuously, not assessed at procurement.
          </li>
          <li>
            <strong>Rollback plan with SLO.</strong> 15 minutes to partial
            rollback, 60 minutes to full. Drilled, not assumed.
          </li>
          <li>
            <strong>Vendor and model review cadence.</strong> Quarterly. Models
            drift. Pricing changes. Better options emerge. Revisit on a
            calendar, not a crisis.
          </li>
        </ol>

        <p className="lm-foot">PAGE 9 / 12 · GOVERNANCE</p>
      </section>

      {/* ---- WHAT YOU GET ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">10 / Deliverable shapes</p>
        <h2 className="lm-h1">What lands at the end of each engagement.</h2>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Engagement</th>
              <th>What you get</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strategy Session</td>
              <td>
                Written notes from the working session, a defensible answer to
                your specific question, a one-page next-step recommendation,
                optional follow-up call within two weeks.
              </td>
            </tr>
            <tr>
              <td>Process Map + Audit</td>
              <td>
                Workflow map (annotated), 3-5 prioritised AI initiatives scored
                on impact and feasibility, ROI estimate per initiative, 90-day
                rollout plan, board-ready executive readout.
              </td>
            </tr>
            <tr>
              <td>AI System Build</td>
              <td>
                Production AI system live in your environment. Architecture
                documentation. Eval suite. Operations handover. Rollback
                drilled. Internal team trained on the system.
              </td>
            </tr>
            <tr>
              <td>Fractional AI Lead</td>
              <td>
                Programme governance, vendor / model selection, hands-on
                architecture, capability building. Monthly steering. Engagement
                designed to end when the team can run it without you.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="lm-foot">PAGE 10 / 12 · DELIVERABLES</p>
      </section>

      {/* ---- TYPICAL TRAJECTORY ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">11 / Typical trajectory</p>
        <h2 className="lm-h1">What the first six months look like.</h2>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Focus</th>
              <th>Expected output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lm-num">0</td>
              <td>Discovery + intake</td>
              <td>30-min call, fit decision, NDA, scope agreed.</td>
            </tr>
            <tr>
              <td className="lm-num">1</td>
              <td>Process map + audit</td>
              <td>Workflow mapped, opportunities scored, plan agreed.</td>
            </tr>
            <tr>
              <td className="lm-num">2</td>
              <td>Build kicks off</td>
              <td>
                Architecture set, integration plumbing in place, team onboarded.
              </td>
            </tr>
            <tr>
              <td className="lm-num">3</td>
              <td>Build continues</td>
              <td>
                System in shadow mode against real traffic, eval suite running.
              </td>
            </tr>
            <tr>
              <td className="lm-num">4</td>
              <td>Rollout</td>
              <td>
                Partial rollout (10-30% of volume), KPIs measured, rollback
                drilled.
              </td>
            </tr>
            <tr>
              <td className="lm-num">5</td>
              <td>Full rollout + handover</td>
              <td>
                Full traffic, operations team owns the system, governance live.
              </td>
            </tr>
            <tr>
              <td className="lm-num">6</td>
              <td>Steering or close</td>
              <td>
                Monthly steering for the next quarter, or engagement closes if
                the team can run it alone.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="lm-rule" />

        <p>
          The shape varies, a Process Map + Audit alone closes at Month 1; a
          Fractional Lead engagement runs continuously with quarterly review
          points. The trajectory above describes the typical end-to-end shape
          when the engagement starts at intake and runs through to a production
          system in operations.
        </p>

        <p className="lm-foot">PAGE 11 / 12 · TRAJECTORY</p>
      </section>

      {/* ---- CLOSING ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">12 / What next</p>
        <h2 className="lm-h1">Three ways to use this guide.</h2>

        <ol>
          <li>
            <strong>Run the gates and the decision tree internally.</strong> If
            the answer is clear, the guide has done its job.
          </li>
          <li>
            <strong>Bring me in for a Strategy Session</strong> on one specific
            question, vendor selection, build-vs-buy, architecture review. CHF
            3-5,000, full-day, written output. Credited against any follow-on
            engagement.
          </li>
          <li>
            <strong>Engage a Process Map + Audit</strong> if there is no single
            specific question yet, if what you need first is to see the workflow
            honestly and surface where AI actually pays back. CHF 15-25,000, 2-3
            weeks, board-ready output.
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
            On the call we map your highest-friction workflow, talk through what
            an AI system would actually do for you, and agree whether it is
            worth a process audit. No vendor pitch.
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
              <dd>mickel.tech/ai-transformation</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Binningen, CH · DE / EN</dd>
            </div>
          </dl>
        </div>

        <p className="lm-foot">
          PAGE 12 / 12 · MICKEL TECH · AI ENGAGEMENT SCOPING GUIDE
        </p>
      </section>
    </>
  );
}
