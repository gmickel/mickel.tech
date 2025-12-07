import Hero from '@/components/sections/hero';
import { getRandomAlertText } from '@/components/sections/system-alert';

type MandateStatus = {
  periodLabel: string;
  slotLabel: string;
};

function getMandateStatus(now = new Date()): MandateStatus {
  const jan2026 = new Date('2026-01-01T00:00:00Z');
  const mar2026 = new Date('2026-03-01T00:00:00Z');

  if (now >= jan2026 && now < mar2026) {
    return { periodLabel: 'JAN/FEB 26', slotLabel: '4 SLOTS' };
  }

  return { periodLabel: 'DECEMBER', slotLabel: '1 SLOT LEFT' };
}

export default async function HeroLoader() {
  const alertText = await getRandomAlertText();
  const mandateStatus = getMandateStatus();

  return (
    <Hero
      alertText={alertText}
      mandatePeriodLabel={mandateStatus.periodLabel}
      mandateSlotLabel={mandateStatus.slotLabel}
    />
  );
}
