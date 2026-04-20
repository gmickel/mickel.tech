/**
 * Lead magnet #3 -- Expert Intake & Working with Counsel.
 *
 * For litigation counsel, in-house counsel, arbitration teams. How to
 * engage a Parteigutachter or Werkvertrags-Gutachter: intake, conflicts,
 * methodology, deliverables, fees.
 *
 */

const ROLES = [
  {
    code: 'I',
    title: 'Parteigutachten',
    sub: 'Independent technical opinion, instructed by counsel.',
    when: 'Civil litigation, commercial court matters, international arbitration.',
    body: 'When you need a defensible technical opinion that supports a specific legal theory while remaining honest enough to survive cross-examination. Independent in methodology, instructed by one party.',
    deliverable:
      'Written Gutachten (typically 30-80 pages, structured per Swiss / German convention: Auftrag, Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde). Filed under your firm cover. Oral readiness for hearings included.',
    fee: 'Time-and-materials at CHF day or hourly rates. Cap agreed up front.',
  },
  {
    code: 'II',
    title: 'Werkvertrags-Gutachten',
    sub: 'Independent acceptance expert, named by both parties.',
    when: 'Software procurement and works contracts where parties contractually designate an independent expert to assess delivery against specification. Quasi-arbitral function.',
    body: 'Both sides rely on the opinion. Methodology is committed in writing before delivery is reviewed. Pre-engagement Prüfschema developed transparently from the contract annexes.',
    deliverable:
      'Pre-engagement Prüfschema (test schema). Structured Abnahmeprüfung against the contractually defined criteria. Written Gutachten with Bewertungsmatrix. Optional Nachprüfung after Nachbesserungen.',
    fee: 'Pauschal fixed fee, split between procurer and supplier. Hearings only if requested.',
  },
  {
    code: 'III',
    title: 'AI / technology due diligence',
    sub: 'Independent technical assessment for capital decisions.',
    when: 'M&A buy-side or sell-side, primary investments, board-level risk reviews, post-acquisition value-creation diagnosis.',
    body: 'When the technical claim materially shifts valuation, integration cost or post-deal plan. Maturity scoring across architecture, team, ops, security, AI exposure, paired with a verification matrix against vendor representations.',
    deliverable:
      'Maturity scorecard (5 pillars). Verification matrix against vendor claims (typical 30-40 lines). IC-ready value-creation thesis or risk register. Working annex with evidence cross-references.',
    fee: 'Fixed-fee, 3-10 working days depending on scope. Often <1 week turnaround on follow-up DDs once a relationship is established.',
  },
];

const INTAKE_PACK = [
  {
    label: 'Matter type',
    body: 'Parteigutachten, Werkvertrags-Gutachten, AI / tech due diligence, or unsure.',
  },
  {
    label: 'Jurisdiction',
    body: 'Switzerland (cantonal + federal), Germany, Austria, EU. International arbitration if relevant.',
  },
  {
    label: 'Procedural posture',
    body: 'Litigation under way, pre-litigation, contract negotiation, arbitration, board-level review, deal due diligence.',
  },
  {
    label: 'Deadline',
    body: 'Hard procedural deadlines (Eingabe, Verhandlung, IC date), soft internal deadlines, "as soon as possible".',
  },
  {
    label: 'Subject matter',
    body: 'One-paragraph technical summary. What was built, by whom, against what specification, what the dispute or question is about.',
  },
  {
    label: 'Conflict declaration',
    body: 'Parties involved (named or anonymised), counterparty counsel, adverse parties, key witnesses where known.',
  },
  {
    label: 'Material to be reviewed',
    body: 'Contracts and annexes, source code repositories, infrastructure access, prior expert reports, party correspondence, witness statements.',
  },
  {
    label: 'Languages',
    body: 'Working language for the engagement (DE / EN). Filing language. Hearing language.',
  },
];

const NORMS = [
  {
    n: '1',
    title: 'Default NDA before any case material is shared.',
    body: 'Standard mutual NDA template available; happy to use yours.',
  },
  {
    n: '2',
    title:
      "Source code reviewed only in environments under your or your client's control.",
    body: 'No client material on third-party AI services without written consent.',
  },
  {
    n: '3',
    title: 'Working notes destroyed at engagement close.',
    body: 'Except where professional retention rules require otherwise.',
  },
  {
    n: '4',
    title: 'Documented prior-mandates list.',
    body: 'Maintained for at least seven years. Conflict checks run against active engagements and the prior-mandates list before every intake.',
  },
  {
    n: '5',
    title: 'Conflict-clean on opposing-party engagements.',
    body: 'Opposing-party engagements are declined where any reasonable conflict exists from a prior mandate.',
  },
  {
    n: '6',
    title: 'Filing under your firm cover.',
    body: 'Gutachten cover page, signature block and formal letterhead per your firm convention.',
  },
];

export default function ExpertIntakePdf() {
  return (
    <>
      {/* ---- COVER ---- */}
      <section className="lm-page lm-cover">
        <div>
          <p className="lm-cover-top">Mickel Tech · Field Guide 03</p>
          <h1 className="lm-cover-title">
            Expert Intake
            <br />
            <span style={{ color: 'var(--rust)' }}>Working with Counsel</span>
          </h1>
        </div>
        <div>
          <p className="lm-cover-sub">
            How to engage a Parteigutachter, a Werkvertrags-Gutachter, or an AI
            / tech due-diligence expert, what counsel needs to send, what gets
            delivered, what it costs.
          </p>
          <div style={{ height: '20mm' }} />
          <dl className="lm-cover-meta">
            <div>
              <dt>For</dt>
              <dd>Litigation counsel, in-house counsel, arbitration teams</dd>
            </div>
            <div>
              <dt>From</dt>
              <dd>Gordon Mickel · mickel.tech</dd>
            </div>
            <div>
              <dt>Listing</dt>
              <dd>ITDR (Institution for IT and Data Dispute Resolution)</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>DE / EN · CH, DE, AT, EU</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---- WHAT THIS IS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">01 / What this is</p>
        <h2 className="lm-h1">A short intake reference for counsel.</h2>

        <p className="lm-lead">
          This guide describes how to engage me as a technical expert, what each
          role type covers, what counsel needs to send for an efficient intake,
          and how the working relationship is structured.
        </p>

        <p>
          Twenty years of building production software in regulated
          environments. Listed Technical Expert at the Institution for IT and
          Data Dispute Resolution (ITDR). Engaged by counsel as Parteigutachter,
          by procurement parties as Werkvertrags-Gutachter, and by investors and
          boards for AI / technology due diligence. Bilingual (DE / EN)
          practice, primarily Switzerland and Germany, occasionally further
          afield by arrangement.
        </p>

        <h3 className="lm-h3">On role terminology</h3>
        <p>
          The mandate types I take are Parteigutachter (instructed by one
          party's counsel) and Werkvertrags-Gutachter (jointly named by both
          contracting parties as the acceptance expert). I am ITDR-listed and
          available for court or arbitral appointment via that route.
        </p>

        <p className="lm-foot">PAGE 1 / 12 · MICKEL TECH · EXPERT INTAKE</p>
      </section>

      {/* ---- THREE ROLES ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">02 / Three role types</p>
        <h2 className="lm-h1">Three legally distinct engagement shapes.</h2>

        <p className="lm-lead">
          The legal posture differs across the three role types, and the
          deliverable, fee structure and working norms follow from that. Pick
          the one closest to your matter, or write in unsure and we will scope
          the right shape on the intake call.
        </p>

        {ROLES.map((r) => (
          <div
            key={r.code}
            style={{
              borderTop: '1pt solid var(--rule)',
              padding: '5mm 0 4mm 0',
              marginTop: '4mm',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '14mm 1fr',
                gap: '5mm',
                alignItems: 'baseline',
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
                {r.code}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14pt',
                    fontWeight: 500,
                    margin: '0 0 1mm 0',
                  }}
                >
                  {r.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '11pt',
                    margin: '0 0 3mm 0',
                  }}
                >
                  {r.sub}
                </p>
                <p style={{ fontSize: '10pt', margin: '0 0 2mm 0' }}>
                  <strong>When used: </strong>
                  {r.when}
                </p>
                <p style={{ fontSize: '10pt', margin: '0 0 2mm 0' }}>
                  {r.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        <p className="lm-foot">PAGE 2 / 12 · ROLES</p>
      </section>

      {/* ---- DELIVERABLES PER ROLE ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">03 / What gets delivered</p>
        <h2 className="lm-h1">What you receive at the close of each role.</h2>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Deliverable</th>
              <th>Fee structure</th>
            </tr>
          </thead>
          <tbody>
            {ROLES.map((r) => (
              <tr key={r.code}>
                <td>
                  <strong>{r.title}</strong>
                </td>
                <td>{r.deliverable}</td>
                <td>{r.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lm-rule" />

        <h3 className="lm-h3">Specific numbers</h3>
        <p>
          Rate cards and fee bands are shared on the intake call once the matter
          shape, jurisdiction and timeline are clear. A rough indication:
          Parteigutachten engagements typically run from CHF mid-five-figure to
          mid-six-figure depending on complexity; Werkvertrags-Gutachten
          Pauschal fees commonly sit in the low-to-mid five-figure range and are
          split between parties; AI / tech DD engagements are fixed-fee in the
          mid five-figure range for a typical IC-grade scope, with follow-up DDs
          faster and cheaper once the working relationship is established.
        </p>

        <p className="lm-foot">PAGE 3 / 12 · DELIVERABLES</p>
      </section>

      {/* ---- INTAKE PACK ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">04 / Intake pack</p>
        <h2 className="lm-h1">What to send for an efficient first call.</h2>

        <p className="lm-lead">
          Eight items, ideally in one short email or via the secure intake form
          on mickel.tech/expert. The more of these are in place, the faster the
          engagement letter follows.
        </p>

        {INTAKE_PACK.map((it, i) => (
          <div
            key={it.label}
            style={{
              display: 'grid',
              gridTemplateColumns: '12mm 1fr',
              gap: '4mm',
              padding: '3mm 0',
              borderBottom: '0.5pt solid var(--rule)',
              alignItems: 'baseline',
            }}
          >
            <div
              className="lm-mono"
              style={{
                color: 'var(--rust)',
                fontSize: '9pt',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12pt',
                  fontWeight: 500,
                  margin: '0 0 1mm 0',
                }}
              >
                {it.label}
              </p>
              <p style={{ fontSize: '10pt', margin: 0 }}>{it.body}</p>
            </div>
          </div>
        ))}

        <p className="lm-foot">PAGE 4 / 12 · INTAKE PACK</p>
      </section>

      {/* ---- CONFLICT DECLARATION ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">05 / Conflict declaration</p>
        <h2 className="lm-h1">
          A short, structured declaration before any review begins.
        </h2>

        <p className="lm-lead">
          A conflict declaration is the first item exchanged on every intake.
          The structure below covers the standard ground; the intake form on
          mickel.tech/expert collects the same information.
        </p>

        <h3 className="lm-h3">Parties</h3>
        <ul>
          <li>
            <strong>Instructing counsel</strong> (firm, instructing partner,
            named contact for the engagement).
          </li>
          <li>
            <strong>Client</strong> (entity, represented by, role in the
            matter).
          </li>
          <li>
            <strong>Counterparty</strong> (entity name, counterparty counsel
            where known).
          </li>
          <li>
            <strong>Adverse parties</strong> (other entities materially adverse,
            co-defendants, intervenors, regulators where relevant).
          </li>
          <li>
            <strong>Key fact witnesses</strong> (where already known and
            relevant, e.g. former CTO at the supplier, key contractor
            individuals).
          </li>
        </ul>

        <h3 className="lm-h3">Procedural posture</h3>
        <ul>
          <li>Court / tribunal / arbitral institution.</li>
          <li>Case reference where in litigation.</li>
          <li>
            Stage (pre-action, pleadings, evidence, hearing, post-hearing).
          </li>
          <li>Hard deadlines.</li>
        </ul>

        <h3 className="lm-h3">My side</h3>
        <p>
          On receipt I run the declaration against my active engagements and the
          documented prior-mandates list. If a conflict exists I decline and
          explain. If the engagement is clear I confirm by reply within 48 hours
          and we proceed to NDA + engagement letter.
        </p>

        <p className="lm-foot">PAGE 5 / 12 · CONFLICTS</p>
      </section>

      {/* ---- METHODOLOGY ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">06 / Methodology</p>
        <h2 className="lm-h1">How a Gutachten gets produced.</h2>

        <p className="lm-lead">
          A defensible Gutachten is built from facts on the record, traced back
          to artefacts that survive cross-examination. The methodology below is
          the same shape across Parteigutachten and Werkvertrags-Gutachten
          engagements; the question catalogue and depth differ.
        </p>

        <ol>
          <li>
            <strong>Auftrag clarification.</strong> First-call agreement on the
            questions the Gutachten must answer. Iterative refinement of the
            Fragenkatalog with counsel until the technical narrative is
            airtight.
          </li>
          <li>
            <strong>Sachverhalt assembly.</strong> Source repositories, live
            infrastructure, contract artefacts, party correspondence and prior
            expert reports collected, indexed and cross-referenced. Each finding
            traceable back to a specific artefact.
          </li>
          <li>
            <strong>Forensic technical analysis.</strong> Code review against
            specification. Infrastructure forensics where relevant. Soll-Ist
            comparison of the contract against what was actually delivered.
            Provenance and authorship analysis where authorship is in dispute.
          </li>
          <li>
            <strong>Würdigung.</strong> Findings filtered against the applicable
            technical and methodological standards. Each finding placed in the
            framework of the question it addresses. The Würdigung is where the
            technical narrative becomes a defensible legal-technical position.
          </li>
          <li>
            <strong>Kernbefunde + Gutachten draft.</strong> Top findings
            distilled into a Kernbefunde block at the front. Full Gutachten
            drafted in the Swiss / German convention structure: Auftrag,
            Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde.
          </li>
          <li>
            <strong>Counsel review and refinement.</strong> Two iteration cycles
            standard. Counsel checks legal posture, accuracy and tone. Technical
            content is mine; legal framing is collaborative.
          </li>
          <li>
            <strong>Filing.</strong> Gutachten signed and filed under your firm
            cover or my own depending on procedural requirement. Oral readiness
            for hearings included as standard.
          </li>
        </ol>

        <p className="lm-foot">PAGE 6 / 12 · METHODOLOGY</p>
      </section>

      {/* ---- DOMAINS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">07 / Domain expertise</p>
        <h2 className="lm-h1">
          Where my technical depth holds up under examination.
        </h2>

        <p className="lm-lead">
          Seven areas where I take matters confidently. For matters outside
          these, I say so on the first call and where useful refer to other
          ITDR-listed experts or specialist co-experts.
        </p>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>What I cover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Healthcare & clinical software</strong>
              </td>
              <td>
                Clinical information systems, regulated medical software,
                hospital deployments, data residency, multi-disciplinary teams.
                Multi-year operational experience inside the largest CIS in
                Switzerland.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Financial services</strong>
              </td>
              <td>
                Payment platforms, regtech, AML / fraud automation, fintech AI
                features. Production AI in regulated environments. Risk-aware
                vendor and architecture review.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Legal tech, IP & code forensics</strong>
              </td>
              <td>
                CLM, document review automation. Founded an AI-native CLM
                platform. Open-source license compliance, code-derivation
                analysis, copyright assessment for software disputes.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Public sector & procurement</strong>
              </td>
              <td>
                Software acceptance for cantonal and federal contracts, low-code
                platform delivery, ERP modernisations. Werkvertrags-Gutachten
                experience for joint procurer / supplier mandates.
              </td>
            </tr>
            <tr>
              <td>
                <strong>AI safety & frontier-model risk</strong>
              </td>
              <td>
                OpenAI Red Team Network alumnus. AI policy and abuse-resilience
                review, model-card analysis, safety governance for portfolios
                deploying frontier models.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sovereign + private AI</strong>
              </td>
              <td>
                Production experience deploying on-prem and VPC inference for
                regulated workflows. Custom-trained local NER, fine-tuned small
                language models, audit and provenance by default.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Mid-market software, PE-backed</strong>
              </td>
              <td>
                AI maturity assessments, agentic PDLC introduction,
                post-acquisition value-creation diagnosis. Daily exposure to
                portfolio software companies across DACH.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="lm-foot">PAGE 7 / 12 · DOMAINS</p>
      </section>

      {/* ---- WORKING NORMS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">08 / Working norms</p>
        <h2 className="lm-h1">
          Six commitments before any case material is shared.
        </h2>

        {NORMS.map((n) => (
          <div
            key={n.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '12mm 1fr',
              gap: '4mm',
              padding: '3mm 0',
              borderBottom: '0.5pt solid var(--rule)',
              alignItems: 'baseline',
            }}
          >
            <div
              className="lm-mono"
              style={{ color: 'var(--rust)', fontSize: '11pt' }}
            >
              {n.n}
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12pt',
                  fontWeight: 500,
                  margin: '0 0 1mm 0',
                }}
              >
                {n.title}
              </p>
              <p style={{ fontSize: '10pt', margin: 0 }}>{n.body}</p>
            </div>
          </div>
        ))}

        <p className="lm-foot">PAGE 8 / 12 · NORMS</p>
      </section>

      {/* ---- HEARINGS ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">09 / Hearings and oral evidence</p>
        <h2 className="lm-h1">Yes. And prepared for it.</h2>

        <p className="lm-lead">
          Oral readiness for the Gutachten is part of the engagement.
          Cross-examination is the test of whether the technical narrative holds
          up; it should not be a surprise to either side.
        </p>

        <h3 className="lm-h3">Where I appear</h3>
        <ul>
          <li>Civil and commercial courts in Switzerland and Germany.</li>
          <li>International arbitration sessions in DE or EN.</li>
          <li>Steering committees for ongoing programme matters.</li>
          <li>
            Occasionally further afield by arrangement (Austria, EU
            jurisdictions; further afield case-by-case).
          </li>
        </ul>

        <h3 className="lm-h3">Preparation cadence</h3>
        <ol>
          <li>
            Two-week mock cross-examination on the Gutachten with counsel before
            any in-person hearing.
          </li>
          <li>
            Confirmation of the question scope and adverse arguments counsel has
            anticipated.
          </li>
          <li>
            Walk-through of any new material that has emerged since the
            Gutachten was filed.
          </li>
        </ol>

        <h3 className="lm-h3">A note on cross-language matters</h3>
        <p>
          Bilingual practice (DE / EN). Hearing in either working language. If
          the Gutachten was filed in one language and the hearing is in the
          other, translation of the Gutachten is arranged in advance, both
          versions checked for technical accuracy by me before the hearing.
        </p>

        <p className="lm-foot">PAGE 9 / 12 · HEARINGS</p>
      </section>

      {/* ---- TIMING ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">10 / Timing</p>
        <h2 className="lm-h1">What you can expect, on what cadence.</h2>

        <table className="lm-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Typical time from intake</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Confidential first call</td>
              <td>Within 48 hours</td>
              <td>30 minutes. Matter shape, conflicts, fit.</td>
            </tr>
            <tr>
              <td>Conflict clearance</td>
              <td>Same week</td>
              <td>Run against active engagements + prior-mandates list.</td>
            </tr>
            <tr>
              <td>NDA + engagement letter</td>
              <td>Within 5 working days</td>
              <td>Standard mutual NDA; engagement letter per matter shape.</td>
            </tr>
            <tr>
              <td>Material review begins</td>
              <td>On NDA execution</td>
              <td>Repository access, contract artefacts, prior reports.</td>
            </tr>
            <tr>
              <td>Question catalogue refined</td>
              <td>Week 1-2</td>
              <td>Iterative with counsel until airtight.</td>
            </tr>
            <tr>
              <td>Draft Gutachten to counsel</td>
              <td>Per engagement scope</td>
              <td>
                Two iteration cycles standard. Technical content mine; legal
                framing collaborative.
              </td>
            </tr>
            <tr>
              <td>Filing</td>
              <td>Per procedural deadline</td>
              <td>Under your firm cover or my own.</td>
            </tr>
            <tr>
              <td>Hearing readiness</td>
              <td>Two weeks pre-hearing</td>
              <td>Mock cross-examination with counsel.</td>
            </tr>
          </tbody>
        </table>

        <div className="lm-rule" />

        <h3 className="lm-h3">Accelerated matters</h3>
        <p>
          Matters with hard procedural deadlines can start the same week,
          subject to conflict clearance. The bottleneck is rarely on my side, it
          is usually access to the underlying material. The faster repositories
          and contract artefacts are made available, the faster the Gutachten
          lands.
        </p>

        <p className="lm-foot">PAGE 10 / 12 · TIMING</p>
      </section>

      {/* ---- WHEN NOT TO ENGAGE ME ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">11 / When not to engage me</p>
        <h2 className="lm-h1">Honest fits and honest declines.</h2>

        <p className="lm-lead">
          A defensible Gutachten depends on the underlying expert taking the
          matter only where it actually fits. The clearest way to protect your
          matter is for me to decline cleanly when it does not.
        </p>

        <h3 className="lm-h3">I will decline if</h3>
        <ul>
          <li>
            <strong>The technical subject matter is outside my domain.</strong>{' '}
            I will say so on the first call and where useful refer to other
            ITDR-listed experts or specialist co-experts. Better to lose the
            engagement than to file a weak Gutachten under my name.
          </li>
          <li>
            <strong>
              A conflict exists from a prior or active engagement.
            </strong>{' '}
            Conflict checks run against my prior-mandates list (maintained seven
            years) before every intake; opposing-party work declined where any
            reasonable conflict exists.
          </li>
          <li>
            <strong>The required position is technically indefensible.</strong>{' '}
            A Gutachten is not advocacy. If the facts do not support the legal
            theory you need to advance, the right move is for counsel to know
            early, not to learn it under cross-examination.
          </li>
          <li>
            <strong>The deadline is incompatible with the material.</strong>{' '}
            Some matters cannot honestly be done in the time available given the
            volume and complexity of the evidence. Accelerated work is possible,
            but speed is not a substitute for sufficient review depth.
          </li>
        </ul>

        <h3 className="lm-h3">Where I bring in co-experts</h3>
        <p>
          For matters that span beyond my own domains, specialised hardware
          forensics, particular regulatory regimes, narrow algorithmic
          specialities, I can act as primary technical expert with named
          co-experts in narrower areas. Counsel retains a single point of
          contact; the technical chain remains coherent.
        </p>

        <p className="lm-foot">PAGE 11 / 12 · DECLINING</p>
      </section>

      {/* ---- CLOSING ---- */}
      <section className="lm-page">
        <p className="lm-eyebrow">12 / Engaging</p>
        <h2 className="lm-h1">Two ways to start.</h2>

        <ol>
          <li>
            <strong>Confidential intake form</strong> at mickel.tech/expert.
            Captures the eight-item intake pack and runs the conflict
            declaration in one form. Reply within 48 hours.
          </li>
          <li>
            <strong>Direct email</strong> to gordon@mickel.tech with "Expert
            intake -- &lt;matter type&gt;" in the subject. Reply within 48
            hours.
          </li>
        </ol>

        <p>
          Court and arbitral appointments are routed through the Institution for
          IT and Data Dispute Resolution (itdr.ch).
        </p>

        <div className="lm-cta">
          <p className="lm-eyebrow" style={{ color: 'hsl(42 32% 89% / 0.7)' }}>
            Engage
          </p>
          <h2 className="lm-h2">
            Confidential intake. Conflict declaration. Reply within 48 hours.
          </h2>
          <p style={{ marginTop: '4mm' }}>
            Default NDA before any case material is shared. Source code reviewed
            only in environments under your or your client&apos;s control.
            Working notes destroyed on engagement close, except as required by
            professional retention rules.
          </p>
          <dl className="lm-cta-row">
            <div>
              <dt>Intake</dt>
              <dd>mickel.tech/expert</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>gordon@mickel.tech</dd>
            </div>
            <div>
              <dt>Listing</dt>
              <dd>itdr.ch, Technical Expert</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>DE / EN · CH / DE / AT / EU</dd>
            </div>
          </dl>
        </div>

        <p className="lm-foot">PAGE 12 / 12 · MICKEL TECH · EXPERT INTAKE</p>
      </section>
    </>
  );
}
