import Hero from '@/components/sections/de/hero';

function getMandateStatus() {
  return { periodLabel: 'Q2 2026', slotLabel: '3 SLOTS' };
}

export default function DeHeroLoader() {
  const ms = getMandateStatus();
  return (
    <Hero
      alertText="Diagnose: Die meisten KI-Roadmaps sind gebaut um zu beeindrucken, nicht um zu liefern. Ich teste Ihre gegen Daten, Architektur und Regulierung, bevor Sie ernsthaft Zeit und Kapital investieren."
      mandatePeriodLabel={ms.periodLabel}
      mandateSlotLabel={ms.slotLabel}
    />
  );
}
