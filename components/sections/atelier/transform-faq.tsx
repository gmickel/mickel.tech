import { faqSchema, JsonLd } from '@/lib/json-ld';

interface TransformFaqProps {
  locale?: 'en' | 'de';
}

const faqsEN = [
  {
    question: 'How is this different from a generic "AI consultancy"?',
    answer:
      "Generic AI consultancies bring you a deck and a vendor list. I bring twenty years of shipping production systems and a process-first method that starts in your workflow, not in OpenAI's catalogue. I co-build, not co-advise.",
  },
  {
    question: 'Do you only work with PE-backed companies?',
    answer:
      'No. PE portcos are a large share of my work because the operating discipline matches my method, but I take direct mandates from CEOs, COOs and boards in mid-market software, healthcare, finance and legal services.',
  },
  {
    question: 'What if we already have a vendor / SI engaged?',
    answer:
      'Often the right setup. I act as the technical owner who supervises the vendor work, sets eval criteria, and represents your interest. The vendor builds; I make sure what they build matches what you need.',
  },
  {
    question: 'How do you handle data residency and sovereignty?',
    answer:
      'On Switzerland and EU data, default to in-region or on-prem deployments. Private LLM infrastructure where regulation requires it. No client data on external services without a written approval trail.',
  },
  {
    question: 'How long until we see ROI?',
    answer:
      'The 2–3 week audit identifies the first pay-back use case. The system build runs 6–16 weeks. Most engagements break even on the first deployment if the audit was done honestly.',
  },
  {
    question: 'What about change management?',
    answer:
      'Built into the engagement when relevant — but I am not a change-management consultancy. I refer or partner with specialist change support when the technical solution lands cleanly but the human side needs more than my involvement.',
  },
  {
    question: 'Will you sign an NDA before the discovery call?',
    answer:
      'Yes. Default NDA before any non-public information is shared. Mutual where it makes sense, one-way otherwise. Standard CH/DE templates accepted; custom templates reviewed quickly.',
  },
  {
    question: 'Can you build inside our existing tech stack?',
    answer:
      'Almost always yes. I work across major cloud providers, vector databases, model providers, programming languages and frameworks. The point of the audit is to honour your stack, not replace it for novelty.',
  },
] as const;

const faqsDE = [
  {
    question: 'Wie unterscheidet sich das von einer generischen „KI-Beratung"?',
    answer:
      'Generische KI-Beratungen bringen ein Deck und eine Anbieterliste. Ich bringe zwanzig Jahre produktiver Systeme und eine Prozess-zuerst-Methode, die in Ihrem Workflow beginnt, nicht im OpenAI-Katalog. Ich baue mit, ich berate nicht nur.',
  },
  {
    question: 'Arbeiten Sie nur mit PE-gehaltenen Unternehmen?',
    answer:
      'Nein. PE-Portcos sind ein grosser Teil meiner Arbeit, weil die operative Disziplin zur Methode passt, aber ich nehme auch direkte Mandate von CEOs, COOs und Verwaltungsräten in Mid-Market-Software, Gesundheitswesen, Finanzen und Legal Services an.',
  },
  {
    question: 'Was, wenn wir bereits einen Anbieter / SI engagiert haben?',
    answer:
      'Oft die richtige Konstellation. Ich übernehme die technische Eigentümerrolle, beaufsichtige die Anbieterarbeit, setze Eval-Kriterien und vertrete Ihr Interesse. Der Anbieter baut; ich stelle sicher, dass das Gebaute zu dem passt, was Sie brauchen.',
  },
  {
    question: 'Wie handhaben Sie Datenhoheit und Datensouveränität?',
    answer:
      'Bei Schweizer und EU-Daten standardmässig In-Region- oder On-Prem-Deployments. Private LLM-Infrastruktur, wo die Regulierung es verlangt. Keine Mandantendaten auf externen Diensten ohne schriftlich dokumentierte Freigabe.',
  },
  {
    question: 'Wie lange bis zum ROI?',
    answer:
      'Der 2–3-wöchige Audit identifiziert den ersten zahlbaren Use Case. Der System-Build läuft 6–16 Wochen. Die meisten Mandate erreichen den Break-even beim ersten Deployment, sofern der Audit ehrlich gemacht wurde.',
  },
  {
    question: 'Was ist mit Change Management?',
    answer:
      'Wo relevant, in das Mandat integriert -- aber ich bin keine Change-Management-Beratung. Ich verweise oder kooperiere mit spezialisierter Change-Unterstützung, wenn die technische Lösung sauber landet, die menschliche Seite aber mehr braucht als meine Beteiligung.',
  },
  {
    question: 'Unterzeichnen Sie eine NDA vor dem Discovery-Gespräch?',
    answer:
      'Ja. Standardmässig NDA vor jeder Übergabe nicht öffentlicher Informationen. Beidseitig, wo sinnvoll, sonst einseitig. Standardvorlagen für CH/DE werden akzeptiert; eigene Vorlagen werden schnell geprüft.',
  },
  {
    question: 'Können Sie in unserem bestehenden Tech-Stack bauen?',
    answer:
      'Fast immer ja. Ich arbeite über die grossen Cloud-Anbieter, Vektordatenbanken, Modellanbieter, Programmiersprachen und Frameworks hinweg. Sinn des Audits ist, Ihren Stack zu respektieren, nicht ihn aus Neugier zu ersetzen.',
  },
] as const;

export default function AtelierTransformFaq({
  locale = 'en',
}: TransformFaqProps) {
  const faqs = locale === 'de' ? faqsDE : faqsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '06 / Häufige Fragen',
          heading: 'Was Geschäftsleitungen zuerst fragen.',
        }
      : {
          eyebrow: '06 / Frequently asked',
          heading: 'What executives ask first.',
        };

  return (
    <section
      aria-labelledby="transform-faq-heading"
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
              id="transform-faq-heading"
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
