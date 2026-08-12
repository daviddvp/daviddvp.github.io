# DevOps Portfolio

Portfolio web para perfil DevOps Mid-Level. Construido con React + TypeScript + Vite + TailwindCSS.

## Stack

- **React 18** + **TypeScript**
- **Vite** — entorno de desarrollo
- **React Router v6** — navegación SPA
- **TailwindCSS** — estilos con design system centralizado
- **Lucide React** — iconos

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción (TypeScript + Vite)
npm run preview  # Previsualizar el build de producción
```

## Estructura de carpetas

```
src/
├── components/
│   ├── layout/         # Layout, Header, Sidebar, NavLinkItem
│   └── ui/             # ProjectCard, SkillBadge, TechTag, etc.
├── data/               # Archivos de datos mock (edita aquí tu info)
│   ├── profile.ts      # Nombre, bio, contacto, availability
│   ├── projects.ts     # Lista de proyectos
│   ├── skills.ts       # Skills agrupadas por categoría
│   ├── experience.ts   # Historial profesional y certificaciones
│   ├── contact.ts      # Datos de contacto
│   └── stack.ts        # Stack tecnológico detallado
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Stack.tsx
│   └── Contact.tsx
├── types/
│   └── index.ts        # Tipos TypeScript
├── App.tsx             # Rutas
├── main.tsx            # Entry point
└── index.css           # Estilos globales + Tailwind
```

## Personalización

### Cambiar tu información personal
Edita `src/data/profile.ts`:
- Nombre, rol, tagline, bio, ubicación
- Stack actual
- Propuesta de valor
- Datos de contacto

### Añadir proyectos
Edita `src/data/projects.ts`. Cada proyecto tiene:
- Nombre, descripción, problema, solución, resultado
- Tecnologías y tags para filtrar
- Links opcionales (GitHub, demo, docs)
- Flag `featured` para destacarlo

### Modificar skills
Edita `src/data/skills.ts`. Los niveles disponibles son:
- `learning` — aprendiendo
- `working` — trabajando con ello
- `comfortable` — cómodo
- `proficient` — solvente

### Cambiar la paleta de colores
Edita `tailwind.config.js`, sección `colors`. Todos los colores están centralizados ahí.

### Añadir páginas nuevas
1. Crea el componente en `src/pages/`
2. Añade la ruta en `src/App.tsx`
3. Añade el link en `src/components/layout/Sidebar.tsx`

## Siguientes pasos sugeridos

- [ ] Conectar el formulario de contacto (Resend, Formspree, EmailJS...)
- [ ] Añadir modo claro/oscuro (ThemeToggle)
- [ ] Añadir página de Homelab
- [ ] Añadir sección de notas técnicas / blog (MDX o CMS headless)
- [ ] Añadir CV descargable en PDF
- [ ] Desplegar en Vercel, Netlify o GitHub Pages
- [ ] Añadir OG tags y meta para SEO
- [ ] Configurar analytics (Plausible, Umami...)
- [ ] Añadir transiciones de página con Framer Motion

## Despliegue

```bash
# Build
npm run build

# El output está en dist/
# Compatible con cualquier hosting estático: Vercel, Netlify, GitHub Pages, S3...
```

Para Vercel:
```bash
npm i -g vercel
vercel
```
