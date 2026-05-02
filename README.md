# G-Shock Zone — Blog especializado en relojes Casio G-Shock

Proyecto React + Vite + TypeScript. Base escalable para un blog/web especializada en relojes G-Shock.

---

## Stack

| Tecnología | Versión | Por qué |
|---|---|---|
| **React 18** | 18.2 | UI declarativa y ecosistema maduro |
| **Vite** | 5.x | Build ultrarrápido, HMR instantáneo |
| **TypeScript** | 5.x | Tipado estático, autocompletado, menos bugs |
| **React Router** | 6.x | Routing declarativo SPA |
| **CSS Modules** | nativo | Estilos encapsulados sin dependencias extra |

**Sin UI library externa.** Todo el diseño es propio, más ligero y más personalizable.

---

## Estructura del proyecto

```
gshock-blog/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ArticleCard/     # Tarjeta de artículo (lista + blog)
│   │   ├── Button/          # Botón polimórfico (link, a, button)
│   │   ├── Footer/          # Footer con columnas y redes
│   │   ├── Header/          # Header fijo con scroll + menú móvil
│   │   ├── Layout/          # Wrapper header + main + footer
│   │   ├── ModelCard/       # Tarjeta de modelo G-Shock
│   │   ├── SectionTitle/    # Título de sección con overline
│   │   └── Timeline/        # Timeline visual de la historia
│   ├── data/                # Datos mockeados (sustituir por API/CMS)
│   │   ├── articles.ts      # Artículos + helpers de filtrado
│   │   └── models.ts        # Modelos G-Shock + timeline
│   ├── pages/               # Páginas del router
│   │   ├── Home/            # Landing principal
│   │   ├── Models/          # Catálogo de modelos + glosario + timeline
│   │   ├── Blog/            # Listado de artículos con filtro por categoría
│   │   ├── Article/         # Artículo individual con TOC
│   │   ├── BuyingGuide/     # Guía de compra por uso y presupuesto
│   │   └── Contact/         # Formulario + info de colaboración
│   ├── types/
│   │   └── index.ts         # Tipos TypeScript compartidos
│   ├── App.tsx              # Router principal
│   ├── index.css            # Variables CSS globales + reset + utilidades
│   ├── main.tsx             # Punto de entrada React
│   └── vite-env.d.ts        # Declaraciones de tipos para Vite/CSS Modules
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Instalación y arranque

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Entra en la carpeta
cd gshock-blog

# 2. Instala dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev

# Abre http://localhost:5173
```

### Otros comandos

```bash
npm run build    # Compila para producción (carpeta /dist)
npm run preview  # Previsualiza el build de producción
```

---

## Páginas disponibles

| Ruta | Página |
|---|---|
| `/` | Home / Presentación |
| `/modelos` | Catálogo de modelos + Glosario + Timeline |
| `/blog` | Listado de artículos con filtros |
| `/blog/:slug` | Artículo individual |
| `/guia-de-compra` | Guía de compra por uso y presupuesto |
| `/contacto` | Formulario de contacto |

---

## Cómo añadir contenido

### Añadir un artículo nuevo

Abre `src/data/articles.ts` y agrega un objeto al array `articles`:

```ts
{
  id: '7',
  slug: 'mi-nuevo-articulo',          // URL amigable, sin espacios ni tildes
  title: 'Título del artículo',
  excerpt: 'Resumen corto que aparece en las cards...',
  category: 'resenas',                 // resenas | comparativas | guias | historia | mantenimiento | autenticidad
  author: 'Tu nombre',
  date: '2024-12-01',
  readTime: 8,                         // minutos estimados de lectura
  image: 'https://...',               // URL de imagen de portada
  featured: false,                     // true = aparece en el home
  tags: ['tag1', 'tag2'],
  relatedIds: ['1', '2'],             // IDs de artículos relacionados
  content: [
    { heading: 'Introducción', body: 'Texto del primer apartado...' },
    { heading: 'Otra sección', body: 'Más texto...' },
  ],
},
```

### Añadir un modelo

Abre `src/data/models.ts` y agrega al array `models`:

```ts
{
  id: 'mi-modelo',
  name: 'GA-900-1A',
  family: 'Otros',
  yearIntroduced: 2021,
  image: 'https://...',
  tagline: 'Tagline corto y directo',
  description: 'Descripción completa...',
  keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
  targetUser: 'A quién va dirigido',
  priceRange: '€80–€100',
  types: ['analogico-digital'],
  isIconic: false,
},
```

---

## Variables CSS principales

Todas las variables de diseño están en `src/index.css`:

```css
--bg-primary    → Negro principal del fondo
--bg-secondary  → Gris oscuro (secciones alternadas)
--accent-red    → Rojo G-Shock (#c8102e)
--accent-yellow → Amarillo para precios y badges
--text-primary  → Blanco suave
--text-secondary→ Gris claro para texto de apoyo
```

Para cambiar el color de acento de toda la web, modifica solo `--accent-red`.

---

## Próximas mejoras sugeridas

### Contenido
- [ ] Añadir 20+ artículos reales con SEO optimizado
- [ ] Ampliar catálogo a 30+ modelos con fotos propias
- [ ] Sección "Modelo del mes" en el home

### Funcionalidad
- [ ] Buscador global (Fuse.js o Algolia)
- [ ] Comparador de modelos lado a lado
- [ ] Sistema de comentarios (Disqus o Giscus)
- [ ] Newsletter con Mailchimp o ConvertKit

### Técnico
- [ ] Migrar a Next.js para SSR/SSG y mejor SEO
- [ ] Conectar a un CMS headless (Sanity, Contentful o Notion API)
- [ ] Añadir sitemap.xml y robots.txt
- [ ] Implementar Open Graph y meta tags por página
- [ ] Google Analytics o Plausible Analytics
- [ ] PWA (offline, instalable)

### Monetización
- [ ] Integración con Amazon Affiliates para los modelos
- [ ] Sección de tiendas verificadas por modelo

---

## Licencia

Uso personal. No afiliado a Casio Inc.
