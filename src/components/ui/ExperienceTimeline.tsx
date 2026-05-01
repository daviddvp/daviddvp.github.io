import { TechTag } from './TechTag';
import type { ExperienceItem } from '@/types';

const typeBadge: Record<ExperienceItem['type'], string> = {
  'full-time': 'Jornada completa',
  'contract':  'Contrato',
  'freelance': 'Freelance',
  'internship':'Prácticas',
};

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Línea vertical de la timeline */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.id} className="relative pl-10">
            {/* Punto de la timeline */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-bg-card border-2 border-accent
                            flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            <div className="card">
              {/* Header del item */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-text-primary">{item.role}</h3>
                  <p className="text-sm text-accent font-medium">{item.company}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-xs flex-shrink-0">
                  <span className="font-mono text-text-secondary">{item.period}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-text-muted">{item.location}</span>
                    <span className="px-1.5 py-0.5 rounded bg-bg-subtle border border-border text-text-muted font-mono">
                      {typeBadge[item.type]}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">{item.summary}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-accent flex-shrink-0 font-mono mt-0.5">›</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                {item.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
