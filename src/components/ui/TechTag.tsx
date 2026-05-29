// === TechTag: etiqueta pequeña para tecnologías ===
interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechTag({ children, className = '' }: TechTagProps) {
  return (
    <span className={`tech-tag ${className}`}>
      {children}
    </span>
  );
}

// === SkillBadge: badge con nivel de dominio ===
import { skillLevelLabels, skillLevelColors } from '@/data/skills';
import type { Skill } from '@/types';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const colorClass = skillLevelColors[skill.level] ?? skillLevelColors.learning;
  const label = skillLevelLabels[skill.level] ?? skill.level;

  return (
    <div className="group flex items-start justify-between gap-3 py-2.5 border-b border-border/50 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-text-primary">{skill.name}</span>
          <span className={`
            inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono border
            ${colorClass}
          `}>
            {label}
          </span>
        </div>
        {skill.note && (
          <p className="mt-0.5 text-xs text-text-muted leading-relaxed">{skill.note}</p>
        )}
      </div>
    </div>
  );
}
