import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#certifications", label: "Certificaciones" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-base-900/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between" aria-label="Principal">
        {/* Logo / marca */}
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-emerald/40 bg-emerald/10 text-emerald">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-emerald">@devops</span>
            <span className="animate-blink text-emerald">_</span>
          </span>
        </a>

        {/* Enlaces escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="ml-2 btn-primary px-4 py-2 text-xs">
              Hablemos <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-300 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="border-t border-white/[0.06] bg-base-900/95 backdrop-blur-md md:hidden">
          <ul className="container-px flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
