'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  tags: string[];
};

const DURATION = 0.3;
const EASE = [0.22, 1, 0.36, 1] as const;

type ProjectCardProps = {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

export function ProjectCard({ project, isOpen, onToggle, className }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={false}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: DURATION, ease: EASE }}
      className={cn(
        'relative rounded-2xl border border-border',
        'bg-surface-elevated backdrop-blur-xl',
        'shadow-lg hover:shadow-xl',
        'transition-shadow duration-300 ease-out',
        'overflow-hidden min-h-0',
        className
      )}
    >
      {/* Header — title + summary (closed) or title only (expanded); always clickable */}
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'w-full text-left flex items-start justify-between gap-4',
          'px-6 py-5 lg:px-8 lg:py-6',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
          'hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors duration-200',
          isOpen && 'border-b border-border/50 bg-black/[0.02] dark:bg-white/[0.03]'
        )}
        aria-expanded={isOpen}
        aria-controls={`project-content-${project.id}`}
        id={`project-trigger-${project.id}`}
      >
        <div className="min-w-0 flex-1 pr-4">
          <h3 className="text-lg lg:text-xl font-semibold text-text-primary leading-snug tracking-tight text-balance">
            {project.title}
          </h3>
          {!isOpen && (
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed line-clamp-1">
              {project.summary}
            </p>
          )}
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION, ease: EASE }}
          className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          aria-hidden
        >
          <ChevronDown size={20} strokeWidth={2} />
        </motion.span>
      </button>

      {/* Collapsible body — smooth height (grid) + fade-in content (Framer Motion) */}
      <div
        id={`project-content-${project.id}`}
        role="region"
        aria-labelledby={`project-trigger-${project.id}`}
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: DURATION,
              ease: EASE,
              delay: isOpen ? 0.05 : 0,
            }}
            className="px-6 pb-6 pt-2 lg:px-8 lg:pb-8 lg:pt-3"
          >
            <div className="space-y-6">
              {/* Full description */}
              <p className="text-body text-text-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Key impacts */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 tracking-tight">
                  Key impact
                </h4>
                <ul className="space-y-2.5" role="list">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary leading-relaxed flex gap-2.5"
                    >
                      <span className="text-accent/80 shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-accent/5 text-accent border border-accent/10 px-2.5 py-1 text-xs font-medium tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
