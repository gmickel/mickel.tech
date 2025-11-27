import { headers } from 'next/headers';

export const alertVariants = [
  'Diagnostic: Your AI roadmap is an unpriced risk until it survives SDLC, data and eval scrutiny. I map it to hard KPIs and kill what won&apos;t deliver before you lock in vendors or budget.',
  'Diagnostic: Pilots that never leave the lab are just slow write-offs. I stress-test your AI plans end-to-end and shut down what can&apos;t ship with evidence, not optimism.',
  'Diagnostic: Vendor slides don&apos;t count as due diligence. I force your AI roadmap through SDLC, data and eval checks so only plans with credible uplift and rollback paths survive.',
] as const;

export async function getRandomAlertText(): Promise<string> {
  // Access headers to force dynamic evaluation on each request
  await headers();
  // Random selection happens server-side on each request
  return alertVariants[Math.floor(Math.random() * alertVariants.length)];
}
