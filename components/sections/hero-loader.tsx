import Hero from '@/components/sections/hero';
import { getRandomAlertText } from '@/components/sections/system-alert';

type MandateStatus = {
  periodLabel: string;
  slotLabel: string;
};

function getMandateStatus(now = new Date()): MandateStatus {
  const q1Start = new Date('2026-02-01T00:00:00Z');
  const q1End = new Date('2026-04-01T00:00:00Z');

  if (now >= q1Start && now < q1End) {
    return { periodLabel: 'FEB/MAR 26', slotLabel: '3 SLOTS' };
  }

  return { periodLabel: 'Q2 2026', slotLabel: '4 SLOTS' };
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
