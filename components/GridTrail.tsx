'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const GRID_SIZE_DARK = 36;
const GRID_SIZE_LIGHT = 45; // 1/4 bigger in light mode for clearer visibility
const CELL_HIT_RADIUS_DARK = 24;
const CELL_HIT_RADIUS_LIGHT = 30; // proportional to larger cell
const MAX_OPACITY = 0.55; // clear but not harsh
const FADE_SPEED = 0.97; // moderate linger, then fade

// Dark: proper blue (saturated). Light: darker blue-gray so trail is clearly visible on light bg
const DARK_COLOR = { r: 96, g: 165, b: 250 }; // blue-400, clear blue on dark
const LIGHT_COLOR = { r: 51, g: 65, b: 85 }; // slate-700, strong contrast on light

/**
 * Grid trail: complete square outlines appear along the cursor path and fade out.
 * Minimal, smooth, performance-friendly.
 */
export function GridTrail() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const gridOpacity = useRef<Map<string, number>>(new Map());
  const rafId = useRef<number>(0);
  const prevLight = useRef<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointer(hasPointer);
    if (hasPointer && typeof window !== 'undefined') {
      mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }
  }, []);

  useEffect(() => {
    if (!mounted || !isPointer || reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gridOpacity.current.clear();
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const setMousePos = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const isLight = document.documentElement.classList.contains('light');
      if (prevLight.current !== null && prevLight.current !== isLight) {
        gridOpacity.current.clear();
      }
      prevLight.current = isLight;

      const gridSize = isLight ? GRID_SIZE_LIGHT : GRID_SIZE_DARK;
      const hitRadius = isLight ? CELL_HIT_RADIUS_LIGHT : CELL_HIT_RADIUS_DARK;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      const cellsToUpdate = new Set<string>();

      for (let col = 0; col <= cols; col++) {
        for (let row = 0; row <= rows; row++) {
          const cx = col * gridSize + gridSize / 2;
          const cy = row * gridSize + gridSize / 2;
          const dist = Math.hypot(mx - cx, my - cy);
          if (dist < hitRadius) cellsToUpdate.add(`${col},${row}`);
        }
      }
      gridOpacity.current.forEach((_, key) => cellsToUpdate.add(key));

      cellsToUpdate.forEach((key) => {
        const [col, row] = key.split(',').map(Number);
        const cx = col * gridSize + gridSize / 2;
        const cy = row * gridSize + gridSize / 2;
        const dist = Math.hypot(mousePos.current.x - cx, mousePos.current.y - cy);

        let opacity = gridOpacity.current.get(key) ?? 0;

        if (dist < hitRadius) {
          const t = 1 - dist / hitRadius;
          opacity = Math.max(opacity, t * MAX_OPACITY);
        } else {
          opacity *= FADE_SPEED;
        }

        if (opacity < 0.008) gridOpacity.current.delete(key);
        else gridOpacity.current.set(key, opacity);
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const c = isLight ? LIGHT_COLOR : DARK_COLOR;

      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      gridOpacity.current.forEach((opacity, key) => {
        if (opacity < 0.008) return;
        const [col, row] = key.split(',').map(Number);
        const x = col * gridSize;
        const y = row * gridSize;
        const drawOp = isLight ? Math.min(opacity * 1.35, 0.82) : opacity;
        ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${drawOp})`;
        ctx.strokeRect(x + 0.5, y + 0.5, gridSize - 1, gridSize - 1);
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', setMousePos, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', setMousePos);
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, isPointer, reduceMotion]);

  if (!mounted || !isPointer || reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    />
  );
}
