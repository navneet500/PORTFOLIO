'use client';

import { Suspense, useState, useEffect, useRef, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { SectionPlaceholder } from './SectionPlaceholder';

const BASE_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

type LazySectionProps = {
  Component: ComponentType;
  placeholder?: React.ReactNode;
  /** Subtle stagger delay (seconds) when multiple sections enter view. */
  staggerDelay?: number;
};

/**
 * Renders a placeholder until the section enters the viewport (Intersection Observer).
 * Then loads the component with a fade + slide animation. Triggers once. No CLS.
 */
export function LazySection({ Component, placeholder, staggerDelay = 0 }: LazySectionProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: '80px 0px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Placeholder = placeholder ?? <SectionPlaceholder />;

  if (!inView) {
    return <div ref={ref}>{Placeholder}</div>;
  }

  return (
    <div ref={ref}>
      <Suspense fallback={Placeholder}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...BASE_TRANSITION, delay: staggerDelay }}
        >
          <Component />
        </motion.div>
      </Suspense>
    </div>
  );
}
