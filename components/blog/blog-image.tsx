import Image from 'next/image';
import type { ReactElement } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function BlogImage({
  src,
  alt,
  caption,
  priority = false,
}: BlogImageProps): ReactElement {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-hidden rounded-lg border border-white/10">
        <Image
          alt={alt}
          className="h-auto w-full"
          height={800}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          src={src}
          width={1400}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-white/40">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
