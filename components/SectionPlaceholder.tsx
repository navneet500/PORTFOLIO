'use client';

/**
 * Reserves space for lazy-loaded sections to prevent CLS.
 * Minimal skeleton: same padding as sections, subtle placeholder lines.
 */
export function SectionPlaceholder() {
  return (
    <div
      className="min-h-[380px] w-full py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-hidden
    >
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-1/3 rounded bg-border/40 dark:bg-border/30" />
        <div className="h-4 w-full max-w-3xl rounded bg-border/30 dark:bg-border/20" />
        <div className="h-4 w-full max-w-2xl rounded bg-border/30 dark:bg-border/20" />
        <div className="h-4 w-3/4 max-w-xl rounded bg-border/30 dark:bg-border/20" />
      </div>
    </div>
  );
}
