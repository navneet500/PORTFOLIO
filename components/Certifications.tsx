'use client';

import { ScrollReveal } from './ScrollReveal';
import { certifications, achievements } from '@/data/certifications';
import { Award, Zap } from 'lucide-react';

export function Certifications() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="certifications-heading"
    >
      <ScrollReveal>
        <h2
          id="certifications-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          Achievements
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8">
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface-elevated p-6 lg:p-8 h-full">
            <h3 className="text-heading-3 font-semibold mb-6 flex items-center gap-2 text-text-primary">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>
            <ul className="space-y-4" role="list">
              {certifications.map((c) => (
                <li key={c.name} className="border-l-2 border-accent/30 pl-4 py-1">
                  {'url' in c && c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-text-primary hover:text-accent transition-colors"
                    >
                      {c.name}
                    </a>
                  ) : (
                    <p className="text-body font-medium text-text-primary">{c.name}</p>
                  )}
                  <p className="text-small mt-0.5 text-text-muted">
                    {c.issuer}
                    {'year' in c && c.year && ` · ${c.year}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-surface-elevated p-6 lg:p-8 h-full">
            <h3 className="text-heading-3 font-semibold mb-6 flex items-center gap-2 text-text-primary">
              <Zap size={20} className="text-accent" />
              Highlights
            </h3>
            <ul className="space-y-3" role="list">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="text-body leading-relaxed flex gap-3 text-text-secondary"
                >
                  <span className="shrink-0 text-accent">-</span>
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {a.text}
                    </a>
                  ) : (
                    <span>{a.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
