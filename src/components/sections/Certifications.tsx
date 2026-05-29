import { certifications } from "../../data/certifications";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

/**
 * CERTIFICACIONES
 * Rejilla de insignias. El estado ("obtenida" | "en-curso") cambia la etiqueta.
 * Datos en data/certifications.ts.
 */
export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="05"
        kicker="CREDENTIALS"
        title="Certificaciones"
        description="Acreditaciones que respaldan la experiencia con las principales plataformas cloud y herramientas cloud-native."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const inProgress = cert.status === "en-curso";
          const card = (
            <article
              className={`panel flex h-full items-start gap-4 p-5 ${
                cert.credentialUrl ? "transition-colors hover:border-emerald/40" : ""
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border bg-white/[0.02] ${
                  inProgress ? "border-sky/30 text-sky" : "border-emerald/30 text-emerald"
                }`}
              >
                <Icon name={inProgress ? "spark" : "check"} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-white">{cert.name}</h3>
                <p className="mt-1 font-mono text-xs text-slate-500">
                  {cert.issuer} · {cert.year}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      inProgress
                        ? "bg-sky/10 text-sky-soft"
                        : "bg-emerald/10 text-emerald-soft"
                    }`}
                  >
                    {inProgress ? "en curso" : "obtenida"}
                  </span>
                  {cert.credentialUrl && (
                    <span className="font-mono text-[10px] text-slate-500 group-hover:text-emerald">
                      Ver credencial →
                    </span>
                  )}
                </div>
              </div>
            </article>
          );

          return (
            <Reveal key={cert.name} delay={i * 60}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
