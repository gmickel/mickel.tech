import { faqSchema, JsonLd } from '@/lib/json-ld';

interface ExpertFaqProps {
  locale?: 'en' | 'de';
}

const faqsEN = [
  {
    question: 'How quickly can you respond to a new matter?',
    answer:
      'Initial confidential call within 48 hours. Engagement letter usually within 5 working days of intake. Accelerated matters can start the same week if the conflict declaration clears.',
  },
  {
    question: 'How do you handle conflicts of interest?',
    answer:
      'Every intake includes a structured conflict declaration step listing parties, counsel and adverse parties. I check against my active engagements and a documented prior-mandates list before accepting. If a conflict exists I decline and explain.',
  },
  {
    question: 'Are you court-appointed or party-engaged?',
    answer:
      'Party-engaged on the matters I have run. I am ITDR-listed and available for court or arbitral appointment, but on current matters I am engaged by counsel as a Parteigutachter or named jointly by parties as a Werkvertrags-Gutachter. I never describe past work as court-appointed when it was not.',
  },
  {
    question: 'What does an engagement cost?',
    answer:
      'Parteigutachten and DD work bill on a time-and-materials basis at CHF day rates with caps agreed up front. Werkvertrags-Gutachten are typically pauschal fixed-fee, split between procurer and supplier. Specific numbers shared on the intake call.',
  },
  {
    question: 'Confidentiality and data handling?',
    answer:
      "Default NDA before any case material is shared. Source code reviewed only in environments under your or your client's control. No client material on third-party AI services without written consent. Working notes destroyed on engagement close, except as required by professional retention rules.",
  },
  {
    question: 'Will you appear at hearings?',
    answer:
      'Yes. Oral readiness for the Gutachten is part of the engagement. I attend hearings, steering committees and arbitration sessions in DE or EN, in CH and DE typically, occasionally further afield by arrangement.',
  },
  {
    question: 'What if my matter falls outside your domain expertise?',
    answer:
      'I say so on the first call. Where it makes sense I refer to other ITDR-listed experts or specialist co-experts and stay involved in the technical-review chain only if useful.',
  },
  {
    question: 'Do you accept opposing-party engagements after a prior mandate?',
    answer:
      'Generally no, where there is any reasonable conflict. I document prior parties for at least seven years and apply a strict isolation rule.',
  },
] as const;

const faqsDE = [
  {
    question: 'Wie schnell können Sie auf einen neuen Sachverhalt reagieren?',
    answer:
      'Vertrauliches Erstgespräch innerhalb 48 Stunden. Auftragsbestätigung in der Regel innerhalb von 5 Arbeitstagen. Beschleunigte Sachverhalte können noch in derselben Woche starten, sofern die Konfliktdeklaration durchläuft.',
  },
  {
    question: 'Wie handhaben Sie Interessenkonflikte?',
    answer:
      'Jedes Erstgespräch enthält eine strukturierte Konfliktdeklaration mit Parteien, Anwaltskanzleien und Gegenparteien. Ich prüfe gegen aktive Mandate und eine dokumentierte Mandatshistorie, bevor ich annehme. Bei Konflikt lehne ich ab und erkläre.',
  },
  {
    question: 'Sind Sie gerichtlich bestellt oder parteiisch beauftragt?',
    answer:
      'Parteiisch beauftragt bei den bisherigen Mandaten. Ich bin ITDR-gelistet und für gerichtliche oder schiedsrichterliche Bestellungen verfügbar; bei aktuellen Mandaten bin ich aber von der Anwaltschaft als Parteigutachter oder gemeinsam von beiden Parteien als Werkvertrags-Gutachter beauftragt. Ich bezeichne frühere Arbeit nie als gerichtlich bestellt, wenn sie es nicht war.',
  },
  {
    question: 'Was kostet ein Mandat?',
    answer:
      'Parteigutachten und DD-Arbeit nach Aufwand zu CHF-Tagessätzen mit vorab vereinbarten Obergrenzen. Werkvertrags-Gutachten typischerweise als Pauschalhonorar, hälftig zwischen Auftraggeber und Lieferant. Konkrete Zahlen im Erstgespräch.',
  },
  {
    question: 'Vertraulichkeit und Datenhandhabung?',
    answer:
      'Standardmässig NDA vor jeder Fallmaterial-Übergabe. Quellcode wird nur in Umgebungen unter Ihrer oder Mandantenkontrolle gesichtet. Keine Mandantendaten auf Drittanbieter-KI-Diensten ohne schriftliche Zustimmung. Arbeitsnotizen werden bei Mandatsende vernichtet, ausser wo Aufbewahrungspflichten gelten.',
  },
  {
    question: 'Erscheinen Sie an Verhandlungen?',
    answer:
      'Ja. Mündliche Verhandlungsbereitschaft ist Teil des Auftrags. Ich nehme an Verhandlungen, Steering Committees und Schiedsverfahren in DE oder EN teil, üblicherweise in CH und DE, gelegentlich auch weiter entfernt nach Absprache.',
  },
  {
    question: 'Was, wenn mein Sachverhalt ausserhalb Ihrer Fachgebiete liegt?',
    answer:
      'Ich sage es im Erstgespräch. Wo sinnvoll, verweise ich auf andere ITDR-gelistete Experten oder spezialisierte Mit-Gutachter und bleibe nur dann in der technischen Review-Kette, wenn es nützlich ist.',
  },
  {
    question:
      'Nehmen Sie Mandate der Gegenseite nach einem früheren Mandat an?',
    answer:
      'Grundsätzlich nicht, wenn auch nur ein vernünftiger Konflikt besteht. Ich dokumentiere frühere Parteien für mindestens sieben Jahre und wende eine strenge Isolationsregel an.',
  },
] as const;

export default function AtelierExpertFaq({ locale = 'en' }: ExpertFaqProps) {
  const faqs = locale === 'de' ? faqsDE : faqsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '05 / Häufige Fragen',
          heading: 'Was Anwaltschaften zuerst fragen.',
        }
      : {
          eyebrow: '05 / Frequently asked',
          heading: 'What counsel ask first.',
        };

  return (
    <section
      aria-labelledby="expert-faq-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
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
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id="expert-faq-heading"
            >
              {labels.heading}
            </h2>
          </div>
        </header>

        <dl className="grid grid-cols-1 gap-px bg-[hsl(var(--paper))]/15 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              className="bg-[hsl(var(--graphite))] p-7 md:p-9"
              key={faq.question}
            >
              <dt>
                <span className="atelier-numerals mr-3 text-[hsl(var(--rust))] text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="atelier-display font-medium text-[1.15rem] text-[hsl(var(--paper))] md:text-[1.25rem]">
                  {faq.question}
                </span>
              </dt>
              <dd className="atelier-body mt-3 text-[hsl(var(--paper))]/75">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
