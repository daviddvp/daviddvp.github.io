import { principles } from "../../data/principles";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

/**
 * FORMA DE TRABAJAR / ARQUITECTURA
 * Principios de ingeniería numerados como pasos de un pipeline.
 * Datos en data/principles.ts.
 */
export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading
        index="06"
        kicker="PRINCIPLES"
        title="Cómo trabajo"
        description="Los principios que guían cada decisión de infraestructura. No son eslóganes: son la base de cómo construyo y opero sistemas."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 60}>
            <article className="panel group relative h-full overflow-hidden p-6 transition-colors">
              {/* Índice tipo paso de pipeline */}
              <span className="absolute right-5 top-5 font-mono text-xs text-slate-600">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Marcador de paso */}
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald/30 bg-emerald/[0.06] font-mono text-sm font-semibold text-emerald">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-display text-base font-bold text-white">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
