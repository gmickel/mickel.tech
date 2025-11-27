import Hero from '@/components/sections/hero';
import { getRandomAlertText } from '@/components/sections/system-alert';

export default async function HeroLoader() {
  const alertText = await getRandomAlertText();
  return <Hero alertText={alertText} />;
}
