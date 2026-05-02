import { useParams, Link } from 'react-router-dom'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import Button from '../../components/Button/Button'
import { getArticleBySlug, getRelatedArticles, CATEGORY_LABELS } from '../../data/articles'
import styles from './ArticlePage.module.css'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug ?? '')

  if (!article) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h2>Artículo no encontrado</h2>
          <Button to="/blog" variant="outline">← Volver al blog</Button>
        </div>
      </div>
    )
  }

  const related = getRelatedArticles(article.relatedIds ?? [])
  const formatted = new Date(article.date).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <div className="page-enter">

      {/* Header */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{CATEGORY_LABELS[article.category] ?? article.category}</span>
          </div>

          <div className={styles.category}>{CATEGORY_LABELS[article.category]}</div>
          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.meta}>
            <span className={styles.author}>Por {article.author}</span>
            <span className={styles.sep}>·</span>
            <time>{formatted}</time>
            <span className={styles.sep}>·</span>
            <span>{article.readTime} min de lectura</span>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className={styles.featuredImage}>
        <img src={article.image} alt={article.title} />
      </div>

      {/* Content */}
      <div className="container">
        <div className={styles.layout}>

          {/* Table of contents */}
          {article.content && article.content.some(s => s.heading) && (
            <aside className={styles.toc}>
              <div className={styles.tocInner}>
                <h4 className={styles.tocTitle}>Índice</h4>
                <ol className={styles.tocList}>
                  {article.content
                    .filter(s => s.heading)
                    .map((s, i) => (
                      <li key={i}>
                        <a href={`#section-${i}`}>{s.heading}</a>
                      </li>
                    ))}
                </ol>
              </div>
            </aside>
          )}

          {/* Article body */}
          <article className={styles.body}>
            <p className={styles.lead}>{article.excerpt}</p>

            {article.content?.map((section, i) => (
              <div key={i} id={`section-${i}`} className={styles.section}>
                {section.heading && (
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                )}
                <p className={styles.sectionBody}>{section.body}</p>
              </div>
            ))}

            {/* Tags */}
            <div className={styles.tags}>
              {article.tags.map(t => (
                <span key={t} className={styles.tag}>#{t}</span>
              ))}
            </div>

            <div className={styles.backLink}>
              <Button to="/blog" variant="outline" size="sm">← Volver al blog</Button>
            </div>
          </article>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h3 className={styles.relatedTitle}>Artículos relacionados</h3>
            <div className="grid-3">
              {related.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
