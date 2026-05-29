import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Certifications } from "./components/sections/Certifications";
import { Approach } from "./components/sections/Approach";
import { Contact } from "./components/sections/Contact";

/**
 * Punto de ensamblaje del portfolio.
 * El orden de las secciones se controla aquí; cada una es independiente
 * y consume sus datos desde /src/data.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      {/* Enlace de salto para accesibilidad (visible solo al tabular) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-emerald focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-base-900"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
