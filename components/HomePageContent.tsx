'use client';

import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { PageEntryFade } from '@/components/PageEntryFade';
import { LazySection } from '@/components/LazySection';
import { SectionPlaceholder } from '@/components/SectionPlaceholder';

const SectionDivider = () => <hr className="max-w-6xl mx-auto border-t border-border/40" />;

const DynamicExperience = dynamic(
  () => import('@/components/Experience').then((m) => ({ default: m.Experience })),
  { ssr: false }
);

const DynamicProjects = dynamic(
  () => import('@/components/Projects').then((m) => ({ default: m.Projects })),
  { ssr: false }
);

const DynamicCertifications = dynamic(
  () => import('@/components/Certifications').then((m) => ({ default: m.Certifications })),
  { ssr: false }
);

const DynamicContact = dynamic(
  () => import('@/components/Contact').then((m) => ({ default: m.Contact })),
  { ssr: false }
);

export function HomePageContent() {
  return (
    <PageEntryFade>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <LazySection Component={DynamicExperience} placeholder={<SectionPlaceholder />} staggerDelay={0} />
      <SectionDivider />
      <LazySection Component={DynamicProjects} placeholder={<SectionPlaceholder />} staggerDelay={0.05} />
      <SectionDivider />
      <LazySection Component={DynamicCertifications} placeholder={<SectionPlaceholder />} staggerDelay={0.1} />
      <SectionDivider />
      <LazySection Component={DynamicContact} placeholder={<SectionPlaceholder />} staggerDelay={0.15} />
    </PageEntryFade>
  );
}
