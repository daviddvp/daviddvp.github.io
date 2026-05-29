import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function Layout() {
  const [collapsed, setCollapsed]     = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Área principal — se desplaza según el ancho del sidebar */}
      <div
        className={`
          flex flex-col min-h-screen
          transition-all duration-300 ease-in-out
          ${collapsed ? 'md:ml-16' : 'md:ml-[260px]'}
        `}
      >
        <Header collapsed={collapsed} onOpenMobile={() => setMobileOpen(true)} />

        {/* Contenido de la página */}
        <main className="flex-1 pt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Outlet />
          </div>
        </main>

        {/* Footer discreto */}
        <footer className="border-t border-border py-4 px-6">
          <p className="text-xs text-text-muted text-center font-mono">
            &lt;/portfolio&gt; — hecho con React + Tailwind
          </p>
        </footer>
      </div>
    </div>
  );
}
