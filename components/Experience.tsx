'use client';

import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';
import { experience } from '@/data/experience';

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="experience-heading"
    >
      <ScrollReveal>
        <h2
          id="experience-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          Professional Experience
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {experience.map((job, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollReveal key={index} delay={index * 0.08}>
              <article
                className="rounded-xl border border-border bg-surface-elevated overflow-hidden transition-all duration-300 hover:border-accent/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  aria-expanded={isOpen}
                  aria-controls={`experience-content-${index}`}
                  id={`experience-trigger-${index}`}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-3 font-semibold text-text-primary">
                      {job.role}
                    </h3>
                    <p className="text-body text-accent font-medium mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-small font-medium text-text-muted whitespace-nowrap">
                      {job.period}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-border bg-surface-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      <ChevronDown size={16} className="text-text-muted" />
                    </span>
                  </div>
                </button>

                <div
                  id={`experience-content-${index}`}
                  role="region"
                  aria-labelledby={`experience-trigger-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/50 px-5 lg:px-6 pb-5 lg:pb-6 pt-1">
                      {job.location && (
                        <p className="text-small text-text-muted mb-4">
                          {job.location}
                        </p>
                      )}

                      <div className="mb-5">
                        <h4 className="text-small font-semibold text-text-primary mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3" role="list">
                          {job.outcomes.map((outcome, i) => (
                            <li
                              key={i}
                              className="text-body leading-relaxed flex gap-3 text-text-secondary"
                            >
                              <span className="shrink-0 text-accent mt-0.5">
                                -
                              </span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.technologies && job.technologies.length > 0 && (
                        <div>
                          <h4 className="text-small font-semibold text-text-primary mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-accent/10 text-accent px-2.5 py-0.5 text-[12px] font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
