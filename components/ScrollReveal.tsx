'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
};

/**
 * Reveals content on scroll with a smooth fade + slide-up animation.
 * Uses CSS opacity + transform for a polished entrance effect.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  y = 32,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once) observer.unobserve(entry.target);
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', visible && 'scroll-reveal-visible', className)}
      style={
        {
          '--reveal-y': `${y}px`,
          '--reveal-delay': `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
