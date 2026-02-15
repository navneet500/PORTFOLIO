'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILL_DURATION = 0.45;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Thin top progress bar on initial page load. Fills 0 → 100% over ~0.45s then fades out.
 * Minimal, Apple-style; no flicker, runs once per mount.
 */
export function PageLoadBar() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsDone(true), (FILL_DURATION + 0.15) * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="fixed top-0 left-0 right-0 z-[100] h-0.5 overflow-hidden pointer-events-none bg-border/20"
          aria-hidden
        >
          <motion.div
            className="h-full bg-accent/90 dark:bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: FILL_DURATION, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
