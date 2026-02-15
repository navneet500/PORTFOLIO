'use client';

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Soft animated gradient wash */}
      <div className="absolute inset-0 opacity-30 bg-gradient-animated" />

      {/* Gentle accent halo behind hero area */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 15%, rgba(96,165,250,0.52), transparent 70%)',
        }}
      />
    </div>
  );
}
