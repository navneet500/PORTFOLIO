'use client';

import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="projects-heading"
    >
      <ScrollReveal>
        <h2
          id="projects-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          Featured Projects
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <ProjectCard
              project={project}
              isOpen={openId === project.id}
              onToggle={() => setOpenId(openId === project.id ? null : project.id)}
              className="h-full"
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
