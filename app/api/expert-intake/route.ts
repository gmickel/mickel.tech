import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const intakeSchema = z.object({
  name: z.string().min(1).max(200),
  firm: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(80).optional().or(z.literal('')),
  role: z.string().min(1).max(120),
  matter: z.string().min(1).max(200),
  jurisdiction: z.string().min(1).max(200),
  deadline: z.string().max(200).optional().or(z.literal('')),
  parties: z.string().min(1).max(2000),
  description: z.string().min(20).max(8000),
  consent: z.union([z.literal('on'), z.literal('true'), z.boolean()]),
  locale: z.enum(['en', 'de']).optional(),
});

const RECIPIENT = 'gordon@mickel.tech';
const FROM_DEFAULT = 'mickel.tech intake <intake@mickel.tech>';

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = intakeSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid_payload', issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const subject = `[Expert intake] ${data.matter} · ${data.firm}`;
  const body = renderIntakeBody(data);

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const fromAddress = process.env.RESEND_FROM ?? FROM_DEFAULT;
      await resend.emails.send({
        from: fromAddress,
        to: RECIPIENT,
        replyTo: data.email,
        subject,
        text: body,
      });
    } catch (err) {
      // Email failed · record the intake on the server so it isn't lost.
      console.error('expert-intake.email_failed', {
        error: err instanceof Error ? err.message : 'unknown',
        subject,
        from: data.email,
      });
      console.warn('expert-intake.payload', body);
      return NextResponse.json({ ok: true, fallback: 'logged' });
    }
  } else {
    // No Resend key configured · log the intake so it is recoverable from server logs.
    console.warn('expert-intake.no_api_key', { subject });
    console.warn('expert-intake.payload', body);
  }

  return NextResponse.json({ ok: true });
}

function renderIntakeBody(d: z.infer<typeof intakeSchema>): string {
  return [
    `New confidential intake · ${new Date().toISOString()}`,
    `Locale: ${d.locale ?? 'en'}`,
    '',
    `Name:         ${d.name}`,
    `Firm:         ${d.firm}`,
    `Email:        ${d.email}`,
    `Phone:        ${d.phone ?? '--'}`,
    `Role:         ${d.role}`,
    `Matter:       ${d.matter}`,
    `Jurisdiction: ${d.jurisdiction}`,
    `Deadline:     ${d.deadline ?? '--'}`,
    '',
    'Parties (conflict check):',
    d.parties,
    '',
    'Description:',
    d.description,
    '',
    `Consent: ${String(d.consent)}`,
  ].join('\n');
}
