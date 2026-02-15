'use client';

import { useEffect, useState } from 'react';

interface PageContentTransitionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function PageContentTransition({
  children,
  delay = 0.4,
  duration = 0.5,
}: PageContentTransitionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="relative z-10"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
}
