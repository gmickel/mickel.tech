'use client';

import { useState } from 'react';

interface ExpertIntakeProps {
  locale?: 'en' | 'de';
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

const copyEN = {
  eyebrow: '06 / Confidential intake',
  heading: 'Open a confidential intake.',
  intro:
    'For counsel, courts, arbitrators, boards and investors. The form is a structured replacement for a first call; it tells me whether I can act, on what, and how fast. NDA before any case material is shared.',
  legal:
    'Submitting this intake creates no engagement and no privileged relationship. I treat the contents as confidential and will respond within 48 hours, including if I have to decline.',
  fields: {
    name: 'Your name',
    firm: 'Firm or organisation',
    role: 'Your role',
    roleOptions: [
      'Litigation / dispute counsel',
      'Procurement / contract counsel',
      'In-house counsel',
      'Court / arbitral tribunal',
      'Board / investment committee',
      'Investor / acquirer',
      'Other',
    ],
    email: 'Email',
    phone: 'Phone (optional)',
    matter: 'Matter type',
    matterOptions: [
      'Parteigutachten (party expert opinion)',
      'Werkvertrags-Gutachten (acceptance expert)',
      'AI / technology due diligence',
      'Independent project review',
      'Other / unsure',
    ],
    jurisdiction: 'Jurisdiction(s)',
    jurisdictionPlaceholder: 'e.g. Switzerland, Germany, EU, ICC arbitration',
    deadline: 'Hard deadline',
    deadlinePlaceholder: 'e.g. hearing on 15 May, soft deadline H2 2026',
    parties:
      'Parties involved (for conflict check; initials acceptable, no privileged content)',
    description:
      'Brief description of the matter and the technical question (no privileged content)',
    descriptionPlaceholder:
      'A few sentences. Enough that I can judge fit and conflict, no more.',
    consent:
      'I confirm this submission contains no privileged content and that I am authorised to make this enquiry.',
    submit: 'Send confidential intake',
    submitting: 'Sending...',
    success:
      'Received. I will respond within 48 hours, often sooner. If you do not see a reply within that window, write directly to gordon@mickel.tech with your reference.',
    error:
      'The intake could not be submitted. Please email gordon@mickel.tech directly with the same content; I will treat it identically.',
  },
};

const copyDE = {
  eyebrow: '06 / Vertrauliche Anfrage',
  heading: 'Vertrauliche Anfrage öffnen.',
  intro:
    'Für Anwaltskanzleien, Gerichte, Schiedsrichter, Verwaltungsräte und Investoren. Das Formular ist ein strukturierter Ersatz für ein Erstgespräch -- es zeigt, ob ich tätig werden kann, woran und wie schnell. NDA vor jeder Übergabe von Verfahrensmaterial.',
  legal:
    'Die Einreichung dieser Anfrage begründet weder ein Mandat noch ein privilegiertes Verhältnis. Ich behandle den Inhalt vertraulich und antworte innerhalb von 48 Stunden, auch wenn ich ablehne.',
  fields: {
    name: 'Ihr Name',
    firm: 'Kanzlei oder Organisation',
    role: 'Ihre Rolle',
    roleOptions: [
      'Prozess- oder Streitanwalt',
      'Beschaffungs- oder Vertragsanwalt',
      'Inhouse-Counsel',
      'Gericht / Schiedsgericht',
      'Verwaltungsrat / Investmentkomitee',
      'Investor / Erwerber',
      'Andere',
    ],
    email: 'E-Mail',
    phone: 'Telefon (optional)',
    matter: 'Mandatstyp',
    matterOptions: [
      'Parteigutachten',
      'Werkvertrags-Gutachten (Abnahmegutachter)',
      'KI- / Tech-Due-Diligence',
      'Unabhängige Projektprüfung',
      'Andere / unklar',
    ],
    jurisdiction: 'Jurisdiktion(en)',
    jurisdictionPlaceholder:
      'z.B. Schweiz, Deutschland, EU, ICC-Schiedsverfahren',
    deadline: 'Harte Frist',
    deadlinePlaceholder: 'z.B. Verhandlung am 15. Mai, weiche Frist H2 2026',
    parties:
      'Beteiligte Parteien (für die Konfliktprüfung -- Initialen genügen, keine privilegierten Inhalte)',
    description:
      'Kurzbeschreibung des Sachverhalts und der technischen Frage (keine privilegierten Inhalte)',
    descriptionPlaceholder:
      'Wenige Sätze. Genug, dass ich Fit und Konflikt beurteilen kann, nicht mehr.',
    consent:
      'Ich bestätige, dass diese Übermittlung keine privilegierten Inhalte enthält und dass ich zur Anfrage befugt bin.',
    submit: 'Vertrauliche Anfrage senden',
    submitting: 'Wird gesendet...',
    success:
      'Eingegangen. Ich antworte innerhalb von 48 Stunden, häufig früher. Sollten Sie in diesem Zeitraum keine Antwort sehen, schreiben Sie direkt an gordon@mickel.tech mit Ihrer Referenz.',
    error:
      'Die Anfrage konnte nicht übermittelt werden. Bitte senden Sie den gleichen Inhalt direkt an gordon@mickel.tech -- ich behandle ihn identisch.',
  },
};

export default function AtelierExpertIntake({
  locale = 'en',
}: ExpertIntakeProps) {
  const c = locale === 'de' ? copyDE : copyEN;
  const [state, setState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: 'submitting', message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/expert-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, locale }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
          issues?: { path: (string | number)[]; message: string }[];
        } | null;
        if (data?.issues?.length) {
          const fieldLabels: Record<string, string> = {
            name: c.fields.name,
            firm: c.fields.firm,
            email: c.fields.email,
            phone: c.fields.phone,
            role: c.fields.role,
            matter: c.fields.matter,
            jurisdiction: c.fields.jurisdiction,
            deadline: c.fields.deadline,
            parties: c.fields.parties,
            description: c.fields.description,
            consent: c.fields.consent,
          };
          const issues = data.issues
            .map((i) => {
              const field = String(i.path[0] ?? '');
              const label = fieldLabels[field] ?? field;
              return `${label}: ${i.message}`;
            })
            .join(' · ');
          setState({ status: 'error', message: issues });
          return;
        }
        throw new Error('Submission failed');
      }

      setState({ status: 'success', message: c.fields.success });
      form.reset();
    } catch {
      setState({ status: 'error', message: c.fields.error });
    }
  }

  return (
    <section
      aria-labelledby="expert-intake-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="intake"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* Left: heading + legal */}
          <div className="md:col-span-4">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
            <h2
              className="atelier-display mt-4 font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="expert-intake-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 text-[hsl(var(--paper-muted))]">
              {c.intro}
            </p>
            <p className="atelier-eyebrow mt-8 text-[hsl(var(--paper-muted))]">
              {locale === 'de' ? 'Hinweis' : 'Notice'}
            </p>
            <p className="mt-2 text-[hsl(var(--paper-muted))] text-sm">
              {c.legal}
            </p>
          </div>

          {/* Right: form */}
          <div className="md:col-span-8">
            {state.status === 'success' ? (
              <SuccessPanel message={state.message} />
            ) : (
              <form
                className="space-y-6 border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))] p-7 md:p-10"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label={c.fields.name}
                    name="name"
                    required
                    type="text"
                  />
                  <Field
                    label={c.fields.firm}
                    name="firm"
                    required
                    type="text"
                  />
                  <Field
                    label={c.fields.email}
                    name="email"
                    required
                    type="email"
                  />
                  <Field label={c.fields.phone} name="phone" type="tel" />
                </div>

                <SelectField
                  label={c.fields.role}
                  name="role"
                  options={c.fields.roleOptions}
                  required
                />

                <SelectField
                  label={c.fields.matter}
                  name="matter"
                  options={c.fields.matterOptions}
                  required
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label={c.fields.jurisdiction}
                    name="jurisdiction"
                    placeholder={c.fields.jurisdictionPlaceholder}
                    required
                    type="text"
                  />
                  <Field
                    label={c.fields.deadline}
                    name="deadline"
                    placeholder={c.fields.deadlinePlaceholder}
                    type="text"
                  />
                </div>

                <Field
                  label={c.fields.parties}
                  name="parties"
                  required
                  type="text"
                />

                <TextAreaField
                  helper={
                    locale === 'de'
                      ? 'Mindestens 20 Zeichen.'
                      : 'At least 20 characters.'
                  }
                  label={c.fields.description}
                  minLength={20}
                  name="description"
                  placeholder={c.fields.descriptionPlaceholder}
                  required
                  rows={5}
                />

                <label className="flex items-start gap-3 text-[hsl(var(--ink))]/85 text-sm">
                  <input
                    className="mt-1 h-4 w-4 accent-[hsl(var(--rust))]"
                    name="consent"
                    required
                    type="checkbox"
                  />
                  <span>{c.fields.consent}</span>
                </label>

                <div className="flex flex-wrap items-center gap-4 border-[hsl(var(--ink))]/10 border-t pt-6">
                  <button
                    className="atelier-cta-primary disabled:opacity-60"
                    disabled={state.status === 'submitting'}
                    type="submit"
                  >
                    {state.status === 'submitting'
                      ? c.fields.submitting
                      : c.fields.submit}
                    {state.status !== 'submitting' ? (
                      <span aria-hidden="true">→</span>
                    ) : null}
                  </button>
                  {state.status === 'error' ? (
                    <p className="text-[hsl(var(--rust))] text-sm">
                      {state.message}
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="atelier-eyebrow block text-[hsl(var(--paper-muted))]">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[hsl(var(--rust))]">
            ·
          </span>
        ) : null}
      </span>
      <input
        className="mt-2 w-full border-0 border-[hsl(var(--ink))]/25 border-b bg-transparent py-2 text-[hsl(var(--ink))] outline-none transition-colors focus:border-[hsl(var(--rust))]"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="atelier-eyebrow block text-[hsl(var(--paper-muted))]">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[hsl(var(--rust))]">
            ·
          </span>
        ) : null}
      </span>
      <select
        className="mt-2 w-full appearance-none border-0 border-[hsl(var(--ink))]/25 border-b bg-transparent py-2 text-[hsl(var(--ink))] outline-none transition-colors focus:border-[hsl(var(--rust))]"
        defaultValue=""
        name={name}
        required={required}
      >
        <option disabled value="">
          --
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  rows,
  placeholder,
  required,
  minLength,
  helper,
}: {
  label: string;
  name: string;
  rows: number;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="atelier-eyebrow block text-[hsl(var(--paper-muted))]">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[hsl(var(--rust))]">
            ·
          </span>
        ) : null}
      </span>
      <textarea
        className="mt-2 w-full resize-y border border-[hsl(var(--ink))]/25 bg-transparent px-3 py-2 text-[hsl(var(--ink))] outline-none transition-colors focus:border-[hsl(var(--rust))]"
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      {helper ? (
        <span className="atelier-mono mt-2 block text-[0.7rem] text-[hsl(var(--paper-muted))] tracking-[0.1em]">
          {helper}
        </span>
      ) : null}
    </label>
  );
}

function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="border border-[hsl(var(--rust))]/40 bg-[hsl(var(--paper))] p-10">
      <p className="atelier-numerals text-3xl text-[hsl(var(--rust))]">→</p>
      <p className="atelier-display mt-5 font-medium text-[1.55rem] text-[hsl(var(--ink))]">
        {message}
      </p>
    </div>
  );
}
