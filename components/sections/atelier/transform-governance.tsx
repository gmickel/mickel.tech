interface TransformGovernanceProps {
  locale?: 'en' | 'de';
}

const principlesEN = [
  {
    tag: 'Sponsor before scope',
    body: 'No engagement starts without a named sponsor with budget and decision authority. AI projects without sponsorship turn into demo theatre.',
  },
  {
    tag: 'Eval before features',
    body: 'Every system carries an eval suite from day one. No production deployment without measurable success criteria the system has demonstrably met.',
  },
  {
    tag: 'Provenance always',
    body: 'Every AI output traces back to its inputs, model, prompt, and version. Audit-grade by default, including in non-regulated environments.',
  },
  {
    tag: 'Human in the loop where it matters',
    body: 'Automation depth matched to consequence. Reversible decisions can be fully automated. High-consequence decisions get review gates by design.',
  },
  {
    tag: 'Internal team owns it',
    body: 'Engagement ends when the internal team owns operations. I leave behind documentation, runbooks, and capability — not dependency.',
  },
  {
    tag: 'No vendor lock-in by default',
    body: 'Architecture preserves the ability to swap models, retrieval engines, or tooling. Lock-in is sometimes the right trade — but it is always a deliberate choice.',
  },
] as const;

const principlesDE = [
  {
    tag: 'Sponsor vor Scope',
    body: 'Kein Mandat startet ohne benannten Sponsor mit Budget und Entscheidungsbefugnis. KI-Projekte ohne Sponsoring werden zum Demo-Theater.',
  },
  {
    tag: 'Eval vor Features',
    body: 'Jedes System trägt eine Eval-Suite ab Tag eins. Kein produktives Deployment ohne messbare Erfolgskriterien, die das System nachweislich erfüllt hat.',
  },
  {
    tag: 'Provenienz immer',
    body: 'Jeder KI-Output rückführbar zu Inputs, Modell, Prompt und Version. Audit-fähig per Default, auch in nicht-regulierten Umgebungen.',
  },
  {
    tag: 'Mensch im Loop, wo es zählt',
    body: 'Automatisierungstiefe an Konsequenz angepasst. Umkehrbare Entscheidungen vollautomatisch. Hochkonsequente Entscheidungen erhalten Review-Gates by design.',
  },
  {
    tag: 'Internes Team besitzt es',
    body: 'Mandat endet, wenn das interne Team den Betrieb besitzt. Ich hinterlasse Dokumentation, Runbooks und Capability — keine Abhängigkeit.',
  },
  {
    tag: 'Kein Vendor-Lock-in per Default',
    body: 'Architektur erhält die Fähigkeit, Modelle, Retrieval-Engines oder Tooling zu tauschen. Lock-in ist manchmal der richtige Trade — aber immer eine bewusste Entscheidung.',
  },
] as const;

export default function AtelierTransformGovernance({
  locale = 'en',
}: TransformGovernanceProps) {
  const principles = locale === 'de' ? principlesDE : principlesEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '05 / Prinzipien',
          heading: 'Sechs Prinzipien, die jedes Mandat tragen.',
          intro:
            'Das, woran ich Mandate scheitern sehe, lässt sich auf das Fehlen einer dieser sechs Sachen zurückführen. Sie sind keine Politur — sie sind die Architektur.',
        }
      : {
          eyebrow: '05 / Principles',
          heading: 'Six principles every engagement runs on.',
          intro:
            'When engagements fail, it traces to one of these six missing. They are not polish — they are the architecture.',
        };

  return (
    <section
      aria-labelledby="transform-governance-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="principles"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id="transform-governance-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
              {labels.intro}
            </p>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--paper))]/15 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <li
              className="flex flex-col gap-3 bg-[hsl(var(--graphite))] p-7 md:p-8"
              key={p.tag}
            >
              <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="atelier-display font-medium text-[1.3rem] text-[hsl(var(--paper))]">
                {p.tag}
              </h3>
              <p className="atelier-body text-[hsl(var(--paper))]/70">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
