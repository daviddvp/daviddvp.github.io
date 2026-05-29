import { SectionTitle } from '@/components/ui/SectionTitle';
import { TechTag } from '@/components/ui/TechTag';
import { stackCategories } from '@/data/stack';

export function StackPage() {
  return (
    <div className="space-y-12 page-enter">
      <SectionTitle
        label="herramientas"
        title="Stack tecnológico"
        subtitle="Las herramientas que uso regularmente, con qué las uso y por qué están en mi stack."
      />

      {stackCategories.map((category) => (
        <section key={category.category}>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xl" role="img" aria-hidden="true">{category.icon}</span>
            <h2 className="text-lg font-semibold text-text-primary">{category.category}</h2>
            <div className="h-px flex-1 bg-border ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <div key={item.name} className="card group hover:border-accent/20 transition-all">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Nota sobre el stack */}
      <div className="card bg-bg-subtle border-border">
        <p className="font-mono text-xs text-text-muted mb-2">// nota</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          El stack evoluciona. Lo que no está aquí no significa que no lo conozca,
          sino que no es lo que uso habitualmente. Si necesitas algo específico, pregunta.
        </p>
      </div>
    </div>
  );
}
