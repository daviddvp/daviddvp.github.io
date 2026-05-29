import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactForm } from '@/components/ui/ContactForm';
import { profile } from '@/data/profile';
import { contactData } from '@/data/contact';

export function ContactPage() {
  return (
    <div className="space-y-12 page-enter">
      <SectionTitle
        label="contacto"
        title="Hablemos"
        subtitle={contactData.message}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Columna izquierda — info de contacto */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card space-y-4">
            <p className="font-mono text-xs text-text-muted">// canales directos</p>

            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded bg-bg-subtle border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                <Mail size={15} className="text-text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-text-muted font-mono">email</p>
                <p className="text-sm text-text-primary truncate group-hover:text-accent transition-colors">
                  {contactData.email}
                </p>
              </div>
            </a>

            <a
              href={contactData.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded bg-bg-subtle border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                <Github size={15} className="text-text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-text-muted font-mono">github</p>
                <p className="text-sm text-text-primary truncate group-hover:text-accent transition-colors">
                  @{contactData.github.username}
                </p>
              </div>
            </a>

            <a
              href={contactData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded bg-bg-subtle border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                <Linkedin size={15} className="text-text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-text-muted font-mono">linkedin</p>
                <p className="text-sm text-text-primary truncate group-hover:text-accent transition-colors">
                  {contactData.linkedin.username}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-bg-subtle border border-border flex items-center justify-center flex-shrink-0">
                <MapPin size={15} className="text-text-muted" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-mono">ubicación</p>
                <p className="text-sm text-text-primary">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Nota de tiempo de respuesta */}
          <div className="card bg-bg-subtle border-border">
            <p className="font-mono text-xs text-text-muted mb-2">// tiempo de respuesta</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Generalmente respondo en 24-48h. Si es urgente, LinkedIn suele ser más rápido que el email.
            </p>
          </div>
        </div>

        {/* Columna derecha — formulario */}
        <div className="lg:col-span-3">
          <p className="font-mono text-xs text-text-muted mb-4">// formulario de contacto</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
