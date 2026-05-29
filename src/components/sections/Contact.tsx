import { useState, type FormEvent, type ChangeEvent, type ReactNode } from "react";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon, type IconName } from "../ui/Icon";

/**
 * CONTACTO
 * Formulario controlado. Por defecto abre el cliente de correo (mailto),
 * así funciona sin backend. Para envío real integra Formspree/EmailJS
 * (ver README -> "Conectar el formulario").
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contact">
      <SectionHeading
        index="07"
        kicker="CONTACT"
        title="Hablemos"
        description="¿Buscas reforzar tu plataforma, automatizar tu infraestructura o mejorar la fiabilidad de tus servicios? Escríbeme."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        {/* Formulario */}
        <Reveal>
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-white/10 bg-base-900 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-emerald/60"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-white/10 bg-base-900 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-emerald/60"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Mensaje" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame en qué puedo ayudarte…"
                  className="w-full resize-y rounded-lg border border-white/10 bg-base-900 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-emerald/60"
                />
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-6">
              <Icon name="mail" className="h-4 w-4" /> Enviar mensaje
            </button>

            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-soft">
                <Icon name="check" className="h-4 w-4" />
                Se ha abierto tu cliente de correo para completar el envío.
              </p>
            )}
          </form>
        </Reveal>

        {/* Información de contacto */}
        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-4">
            {/* Disponibilidad */}
            <div className="rounded-2xl border border-emerald/30 bg-emerald/[0.06] p-5">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald" />
                disponible
              </p>
              <p className="mt-2 text-sm text-white">{profile.availability}</p>
            </div>

            {/* Datos + enlaces */}
            <div className="panel flex flex-1 flex-col gap-1 p-5">
              <Row icon="pin" label="Ubicación">
                {profile.location}
              </Row>
              <Row icon="terminal" label="Zona horaria">
                {profile.timezone}
              </Row>

              <div className="my-3 h-px bg-white/[0.06]" />

              <div className="flex flex-col gap-1">
                {profile.links.map((link) => {
                  const name = (
                    link.label.toLowerCase() === "email" ? "mail" : link.label.toLowerCase()
                  ) as IconName;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-slate-500 transition-colors group-hover:text-emerald">
                        <Icon name={name} className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{link.label}</span>
                      <span className="ml-auto font-mono text-xs text-slate-500">
                        {link.value}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Campo de formulario con etiqueta accesible. */
function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/** Fila de dato de contacto con icono. */
function Row({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-emerald">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-sm text-white">{children}</p>
      </div>
    </div>
  );
}
