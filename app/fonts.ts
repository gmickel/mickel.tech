import {
  Hanken_Grotesk,
  JetBrains_Mono,
  Newsreader,
  Space_Grotesk,
} from 'next/font/google';

// Cyberpunk shell (legacy: /log, /apps, /gmickel-bench, etc.)
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Engineering Atelier shell (commercial: home, /sdlc, /expert, /ai-transformation, /case-studies)
export const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
  style: ['normal', 'italic'],
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-atelier-sans',
  display: 'swap',
});
