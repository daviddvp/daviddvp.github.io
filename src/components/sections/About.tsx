import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

/**
 * SOBRE MÍ
 * Párrafos editables (profile.about) + un panel "whoami" estilo neofetch.
 */

/** Pares clave:valor del panel lateral. Derivados del perfil. */
const SYSTEM_INFO: [string, string][] = [
  ["role", profile.role],
  ["focus", "Cloud · CI/CD · IaC · Observability"],
  ["location", profile.location],
  ["timezone", profile.timezone],
  ["status", profile.availability],
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        kicker="ABOUT"
        title="Sobre mí"
        description="Convierto infraestructuras frágiles y manuales en plataformas fiables, automatizadas y observables."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Texto del perfil */}
        <div className="space-y-5">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-base leading-relaxed text-slate-300">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* Panel "whoami" */}
        <Reveal delay={120}>
          <div className="panel overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
              <Icon name="terminal" className="h-4 w-4 text-emerald" />
              <span className="font-mono text-xs text-slate-500">whoami</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm">
              <p className="text-emerald">$ neofetch --profile</p>
              {SYSTEM_INFO.map(([key, value]) => (
                <div key={key} className="grid grid-cols-[84px_1fr] gap-3">
                  <span className="text-sky-soft">{key}</span>
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
              <p className="pt-1 text-slate-500"># open to interesting infra challenges</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
