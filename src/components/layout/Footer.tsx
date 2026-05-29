import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-px flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p className="font-mono">
          © {year} {profile.name} — construido con React, Vite &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors hover:text-emerald"
              aria-label={l.label}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Icon
                name={
                  (l.label.toLowerCase() === "email"
                    ? "mail"
                    : l.label.toLowerCase()) as "mail" | "linkedin" | "github"
                }
                className="h-5 w-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
