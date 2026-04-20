'use client';

import { Link } from 'next-view-transitions';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface SmartLinkProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string;
  children?: ReactNode;
  prefetch?: boolean;
}

const EXTERNAL_PREFIX_RE = /^(https?:|mailto:|tel:)/i;
const DOWNLOAD_EXT_RE = /\.(pdf|zip|dmg|mp3|mp4|ics|docx)$/i;

/**
 * Single link helper used across atelier surfaces. Dispatches to:
 *
 * - Raw `<a>` when href is external (http/mailto/tel), a hash anchor
 *   (#section), or a file download (.pdf / .zip / .ics / etc).
 *
 * - `<Link>` from next-view-transitions for internal route navigation,
 *   so every intra-site click fires `document.startViewTransition`.
 *
 * className, rel, target, aria-*, onClick, etc. all forward through.
 */
export default function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const isExternal =
    EXTERNAL_PREFIX_RE.test(href) ||
    href.startsWith('#') ||
    DOWNLOAD_EXT_RE.test(href);

  if (isExternal) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
