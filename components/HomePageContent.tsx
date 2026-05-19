'use client';

import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { PageEntryFade } from '@/components/PageEntryFade';

const SectionDivider = () => <hr className="max-w-6xl mx-auto border-t border-border/40" />;

export function HomePageContent() {
  return (
    <PageEntryFade>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Contact />
    </PageEntryFade>
  );
}
