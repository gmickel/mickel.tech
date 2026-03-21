import Hero from '@/components/sections/hero';
import { getRandomAlertText } from '@/components/sections/system-alert';

type MandateStatus = {
  periodLabel: string;
  slotLabel: string;
};

function getMandateStatus(now = new Date()): MandateStatus {
  const q1Start = new Date('2026-03-01T00:00:00Z');
  const q1End = new Date('2026-05-01T00:00:00Z');

  if (now >= q1Start && now < q1End) {
    return { periodLabel: 'MAR/APR 26', slotLabel: '3 SLOTS' };
  }

  if (now < q1Start) {
    return { periodLabel: 'MAR/APR 26', slotLabel: '4 SLOTS' };
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
