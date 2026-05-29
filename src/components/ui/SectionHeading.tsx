import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;   // p.ej. "02"
  kicker: string;  // p.ej. "ABOUT"
  title: string;
  description?: string;
}

/** Encabezado de sección con etiqueta monospace "// 02 — ABOUT". */
export function SectionHeading({ index, kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <span className="kicker">
          <span className="text-slate-500">//</span> {index} — {kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
