'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';
import type { SkillItem } from '@/data/skills';
import { skillGroups, skillIconColors } from '@/data/skills';

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <ScrollReveal>
        <h2
          id="skills-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          Skills &amp; Technologies
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, gIdx) => (
          <ScrollReveal key={group.label} delay={gIdx * 0.08}>
            <div className="rounded-xl border border-border bg-surface-elevated p-3 h-[300px] flex flex-col">
              <h3 className="text-small font-semibold text-text-primary mb-5 text-center flex-shrink-0">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent mt-1">
                {group.items.map((item) => {
                  return (
                    <SkillIcon key={item.name} item={item} />
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function SkillIcon({ item }: { item: SkillItem }) {
  const [imageError, setImageError] = useState(false);
  const brandColor = skillIconColors[item.name];

  return (
    <div className="flex flex-col items-center gap-1 group">
      <div className="skill-icon-box flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(96,165,250,0.3)] group-hover:scale-110">
        {item.icon ? (
          <div
            style={brandColor ? { color: brandColor } : {}}
            className="flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
          >
            <item.icon size={22} />
          </div>
        ) : item.iconPath && !imageError ? (
          <Image
            src={item.iconPath}
            alt={item.name}
            width={22}
            height={22}
            className="w-5 h-5 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center">
            <span className="text-[9px] font-bold text-accent/60">
              {item.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <span className="text-[10px] text-text-muted text-center leading-tight">
        {item.name}
      </span>
    </div>
  );
}
