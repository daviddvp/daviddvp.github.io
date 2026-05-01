import {
  Home, User, FolderGit2, Mail, Layers,
  ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import { NavLinkItem } from './NavLinkItem';
import { profile } from '@/data/profile';

const navItems = [
  { to: '/',           label: 'Inicio',      icon: Home },
  { to: '/experiencia', label: 'Experiencia', icon: User },
  { to: '/proyectos',  label: 'Proyectos',   icon: FolderGit2 },
  { to: '/stack',      label: 'Stack',       icon: Layers },
  { to: '/contacto',   label: 'Contacto',    icon: Mail },
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: SidebarProps) {
  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo / Marca */}
      <div className={`
        flex items-center gap-3 px-4 py-4 border-b border-border
        ${collapsed ? 'justify-center px-2' : ''}
      `}>
        {/* Terminal icon como logo */}
        <div className="w-8 h-8 rounded bg-accent-subtle border border-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-accent font-mono text-xs font-bold">$_</span>
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-text-primary truncate">{profile.name}</p>
            <p className="text-xs text-text-muted truncate font-mono">{profile.role}</p>
          </div>
        )}
      </div>

      {/* Availability badge */}
      {!collapsed && (
        <div className="mx-3 mt-3">
          <div className={`
            flex items-center gap-2 px-3 py-2 rounded text-xs font-mono border
            ${profile.availability === 'available'
              ? 'bg-accent-subtle border-accent/20 text-accent'
              : profile.availability === 'open'
              ? 'bg-bg-subtle border-border text-text-secondary'
              : 'bg-bg-subtle border-border text-text-muted'
            }
          `}>
            <span className={`
              w-1.5 h-1.5 rounded-full flex-shrink-0
              ${profile.availability === 'available' ? 'bg-accent animate-pulse-dot' : 'bg-text-muted'}
            `} />
            <span className="truncate">{profile.availabilityLabel}</span>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className={`flex-1 px-2 py-4 space-y-1 overflow-y-auto ${collapsed ? 'px-2' : 'px-3'}`}>
        <p className={`text-xs font-mono text-text-muted uppercase tracking-wider mb-3 ${collapsed ? 'text-center' : 'px-2'}`}>
          {collapsed ? '—' : '// nav'}
        </p>
        {navItems.map((item) => (
          <NavLinkItem
            key={item.to}
            {...item}
            collapsed={collapsed}
            onClick={onCloseMobile}
          />
        ))}
      </nav>

      {/* Footer del sidebar */}
      <div className={`px-3 py-3 border-t border-border ${collapsed ? 'px-2' : ''}`}>
        {!collapsed && (
          <div className="flex gap-3 mb-3 px-1">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent transition-colors font-mono"
            >
              gh
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent transition-colors font-mono"
            >
              li
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-xs text-text-muted hover:text-accent transition-colors font-mono"
            >
              mail
            </a>
          </div>
        )}

        {/* Botón collapse — solo desktop */}
        <button
          onClick={onToggleCollapse}
          className="hidden md:flex w-full items-center justify-center gap-2 px-2 py-2 rounded
                     text-text-muted hover:text-text-primary hover:bg-bg-elevated
                     transition-all text-xs border border-transparent hover:border-border"
          title={collapsed ? 'Expandir menú' : 'Colapsar menú'}
        >
          {collapsed ? <ChevronRight size={14} /> : <><ChevronLeft size={14} /><span>Colapsar</span></>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* === DESKTOP SIDEBAR === */}
      <aside
        className={`
          hidden md:flex flex-col fixed left-0 top-0 bottom-0 z-30
          bg-bg-secondary border-r border-border shadow-sidebar
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-16' : 'w-[260px]'}
        `}
      >
        {sidebarContent}
      </aside>

      {/* === MOBILE DRAWER === */}
      {/* Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`
          md:hidden fixed left-0 top-0 bottom-0 z-50 w-[280px]
          bg-bg-secondary border-r border-border shadow-sidebar
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Botón cerrar mobile */}
        <button
          onClick={onCloseMobile}
          className="absolute top-4 right-4 p-1.5 rounded text-text-muted hover:text-text-primary
                     hover:bg-bg-elevated transition-all"
          aria-label="Cerrar menú"
        >
          <X size={16} />
        </button>
        {sidebarContent}
      </aside>
    </>
  );
}
