import { Fragment } from "react";
import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

/**
 * EXPERIENCIA PROFESIONAL
 * Línea temporal vertical con nodos. Las cifras de los logros se resaltan
 * automáticamente. Datos en data/experience.ts.
 */

/** Resalta números/porcentajes/medidas dentro de un texto. */
function highlightMetrics(text: string) {
  const parts = text.split(/(\d+[\d.,]*\s?(?:%|min|h|x|GB|hosts)?)/g);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="font-semibold text-emerald-soft">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="04"
        kicker="TIMELINE"
        title="Experiencia profesional"
        description="Trayectoria centrada en automatización, fiabilidad y plataformas cloud."
      />

      <div className="relative">
        {/* Línea vertical */}
        <div
          className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald/50 via-base-500 to-transparent sm:left-5"
          aria-hidden
        />

        <ol className="space-y-8">
          {experience.map((item, i) => (
            <li key={`${item.company}-${i}`} className="relative pl-12 sm:pl-16">
              {/* Nodo */}
              <span
                className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-emerald/40 bg-base-800 sm:h-[42px] sm:w-[42px]"
                aria-hidden
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
              </span>

              <Reveal delay={i * 60}>
                <div className="panel p-5 sm:p-6">
                  {/* Cabecera */}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.role} <span className="text-sky-soft">@ {item.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500">{item.period}</span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">{item.location}</p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>

                  {/* Logros */}
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald/70" />
                        <span>{highlightMetrics(h)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <span className="tech-chip">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
