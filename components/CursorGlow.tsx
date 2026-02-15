'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Smooth lerp for cursor-follow (higher = slower, smoother) */
const LERP = 0.08;
const SIZE = 480; // diameter of the soft glow in px

/**
 * Soft gradient spotlight that follows the cursor. Renders behind content;
 * the Hero portrait uses a higher z-index so it stays above the glow.
 */
export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointer(hasPointer);
    if (hasPointer) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.current = { x: cx, y: cy };
      current.current = { x: cx, y: cy };
    }
  }, []);

  useEffect(() => {
    if (!mounted || !isPointer || reduceMotion) return;

    const el = document.getElementById('cursor-glow');
    if (!el) return;

    const setTarget = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * LERP;
      current.current.y += dy * LERP;
      el.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', setTarget, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', setTarget);
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, isPointer, reduceMotion]);

  if (!mounted || !isPointer || reduceMotion) return null;

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed left-0 top-0 z-[1] rounded-full will-change-transform"
      style={{
        width: SIZE,
        height: SIZE,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)',
        filter: 'blur(60px)',
        opacity: 0.3,
      }}
      aria-hidden
    />
  );
}
