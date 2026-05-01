import { Award, CheckCircle, Clock } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ExperienceTimeline } from '@/components/ui/ExperienceTimeline';
import { SkillBadge } from '@/components/ui/TechTag';
import { experience, certifications } from '@/data/experience';
import { skillGroups } from '@/data/skills';

const certStatusIcons: Record<string, React.ReactNode> = {
  active:      <CheckCircle size={14} className="text-accent" />,
  'in-progress': <Clock size={14} className="text-warn" />,
  expired:     <CheckCircle size={14} className="text-text-muted" />,
};

const certStatusLabels: Record<string, string> = {
  active:       'Activa',
  'in-progress': 'En progreso',
  expired:      'Expirada',
};

export function ExperiencePage() {
  return (
    <div className="space-y-16 page-enter">

      {/* === RESUMEN === */}
      <section>
        <SectionTitle
          label="sobre mí"
          title="Perfil profesional"
          subtitle="Dos años trabajando en entornos de producción reales. He pasado de administrar servidores bare-metal a gestionar infraestructura cloud y plataformas de contenedores. Me interesa la parte donde las cosas se rompen y hay que entender por qué."
        />
      </section>

      {/* === TIMELINE === */}
      <section>
        <SectionTitle
          label="trayectoria"
          title="Experiencia"
        />
        <ExperienceTimeline items={experience} />
      </section>

      <div className="divider" />

      {/* === SKILLS === */}
      <section>
        <SectionTitle
          label="habilidades técnicas"
          title="Skills"
          subtitle="Organizado por área. Los niveles son una estimación honesta, no marketing."
        />

        {/* Leyenda de niveles */}
        <div className="card mb-8 flex flex-wrap gap-4 items-center">
          <p className="text-xs font-mono text-text-muted">// niveles de dominio:</p>
          {[
            { level: 'learning',    label: 'Aprendiendo' },
            { level: 'working',     label: 'Trabajando' },
            { level: 'comfortable', label: 'Cómodo' },
            { level: 'proficient',  label: 'Solvente' },
          ].map(({ level, label }) => (
            <span
              key={level}
              className={`
                inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border
                ${level === 'learning'    ? 'bg-bg-subtle text-text-muted border-border' : ''}
                ${level === 'working'     ? 'bg-bg-subtle text-text-secondary border-border' : ''}
                ${level === 'comfortable' ? 'bg-accent-subtle text-accent border-accent/20' : ''}
                ${level === 'proficient'  ? 'bg-accent text-bg-primary border-accent' : ''}
              `}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <span className="text-lg" role="img" aria-hidden="true">{group.icon}</span>
                <h3 className="font-semibold text-text-primary text-sm">{group.category}</h3>
              </div>
              <div>
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* === CERTIFICACIONES === */}
      <section>
        <SectionTitle
          label="formación"
          title="Certificaciones"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="card flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <Award size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  {certStatusIcons[cert.status]}
                  <span className={
                    cert.status === 'active' ? 'text-accent' :
                    cert.status === 'in-progress' ? 'text-warn' :
                    'text-text-muted'
                  }>
                    {certStatusLabels[cert.status]}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-text-primary leading-snug">{cert.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">{cert.date}</span>
                {cert.credentialId && (
                  <span className="font-mono text-xs text-text-muted">#{cert.credentialId}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
