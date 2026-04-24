interface TrustStripProps {
  locale?: 'en' | 'de';
}

const itemsEN = [
  {
    label: 'ITDR-listed',
    meta: 'Swiss expert body for ICT/AI disputes',
  },
  { label: 'openEHR.ch', meta: 'Symposium speaker, clinical AI' },
  { label: 'OpenAI Red Team', meta: 'Frontier model safety alumnus' },
  { label: 'SECA 2026', meta: 'Invited speaker, AI in SME growth' },
  { label: 'DocIQ', meta: 'Founder, AI-native CLM platform' },
  { label: 'FlowNext', meta: 'Author · thousands of users' },
  { label: 'Dettivo', meta: 'Local-first Mac dictation · MCP server' },
  { label: '20+ years', meta: 'Engineering production systems' },
  { label: 'DE / EN', meta: 'Bilingual mandates' },
] as const;

const itemsDE = [
  {
    label: 'ITDR-gelistet',
    meta: 'Schweizer Fachstelle für IKT-/KI-Streitigkeiten',
  },
  { label: 'openEHR.ch', meta: 'Symposiums-Sprecher, klinische KI' },
  { label: 'OpenAI Red Team', meta: 'Alumnus, Frontier-Modell-Safety' },
  { label: 'SECA 2026', meta: 'Eingeladener Sprecher, KI im KMU' },
  { label: 'DocIQ', meta: 'Gründer, KI-natives CLM' },
  { label: 'FlowNext', meta: 'Autor · tausende Nutzer' },
  { label: 'Dettivo', meta: 'Local-first Mac-Diktat · MCP-Server' },
  { label: '20+ Jahre', meta: 'Produktionssysteme entwickelt' },
  { label: 'DE / EN', meta: 'Zweisprachige Mandate' },
] as const;

export default function AtelierTrustStrip({ locale = 'en' }: TrustStripProps) {
  const items = locale === 'de' ? itemsDE : itemsEN;
  const eyebrow = locale === 'de' ? 'Anerkennungen' : 'Recognitions';

  return (
    <section
      aria-label={eyebrow}
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-12">
        <div className="grid items-baseline gap-6 md:grid-cols-12">
          <span className="atelier-eyebrow text-[hsl(var(--paper))]/45 md:col-span-2">
            {eyebrow}
          </span>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:col-span-10 lg:grid-cols-4">
            {items.map((item) => (
              <li className="leading-tight" key={item.label}>
                <div className="font-medium text-[0.92rem] text-[hsl(var(--paper))]">
                  {item.label}
                </div>
                <div className="mt-0.5 text-[0.78rem] text-[hsl(var(--paper))]/55">
                  {item.meta}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
