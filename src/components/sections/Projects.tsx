import { projects } from "../../data/projects";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

/**
 * PROYECTOS DESTACADOS
 * Tarjetas con narrativa técnica (problema -> resultado), métrica destacada,
 * stack y enlaces. Datos en data/projects.ts.
 */
export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        kicker="WORK"
        title="Proyectos destacados"
        description="Cada proyecto parte de un problema real y termina en un resultado medible."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 80}>
            <article className="panel group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
              {/* Cabecera */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-emerald-soft">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2 pt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={`${link.label} — ${project.name}`}
                      className="text-slate-500 transition-colors hover:text-white"
                    >
                      <Icon
                        name={link.label.toLowerCase().includes("github") ? "github" : "arrow"}
                        className="h-5 w-5"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Métrica destacada */}
              <div className="mt-5 flex items-baseline gap-3 rounded-xl border border-emerald/20 bg-emerald/[0.06] px-4 py-3">
                <span className="font-display text-2xl font-bold text-emerald-soft">
                  {project.metric.value}
                </span>
                <span className="text-xs leading-snug text-slate-400">
                  {project.metric.label}
                </span>
              </div>

              {/* Problema / Resultado */}
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    problema
                  </dt>
                  <dd className="mt-0.5 text-slate-400">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-emerald">
                    resultado
                  </dt>
                  <dd className="mt-0.5 text-slate-300">{project.result}</dd>
                </div>
              </dl>

              {/* Stack */}
              <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <span className="tech-chip">{tech}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
