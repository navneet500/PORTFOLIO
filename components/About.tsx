'use client';

import { ScrollReveal } from './ScrollReveal';
import { education } from '@/data/education';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const strengths = [
  'End-to-end pipeline design',
  'Cloud-native architecture',
  'Data contract governance',
  'Pipeline optimization',
  'Cross-team collaboration',
  'Cost-aware engineering',
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="about-heading"
    >
      <ScrollReveal>
        <h2
          id="about-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          About Me
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Professional Summary */}
        <ScrollReveal delay={0.1}>
          <div>
            <h3 className="text-heading-3 font-semibold text-text-primary mb-4">
              Professional Summary
            </h3>
            <p className="text-body text-text-secondary leading-relaxed mb-4">
              I&apos;m a Cloud Data &amp; AI engineer working in consumer banking, helping risk and
              business teams make better decisions with trustworthy data. Most of my work focuses on
              building and running reliable data platforms that can keep up with fast‑moving
              products and regulatory expectations.
            </p>
            <p className="text-body text-text-secondary leading-relaxed mb-6">
              Day to day, I work across the lifecycle of data initiatives: understanding what
              stakeholders need, shaping data models and workflows, and making sure what we ship is
              observable, dependable, and easy for downstream teams to use at scale.
            </p>

            <h4 className="text-body font-semibold text-text-primary mb-3">
              Key Strengths:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {strengths.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="text-small text-text-secondary">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Education */}
        <ScrollReveal delay={0.2}>
          <div>
            <h3 className="text-heading-3 font-semibold text-text-primary mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-border bg-surface-elevated p-4 transition-all duration-300 hover:border-accent/40"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-body font-semibold text-accent">
                      {edu.degree}
                    </h4>
                    <p className="text-small text-text-secondary mt-0.5">
                      {edu.institution} ({edu.period})
                    </p>
                    <p className="text-small text-text-muted mt-0.5">
                      GPA: {edu.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
