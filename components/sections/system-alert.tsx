import { headers } from 'next/headers';

export const alertVariants = [
  "Diagnostic: Your AI roadmap is unpriced risk until it survives SDLC, data and eval scrutiny. I map it to hard KPIs and kill what won't deliver before you lock in vendors or budget.",
  "Diagnostic: Pilots that never leave the lab are just slow write-offs. I stress-test your AI lanes end-to-end and shut down what can't ship with evidence instead of optimism.",
  "Diagnostic: Vendor slides don't count as due diligence. I force your AI roadmap through SDLC, data and eval gates so only work with measurable uplift and rollback paths survives.",
] as const;

export async function getRandomAlertText(): Promise<string> {
  // Access headers to force dynamic evaluation on each request
  await headers();
  // Random selection happens server-side on each request
  return alertVariants[Math.floor(Math.random() * alertVariants.length)];
}
