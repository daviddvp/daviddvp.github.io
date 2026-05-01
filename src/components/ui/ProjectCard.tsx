import { Github, ExternalLink, BookOpen } from 'lucide-react';
import { TechTag } from './TechTag';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card group flex flex-col gap-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-mono
                               bg-accent-subtle text-accent border border-accent/20">
                ★ destacado
              </span>
            )}
          </div>
          <h3 className="mt-1 text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Links */}
        {project.links && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-text-muted hover:text-accent hover:bg-bg-elevated transition-all"
                title="Ver en GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-text-muted hover:text-accent hover:bg-bg-elevated transition-all"
                title="Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-text-muted hover:text-accent hover:bg-bg-elevated transition-all"
                title="Documentación"
              >
                <BookOpen size={15} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Descripción */}
      <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>

      {/* Problema / Solución / Resultado */}
      <div className="space-y-3 text-xs">
        <div className="flex gap-2">
          <span className="font-mono text-text-muted flex-shrink-0 pt-0.5">problema →</span>
          <p className="text-text-secondary leading-relaxed">{project.problem}</p>
        </div>
        <div className="flex gap-2">
          <span className="font-mono text-accent flex-shrink-0 pt-0.5">solución →</span>
          <p className="text-text-secondary leading-relaxed">{project.solution}</p>
        </div>
        <div className="flex gap-2">
          <span className="font-mono text-info flex-shrink-0 pt-0.5">resultado →</span>
          <p className="text-text-secondary leading-relaxed">{project.result}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/50">
        {project.technologies.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </article>
  );
}
