'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, ChevronDown } from 'lucide-react';
import portraitImage from '@/data/Portfolio-picture.png';

const credentials = [
  'Barclays',
  'AWS Certified',
  'Data & DevOps',
  'Cloud & AI Platforms',
];

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 lg:px-12 xl:px-20 pt-28 md:pt-24"
      aria-label="Introduction"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
        {/* Left — Text content (staggered top to bottom) */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-heading-1 font-bold text-text-primary tracking-tight mb-4"
          >
            Navneet Sharma
          </motion.h1>

          <motion.p
            variants={item}
            className="text-heading-3 font-medium text-accent mb-6"
          >
            Cloud Data &amp; AI Engineer | AWS Certified | Banking Risk &amp; Analytics
          </motion.p>

          <motion.p
            variants={item}
            className="text-body text-text-secondary max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            I build cloud-native data pipelines on AWS that power analytics and AI at scale,
            helping business teams make faster, sharper decisions.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-10"
          >
            <a
              href="/CV_Navneet_Sharma.pdf"
              download="CV_Navneet_Sharma.pdf"
              className="hero-btn-primary group inline-flex items-center gap-2.5 rounded-lg bg-accent text-white px-6 py-3 text-small font-medium hover:bg-accent-muted hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              Resume
            </a>
            <Link
              href="#projects"
              className="hero-btn-secondary group inline-flex items-center gap-2.5 rounded-lg border border-border px-6 py-3 text-small font-medium text-text-primary hover:border-accent hover:text-accent hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#contact"
              className="hero-btn-secondary group inline-flex items-center gap-2.5 rounded-lg border border-border px-6 py-3 text-small font-medium text-text-primary hover:border-accent hover:text-accent hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2"
          >
            {credentials.map((cred, i) => (
              <span key={cred} className="flex items-center gap-4">
                <span className="text-small text-text-muted tracking-wide">{cred}</span>
                {i < credentials.length - 1 && (
                  <span className="text-border-subtle select-none" aria-hidden>
                    |
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Circular portrait (above cursor glow via z-index) */}
        <motion.div
          className="relative z-10 shrink-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2 + 0.18 * 2,
            ease,
          }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-border bg-surface-muted shadow-2xl ring-1 ring-accent/20">
            {!imgError ? (
              <img
                src={portraitImage.src}
                alt="Navneet Sharma"
                className="absolute inset-0 h-full w-full object-cover object-top"
                fetchPriority="high"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-b from-border-subtle to-surface-muted"
                aria-hidden
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors duration-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2 + 0.18 * 5 + 0.1,
          ease,
        }}
        aria-label="Scroll to about"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

