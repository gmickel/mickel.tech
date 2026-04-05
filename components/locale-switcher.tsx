'use client';

import { usePathname } from 'next/navigation';

const dePrefix = /^\/de/;

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const targetPath = isDE
    ? pathname.replace(dePrefix, '') || '/'
    : `/de${pathname}`;

  return (
    <a
      className="cursor-none border border-white/20 px-2 py-1 font-mono text-[10px] text-white/60 transition-all hover:border-primary/50 hover:text-primary"
      href={targetPath}
    >
      {isDE ? 'EN' : 'DE'}
    </a>
  );
}
