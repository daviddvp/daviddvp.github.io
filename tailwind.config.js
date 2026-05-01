/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // === PALETA MATE — MODO OSCURO (default) ===
      colors: {
        // Fondos
        'bg-primary':    '#0d1117',   // Fondo principal — azul-negro profundo
        'bg-secondary':  '#161b22',   // Fondo secundario — sidebar, drawer
        'bg-card':       '#1c2128',   // Tarjetas y paneles
        'bg-elevated':   '#21262d',   // Hover de tarjetas, elementos elevados
        'bg-subtle':     '#262c36',   // Fondo de código, badges
        // Texto
        'text-primary':  '#e6edf3',   // Texto principal — blanco suave
        'text-secondary':'#8b949e',   // Texto secundario — gris azulado
        'text-muted':    '#484f58',   // Texto desactivado, placeholders
        // Acento
        'accent':        '#3fb950',   // Verde terminal — acento principal
        'accent-dim':    '#238636',   // Verde oscuro — hover del acento
        'accent-subtle': '#0d2e1c',   // Verde muy apagado — fondos de badges
        // Bordes
        'border':        '#30363d',   // Borde estándar
        'border-strong': '#484f58',   // Borde activo/hover
        // Estados
        'info':          '#58a6ff',   // Azul informativo
        'warn':          '#d29922',   // Amarillo advertencia
        'ok':            '#3fb950',   // Verde OK (alias de accent)
      },
      fontFamily: {
        // Tipografía técnica — IBM Plex
        sans:  ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono:  ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'sm':   ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1rem',     { lineHeight: '1.625rem' }],
        'lg':   ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':   ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        '3xl':  ['1.875rem', { lineHeight: '2.375rem' }],
        '4xl':  ['2.25rem',  { lineHeight: '2.75rem' }],
        '5xl':  ['3rem',     { lineHeight: '1.15' }],
      },
      spacing: {
        'sidebar': '260px',
        'sidebar-collapsed': '64px',
        'header': '56px',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(48,54,61,0.7)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(63,185,80,0.2)',
        'sidebar': '4px 0 24px rgba(0,0,0,0.3)',
        'glow-accent': '0 0 12px rgba(63,185,80,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { transform: 'translateX(-100%)' },
          to:   { transform: 'translateX(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(48,54,61,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(48,54,61,0.3) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
}
