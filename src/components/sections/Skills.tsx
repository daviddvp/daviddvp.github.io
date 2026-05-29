import { skillGroups, type Accent } from "../../data/skills";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon, type IconName } from "../ui/Icon";

/**
 * SKILLS TÉCNICAS
 * Renderiza las categorías de data/skills.ts. Cada grupo tiene un acento de
 * color (emerald | sky | violet) y un icono SVG inline.
 */

/** Mapea el acento del dato a clases utilitarias concretas (texto + borde). */
const ACCENT: Record<Accent, { text: string; ring: string }> = {
  emerald: { text: "text-emerald", ring: "border-emerald/30" },
  sky: { text: "text-sky", ring: "border-sky/30" },
  violet: { text: "text-violet", ring: "border-violet/30" },
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        kicker="STACK"
        title="Skills técnicas"
        description="La caja de herramientas con la que diseño, despliego y opero, organizada por dominio."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const accent = ACCENT[group.accent];
          return (
            <Reveal key={group.category} delay={i * 70}>
              <article className="panel group h-full p-5 transition-transform duration-300 hover:-translate-y-1">
                {/* Cabecera de la categoría */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg border bg-white/[0.02] ${accent.ring} ${accent.text}`}
                  >
                    <Icon name={group.icon as IconName} className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>

                {/* Tecnologías */}
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="tech-chip">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
