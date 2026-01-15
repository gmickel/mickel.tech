'use client';

import DecryptedText from '@/components/ui/decrypted-text';

interface PageTitleProps {
  text: string;
  className?: string;
}

/**
 * Animated page title with cyberpunk decrypt effect.
 * Plays once on view with terminal-style character cycling.
 */
export default function PageTitle({ text, className = '' }: PageTitleProps) {
  return (
    <DecryptedText
      animateOn="view"
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01█▓░▒"
      className={className}
      encryptedClassName="text-primary/70"
      maxIterations={12}
      sequential
      speed={35}
      text={text}
    />
  );
}
