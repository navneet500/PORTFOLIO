'use client';

import { ScrollReveal } from './ScrollReveal';
import { education } from '@/data/education';

export function Education() {
  return (
    <section
      id="education"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="education-heading"
    >
      <ScrollReveal>
        <h2
          id="education-heading"
          className="text-heading-2 font-bold text-text-primary mb-12"
        >
          Education
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <article className="rounded-xl border border-border bg-surface-elevated p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-heading-3 font-semibold text-text-primary">
                    {edu.institution}
                  </h3>
                  <p className="text-body text-text-secondary mt-1">
                    {edu.degree}
                    {edu.location ? ` · ${edu.location}` : ''}
                  </p>
                </div>
                <span className="text-small font-medium text-text-muted whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-body text-accent font-semibold mt-3">{edu.detail}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
