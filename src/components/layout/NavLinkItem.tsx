import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface NavLinkItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  collapsed?: boolean;
  onClick?: () => void;
}

export function NavLinkItem({ to, label, icon: Icon, collapsed = false, onClick }: NavLinkItemProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={({ isActive }) => `
        flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium
        transition-all duration-150 group relative
        ${isActive
          ? 'bg-accent-subtle text-accent border border-accent/20'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated border border-transparent'
        }
        ${collapsed ? 'justify-center' : ''}
      `}
    >
      {({ isActive }) => (
        <>
          <Icon
            size={16}
            className={`flex-shrink-0 transition-colors ${isActive ? 'text-accent' : 'text-text-muted group-hover:text-text-secondary'}`}
          />
          {!collapsed && (
            <span className="truncate">{label}</span>
          )}
          {/* Indicator activo */}
          {isActive && !collapsed && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          )}
        </>
      )}
    </NavLink>
  );
}
