import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

// Extraer todas las tags únicas de los proyectos
const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesTag = activeTag === null || p.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  const featured = filtered.filter((p) => p.featured);
  const rest      = filtered.filter((p) => !p.featured);

  return (
    <div className="space-y-10 page-enter">
      <SectionTitle
        label="trabajos"
        title="Proyectos"
        subtitle={`${projects.length} proyectos documentados. Problemas reales, soluciones reales, resultados medibles.`}
      />

      {/* Filtros */}
      <div className="space-y-4">
        {/* Buscador */}
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, descripción o tecnología..."
            className="form-input pl-9"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-mono text-xs text-text-muted">filtrar:</span>
          <button
            onClick={() => setActiveTag(null)}
            className={`tech-tag ${activeTag === null ? 'border-accent text-accent bg-accent-subtle' : ''}`}
          >
            todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`tech-tag ${activeTag === tag ? 'border-accent text-accent bg-accent-subtle' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Contador de resultados */}
      {(search || activeTag) && (
        <p className="text-xs font-mono text-text-muted">
          {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          {activeTag && <span> · filtrado por <span className="text-accent">{activeTag}</span></span>}
        </p>
      )}

      {filtered.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-text-secondary text-sm">No se encontraron proyectos con ese filtro.</p>
          <button
            onClick={() => { setSearch(''); setActiveTag(null); }}
            className="btn-outline mt-4 text-xs"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Proyectos destacados */}
      {featured.length > 0 && (
        <section>
          <p className="font-mono text-xs text-text-muted mb-4">// destacados</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Resto de proyectos */}
      {rest.length > 0 && (
        <section>
          {featured.length > 0 && (
            <p className="font-mono text-xs text-text-muted mb-4">// otros proyectos</p>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
