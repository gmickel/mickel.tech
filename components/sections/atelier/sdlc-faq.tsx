import { faqSchema, JsonLd } from '@/lib/json-ld';

interface SdlcFaqProps {
  locale?: 'en' | 'de';
}

const faqsEN = [
  {
    question: 'Why "PDLC" instead of "SDLC"?',
    answer:
      'SDLC frames the problem as software development. Once agents can write production code in minutes, the constraint moves up the value chain — to product framing, requirements engineering and review capacity. PDLC (Product Development Life Cycle) names the actual unit of work and lets us optimise the right bottleneck.',
  },
  {
    question:
      'Is this just selling Cursor / Claude Code / OpenAI Codex rollouts?',
    answer:
      'No. Tool choice, adoption and engineer coaching are part of the work — but a small part. The methodology shift, eval gates, cross-model review, everything-as-code, observability flywheels and organisational redesign are where the work sits and where the value is. The tools change every quarter; the methodology does not.',
  },
  {
    question: 'Where do FlowNext and MergeFoundry fit?',
    answer:
      'FlowNext is the open-source pattern that any team can adopt independently. MergeFoundry is the commercial platform I am building separately under MergeFoundry, Inc — relevant when a portfolio wants the L3/L4 patterns deployed once and reused everywhere. Neither is required to engage me; both are available if useful.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'Cycle time, review time, deploy frequency, change failure rate (DORA core), plus PDLC-specific metrics: spec quality scores, eval-gate pass rate, agent-vs-human authorship ratio, observability-to-spec feedback latency. Baselined in week one of any engagement.',
  },
  {
    question: 'What about regulated industries?',
    answer:
      'Most of my work is in regulated environments — healthcare, finance, public sector. Eval gates, audit trails, deterministic pipelines and provenance are not afterthoughts; they are the architecture. I have shipped production AI inside a clinical CIS and inside legal-grade contract platforms.',
  },
  {
    question: 'Will my engineers lose their jobs?',
    answer:
      'No, but their work changes. Specs, reviews, judgement on edge cases, product framing, agent supervision — these become the high-leverage work. Engineers who lean into that gain. Engineers who only type code lose ground regardless of whether you engage me. Better to do this on your terms.',
  },
  {
    question: 'Do you do remote-only or onsite?',
    answer:
      'Both. Most engagements are hybrid: 1–2 onsite days at start and at major milestones, remote in between. Pure remote works when there is a strong technical lead on your side. Pure onsite is rarely worth the price.',
  },
  {
    question: 'Where does this fit alongside my existing platform team?',
    answer:
      'Cleanly. The platform team owns the runtime; I own the methodology and the agent layer. We co-build the foundation and then your platform team owns it. I do not stay forever — that is the test of whether the engagement worked.',
  },
] as const;

const faqsDE = [
  {
    question: 'Warum „PDLC" statt „SDLC"?',
    answer:
      'SDLC framt das Problem als Softwareentwicklung. Sobald Agenten produktiven Code in Minuten schreiben, wandert die Beschränkung die Wertkette hoch -- zu Produkt-Framing, Anforderungsengineering und Review-Kapazität. PDLC (Product Development Life Cycle) benennt die tatsächliche Arbeitseinheit und erlaubt es, den richtigen Engpass zu optimieren.',
  },
  {
    question:
      'Verkaufen Sie damit nicht einfach Cursor- / Claude-Code- / OpenAI-Codex-Rollouts?',
    answer:
      'Nein. Tool-Auswahl, Adoption und Coaching der Entwickler gehören dazu -- aber als kleiner Teil. Methodenwechsel, Eval-Gates, Cross-Model-Review, Everything-as-code, Observability-Schwungräder und organisatorische Neuauslegung sind dort, wo die Arbeit sitzt und wo der Wert liegt. Die Tools wechseln pro Quartal; die Methodik nicht.',
  },
  {
    question: 'Wo passen FlowNext und MergeFoundry hinein?',
    answer:
      'FlowNext ist das Open-Source-Pattern, das jedes Team unabhängig adoptieren kann. MergeFoundry ist die kommerzielle Plattform, die ich separat unter MergeFoundry, Inc. baue -- relevant, wenn ein Portfolio die L3/L4-Patterns einmal aufsetzen und überall wiederverwenden will. Keines ist Voraussetzung für ein Mandat; beides ist verfügbar, falls nützlich.',
  },
  {
    question: 'Wie messen Sie Erfolg?',
    answer:
      'Cycle Time, Review-Zeit, Deploy-Frequenz, Change-Failure-Rate (DORA-Kern), dazu PDLC-spezifische Metriken: Spec-Qualitäts-Scores, Pass-Rate der Eval-Gates, Verhältnis von Agent- zu Mensch-Autorenschaft, Latenz von Observability zur Spec. Baseline in Woche eins jedes Mandats.',
  },
  {
    question: 'Was ist mit regulierten Branchen?',
    answer:
      'Der Grossteil meiner Arbeit findet in regulierten Umgebungen statt -- Gesundheitswesen, Finanzen, öffentliche Hand. Eval-Gates, Audit-Trails, deterministische Pipelines und Provenienz sind keine Nachträge; sie sind die Architektur. Ich habe produktive KI in einem klinischen CIS und in gerichtstauglichen Vertragsplattformen ausgeliefert.',
  },
  {
    question: 'Verlieren meine Entwickler ihre Jobs?',
    answer:
      'Nein, aber ihre Arbeit verändert sich. Specs, Reviews, das Urteil über Edge Cases, Produkt-Framing, Agent-Supervision -- das wird die Arbeit mit Hebelwirkung. Entwickler, die sich darauf einlassen, gewinnen. Entwickler, die nur Code tippen, verlieren Boden -- unabhängig davon, ob Sie mich engagieren. Besser, es zu Ihren Bedingungen zu tun.',
  },
  {
    question: 'Remote oder vor Ort?',
    answer:
      'Beides. Die meisten Mandate sind hybrid: 1–2 Onsite-Tage zu Beginn und an wichtigen Meilensteinen, dazwischen remote. Rein remote funktioniert bei starker technischer Führung auf Ihrer Seite. Rein onsite ist selten den Preis wert.',
  },
  {
    question: 'Wie passt das neben mein bestehendes Plattform-Team?',
    answer:
      'Sauber. Das Plattform-Team verantwortet die Runtime; ich verantworte die Methodik und die Agent-Schicht. Wir bauen das Fundament gemeinsam, dann übernimmt Ihr Plattform-Team. Ich bleibe nicht ewig -- das ist der Test, ob das Mandat funktioniert hat.',
  },
] as const;

export default function AtelierSdlcFaq({ locale = 'en' }: SdlcFaqProps) {
  const faqs = locale === 'de' ? faqsDE : faqsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '06 / Häufige Fragen',
          heading: 'Was Engineering-Leader zuerst fragen.',
        }
      : {
          eyebrow: '06 / Frequently asked',
          heading: 'What engineering leaders ask first.',
        };

  return (
    <section
      aria-labelledby="sdlc-faq-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="faq"
    >
      <JsonLd
        data={faqSchema(
          faqs as unknown as Array<{ question: string; answer: string }>
        )}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="sdlc-faq-heading"
            >
              {labels.heading}
            </h2>
          </div>
        </header>

        <dl className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              className="bg-[hsl(var(--paper))] p-7 md:p-9"
              key={faq.question}
            >
              <dt>
                <span className="atelier-numerals mr-3 text-[hsl(var(--rust))] text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="atelier-display font-medium text-[1.15rem] text-[hsl(var(--ink))] md:text-[1.25rem]">
                  {faq.question}
                </span>
              </dt>
              <dd className="atelier-body mt-3 text-[hsl(var(--paper-muted))]">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
