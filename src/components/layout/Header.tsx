import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, { label: string; path: string }> = {
  '/':            { label: 'Inicio',       path: '~' },
  '/experiencia': { label: 'Experiencia',  path: '~/experiencia' },
  '/proyectos':   { label: 'Proyectos',    path: '~/proyectos' },
  '/stack':       { label: 'Stack',        path: '~/stack' },
  '/contacto':    { label: 'Contacto',     path: '~/contacto' },
};

interface HeaderProps {
  collapsed: boolean;
  onOpenMobile: () => void;
}

export function Header({ collapsed, onOpenMobile }: HeaderProps) {
  const location = useLocation();
  const current = pageTitles[location.pathname] ?? { label: 'Portfolio', path: '~' };

  return (
    <header
      className={`
        fixed top-0 right-0 z-20 h-14 bg-bg-primary/90 backdrop-blur-sm
        border-b border-border flex items-center px-4 gap-4
        transition-all duration-300 ease-in-out
        ${collapsed ? 'md:left-16' : 'md:left-[260px]'} left-0
      `}
    >
      {/* Botón hamburguesa — solo mobile */}
      <button
        onClick={onOpenMobile}
        className="md:hidden p-1.5 rounded text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-all"
        aria-label="Abrir menú"
      >
        <Menu size={18} />
      </button>

      {/* Breadcrumb / path estilo terminal */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-mono text-xs text-text-muted hidden sm:inline">
          {current.path}
        </span>
        <span className="text-border hidden sm:inline">/</span>
        <span className="font-mono text-xs text-accent">{current.label}</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
        <span className="font-mono text-xs text-text-muted hidden sm:inline">online</span>
      </div>
    </header>
  );
}
