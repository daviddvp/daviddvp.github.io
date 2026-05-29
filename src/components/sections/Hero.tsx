import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";

/**
 * HERO
 * Presentación principal: nombre, rol, titular de posicionamiento, CTAs
 * y una "ventana de terminal" decorativa que simula un despliegue.
 * Usa el sistema de diseño base/emerald y los datos de data/profile.ts.
 */

/** Roles que rotan con efecto máquina de escribir bajo el nombre. */
const ROLES = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Platform Engineer",
  "Site Reliability Engineer",
];

/** Hook minimalista de "typewriter": teclea y borra cada palabra en bucle. */
function useTypewriter(words: string[], typeMs = 80, pauseMs = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: number;
    if (!deleting && text === word) {
      t = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
    } else {
      t = window.setTimeout(
        () =>
          setText((prev) =>
            deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
          ),
        deleting ? typeMs / 2 : typeMs
      );
    }
    return () => window.clearTimeout(t);
  }, [text, deleting, i, words, typeMs, pauseMs]);

  return text;
}

/** Líneas de la "terminal" del hero (puramente decorativas). */
const TERMINAL_LINES: { prompt: boolean; text: string; cls: string }[] = [
  { prompt: true, text: "terraform apply -auto-approve", cls: "text-slate-200" },
  { prompt: false, text: "Apply complete! 24 added, 0 changed, 0 destroyed.", cls: "text-emerald-soft" },
  { prompt: true, text: "kubectl rollout status deploy/api", cls: "text-slate-200" },
  { prompt: false, text: 'deployment "api" successfully rolled out', cls: "text-emerald-soft" },
  { prompt: true, text: "argocd app sync platform --prune", cls: "text-slate-200" },
  { prompt: false, text: "Synced  Healthy  0 issues", cls: "text-sky-soft" },
];

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="container-px grid items-center gap-12 pb-16 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Columna izquierda: copy */}
        <div className="animate-fade-up">
          <span className="kicker">
            <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-emerald" />
            initializing profile
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          {/* Rol con typewriter */}
          <p className="mt-4 font-mono text-lg text-sky-soft sm:text-2xl" aria-label={profile.role}>
            <span className="text-slate-500">&gt;</span> {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-blink bg-sky-soft align-middle" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>
          <p className="mt-2 max-w-xl font-mono text-sm text-slate-500">
            {profile.subtagline}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Ver proyectos <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Icon name="mail" className="h-4 w-4" /> Contactar
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-emerald"
            >
              <Icon name="download" className="h-4 w-4" /> Descargar CV
            </a>
          </div>
        </div>

        {/* Columna derecha: terminal + métricas */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="panel terminal-scan relative overflow-hidden shadow-card">
            {/* Barra de título */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
              <span className="ml-2 font-mono text-xs text-slate-500">deploy.sh — zsh</span>
            </div>
            {/* Cuerpo */}
            <div className="space-y-1.5 p-4 font-mono text-sm leading-relaxed sm:p-5">
              {TERMINAL_LINES.map((line, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${450 + idx * 300}ms` }}
                >
                  {line.prompt && <span className="text-emerald">$</span>}
                  <span className={line.cls}>{line.text}</span>
                </div>
              ))}
              <div
                className="flex gap-2 opacity-0 animate-fade-up"
                style={{ animationDelay: `${450 + TERMINAL_LINES.length * 300}ms` }}
              >
                <span className="text-emerald">$</span>
                <span className="inline-block h-5 w-2.5 animate-blink bg-slate-300" />
              </div>
            </div>
          </div>

          {/* Métricas de cabecera (estética dashboard) */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {profile.heroStats.map((stat) => (
              <div key={stat.label} className="panel px-3 py-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-emerald-soft">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
