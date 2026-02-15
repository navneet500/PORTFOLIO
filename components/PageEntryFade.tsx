'use client';

import { motion } from 'framer-motion';

/**
 * Subtle page entry: entire content fades in (opacity 0 → 1) in 0.4s on initial load.
 */
export function PageEntryFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
