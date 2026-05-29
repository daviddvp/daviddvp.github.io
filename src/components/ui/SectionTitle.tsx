interface SectionTitleProps {
  label?: string;      // Etiqueta pequeña encima del título (tipo "// sección")
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ label, title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {label && (
        <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
          // {label}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary text-sm leading-relaxed max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-px w-8 bg-accent" />
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
