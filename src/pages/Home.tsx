import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { TechTag } from '@/components/ui/TechTag';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function HomePage() {
  return (
    <div className="space-y-16 page-enter">

      {/* === HERO === */}
      <section className="pt-4">
        {/* Etiqueta de disponibilidad */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-xs font-mono text-text-secondary">{profile.availabilityLabel}</span>
        </div>

        {/* Nombre y rol */}
        <div className="mb-6">
          <p className="font-mono text-text-muted text-sm mb-2">$ whoami</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-3">
            {profile.name}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg text-accent font-mono">{profile.role}</span>
            <span className="text-border">·</span>
            <span className="text-text-secondary text-sm">{profile.location}</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-text-secondary font-light max-w-2xl mb-6 leading-snug">
          {profile.tagline}
        </p>

        {/* Bio */}
        <p className="text-text-secondary leading-relaxed max-w-2xl mb-8">
          {profile.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link to="/proyectos" className="btn-primary">
            Ver proyectos <ArrowRight size={15} />
          </Link>
          <Link to="/contacto" className="btn-outline">
            Hablar
          </Link>
          <div className="flex items-center gap-2 ml-2">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border text-text-muted hover:text-accent hover:border-accent/30 transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border text-text-muted hover:text-accent hover:border-accent/30 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="p-2 rounded border border-border text-text-muted hover:text-accent hover:border-accent/30 transition-all"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* === ACTUALMENTE TRABAJO CON === */}
      <section className="animate-fade-in stagger-1">
        <SectionTitle
          label="stack actual"
          title="Actualmente trabajo con"
          subtitle="El conjunto de herramientas que uso en el día a día en proyectos reales."
        />
        <div className="flex flex-wrap gap-2">
          {profile.currentStack.map((tech) => (
            <TechTag key={tech} className="text-sm px-3 py-1">{tech}</TechTag>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* === LO QUE PUEDO APORTAR === */}
      <section className="animate-fade-in stagger-2">
        <SectionTitle
          label="propuesta de valor"
          title="Lo que puedo aportar"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.valueProps.map((vp, i) => (
            <div
              key={i}
              className="card group hover:border-accent/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-hidden="true">
                  {vp.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {vp.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{vp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* === QUICK LINKS === */}
      <section className="animate-fade-in stagger-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/experiencia"
            className="card group flex items-center justify-between hover:border-accent/20"
          >
            <div>
              <p className="font-mono text-xs text-text-muted mb-1">// perfil</p>
              <p className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Experiencia
              </p>
              <p className="text-xs text-text-secondary mt-0.5">Skills, timeline y certificaciones</p>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
          </Link>

          <Link
            to="/proyectos"
            className="card group flex items-center justify-between hover:border-accent/20"
          >
            <div>
              <p className="font-mono text-xs text-text-muted mb-1">// proyectos</p>
              <p className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Proyectos
              </p>
              <p className="text-xs text-text-secondary mt-0.5">Qué he construido y cómo</p>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
          </Link>

          <Link
            to="/contacto"
            className="card group flex items-center justify-between hover:border-accent/20"
          >
            <div>
              <p className="font-mono text-xs text-text-muted mb-1">// contacto</p>
              <p className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Hablar
              </p>
              <p className="text-xs text-text-secondary mt-0.5">Abierto a nuevos proyectos</p>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
