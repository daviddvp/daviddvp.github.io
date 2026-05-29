# Portfolio — Cloud & DevOps Engineer

Portfolio profesional para perfiles **DevOps / Cloud / Platform Engineer / SRE**.
Construido con **React + Vite + TypeScript + Tailwind CSS**, diseño oscuro tipo
*control plane* (consola de observabilidad), totalmente responsive y accesible.

## Stack

- ⚛️ React 18 + TypeScript (modo `strict`)
- ⚡ Vite 5 (dev server y build)
- 🎨 Tailwind CSS 3 con sistema de diseño propio (paleta `base/emerald/sky/violet`)
- 🧩 Componentes reutilizables y datos desacoplados del JSX
- 🪶 Iconos SVG inline propios (sin dependencias de iconos → bundle ligero, ~56 KB gzip)
- ♿ Accesible: contraste alto, navegación por teclado, `prefers-reduced-motion`, skip-link

## Requisitos

- Node.js 18+ y npm

## Instalación y ejecución

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve el build de producción localmente
npm run lint     # comprobación de tipos (tsc --noEmit)
```

## Estructura del proyecto

```
src/
├── App.tsx                 # Ensamblaje de secciones
├── main.tsx                # Punto de entrada
├── index.css               # Tailwind + clases del sistema (.panel, .kicker, .btn-*)
├── data/                   # 👈 TODO EL CONTENIDO EDITABLE VIVE AQUÍ
│   ├── profile.ts          #    Identidad, sobre mí, contacto, CV, métricas del hero
│   ├── skills.ts           #    Categorías y tecnologías
│   ├── projects.ts         #    Proyectos (problema → resultado, métrica, stack, enlaces)
│   ├── experience.ts       #    Timeline profesional
│   ├── certifications.ts   #    Certificaciones (obtenida / en-curso)
│   └── principles.ts       #    Forma de trabajar
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, Experience,
│   │                       # Certifications, Approach, Contact
│   └── ui/                 # Section, SectionHeading, Reveal, Icon
└── hooks/
    └── useInView.ts        # IntersectionObserver para animaciones on-scroll
```

## Personalización

### 1. Datos (nombre, experiencia, proyectos, enlaces)
Edita los archivos de `src/data/`. No hace falta tocar el JSX: las secciones
se generan a partir de estos arrays/objetos. Empieza por **`src/data/profile.ts`**
(nombre, rol, párrafos de "Sobre mí", email, LinkedIn, GitHub, disponibilidad, CV).

### 2. CV descargable
Coloca tu PDF en `public/` y ajusta `cvUrl` en `src/data/profile.ts`
(por defecto `/cv-david-del-valle.pdf`).

### 3. Colores y tipografía
- **Colores**: edita `theme.extend.colors` en `tailwind.config.js`
  (`base`, `emerald`, `sky`, `violet`). Cambia los acentos por categoría en
  `src/data/skills.ts` (`emerald` | `sky` | `violet`).
- **Fuentes**: cámbialas en el `<link>` de `index.html` y en
  `theme.extend.fontFamily` de `tailwind.config.js`
  (actualmente Sora · Manrope · JetBrains Mono).

### 4. Iconos
Los iconos son SVG inline definidos en `src/components/ui/Icon.tsx`. Para añadir
uno nuevo, agrega una entrada al objeto `paths` y su nombre al tipo `IconName`.

### 5. Conectar el formulario de contacto (opcional)
Por defecto el formulario abre el cliente de correo (`mailto:`), así funciona sin
backend. Para envío real, integra un servicio en `src/components/sections/Contact.tsx`,
dentro de `handleSubmit`:
- **Formspree**: `fetch('https://formspree.io/f/TU_ID', { method: 'POST', body: ... })`
- **EmailJS**: usa su SDK con tu `serviceId`/`templateId`.

## Despliegue

### Vercel / Netlify
- Build command: `npm run build`
- Output directory: `dist`
- Funciona sin configuración extra (`base: "./"` ya está fijado en `vite.config.ts`).

### GitHub Pages
1. En `vite.config.ts`, `base: "./"` ya permite servir desde subcarpeta.
2. `npm run build` y publica la carpeta `dist/` (p. ej. con la GitHub Action
   oficial de Pages o con `gh-pages`).

## Recomendaciones de mejora futuras

- **SEO**: añadir `sitemap.xml`, `robots.txt` y una imagen Open Graph (`og:image`).
- **Formulario real**: conectar Formspree/EmailJS y añadir validación y honeypot anti-spam.
- **i18n**: extraer textos a un diccionario para versión ES/EN.
- **Blog técnico**: sección de artículos (writeups de incidentes, post-mortems).
- **Tests**: Vitest + React Testing Library para los componentes con lógica (typewriter, useInView).
- **Analítica respetuosa**: Plausible o Umami (sin cookies).
- **Lighthouse CI**: presupuesto de rendimiento/accesibilidad en el pipeline.
- **Modo claro**: variante de tema con toggle (la base ya usa variables de color).

---

Construido con React, Vite y Tailwind. Edita `src/data/` y haz tuyo este portfolio.
