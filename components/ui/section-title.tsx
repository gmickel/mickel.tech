'use client';

import SplitText from '@/components/ui/split-text';

interface SectionTitleProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Animated section title with staggered character reveal on scroll.
 * Uses GSAP SplitText for smooth entrance animations.
 */
export default function SectionTitle({
  text,
  className = '',
  tag = 'h2',
}: SectionTitleProps) {
  return (
    <SplitText
      className={className}
      delay={30}
      duration={0.8}
      ease="power3.out"
      from={{ opacity: 0, y: 30 }}
      rootMargin="-50px"
      splitType="chars"
      tag={tag}
      text={text}
      textAlign="left"
      threshold={0.2}
      to={{ opacity: 1, y: 0 }}
    />
  );
}
