'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
  priority,
  caption,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root onOpenChange={setOpen} open={open}>
      <DialogPrimitive.Trigger asChild>
        <button
          className={cn(
            'group relative block w-full cursor-pointer overflow-hidden transition-transform hover:scale-[1.01]',
            className
          )}
          type="button"
        >
          <Image
            alt={alt}
            className="w-full"
            height={height}
            priority={priority}
            src={src}
            width={width}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
            <span className="font-mono text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click to enlarge
            </span>
          </div>
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
        <DialogPrimitive.Content className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 max-h-[90vh] max-w-[90vw] translate-x-[-50%] translate-y-[-50%] data-[state=closed]:animate-out data-[state=open]:animate-in">
          <DialogPrimitive.Title className="sr-only">
            {alt}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            {caption ?? `Full size view of ${alt}`}
          </DialogPrimitive.Description>

          <div className="relative">
            <Image
              alt={alt}
              className="max-h-[85vh] w-auto rounded-lg border border-white/10 object-contain shadow-2xl"
              height={height * 2}
              src={src}
              width={width * 2}
            />
            {caption ? (
              <p className="mt-3 text-center font-mono text-muted-foreground text-sm">
                {caption}
              </p>
            ) : null}
          </div>

          <DialogPrimitive.Close className="-top-12 absolute right-0 rounded-full border border-white/20 bg-black/50 p-2 text-white/70 transition-colors hover:bg-black/70 hover:text-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
