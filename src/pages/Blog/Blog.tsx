import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { articles, CATEGORY_LABELS } from '../../data/articles'
import type { ArticleCategory } from '../../types'
import styles from './Blog.module.css'

const CATS: { value: ArticleCategory | 'all'; label: string }[] = [
  { value: 'all',          label: 'Todo' },
  { value: 'resenas',      label: 'Reseñas' },
  { value: 'comparativas', label: 'Comparativas' },
  { value: 'guias',        label: 'Guías' },
  { value: 'historia',     label: 'Historia' },
  { value: 'mantenimiento',label: 'Mantenimiento' },
  { value: 'autenticidad', label: 'Autenticidad' },
]

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = (searchParams.get('cat') ?? 'all') as ArticleCategory | 'all'
  const [active, setActive] = useState<ArticleCategory | 'all'>(initialCat)

  const filtered = active === 'all'
    ? articles
    : articles.filter(a => a.category === active)

  const handleCat = (cat: ArticleCategory | 'all') => {
    setActive(cat)
    if (cat === 'all') searchParams.delete('cat')
    else searchParams.set('cat', cat)
    setSearchParams(searchParams)
  }

  return (
    <div className="page-enter">

      <section className={styles.hero}>
        <div className="container">
          <SectionTitle
            overline="Blog"
            title="Artículos sobre G-Shock"
            subtitle="Reseñas, comparativas, guías de compra e historia sobre los relojes más resistentes del mundo."
          />
        </div>
      </section>

      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filterRow}>
            {CATS.map(c => (
              <button
                key={c.value}
                onClick={() => handleCat(c.value)}
                className={`${styles.catBtn} ${active === c.value ? styles.active : ''}`}
              >
                {c.label}
                <span className={styles.count}>
                  {c.value === 'all'
                    ? articles.length
                    : articles.filter(a => a.category === c.value).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.empty}>No hay artículos en esta categoría aún.</p>
          ) : (
            <div className="grid-3">
              {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
