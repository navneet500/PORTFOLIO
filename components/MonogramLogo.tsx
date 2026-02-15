'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Tilt = { x: number; y: number };

/**
 * Trendy 2026 3D logo with glassmorphism, animated gradients, and floating particles.
 * Modern design with depth, motion, and interactive 3D effects.
 */
export function MonogramLogo() {
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * 15;
    const rotateY = x * 15;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="w-20 h-20 relative"
      aria-label="Navneet Sharma monogram"
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Animated glow particles */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main 3D container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        className="w-20 h-20 rounded-2xl relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
              'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #6366f1 100%)',
              'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)',
              'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-sm" />

        {/* Inner glow ring */}
        <motion.div
          className="absolute inset-[1px] rounded-[19px] border border-white/20"
          animate={{
            boxShadow: [
              'inset 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
              'inset 0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)',
              'inset 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />

        {/* NS Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-[28px] font-black text-white tracking-tighter relative z-10"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.5)',
            }}
            animate={{
              textShadow: [
                '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.5)',
                '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 25px rgba(139, 92, 246, 0.6)',
                '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            NS
          </motion.span>
        </div>

        {/* Outer glow on hover */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl"
          whileHover={{
            opacity: 0.6,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

