import { Link } from 'react-router-dom'
import type { Article } from '../../types'
import { CATEGORY_LABELS } from '../../data/articles'
import styles from './ArticleCard.module.css'

interface Props {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: Props) {
  const { slug, title, excerpt, category, author, date, readTime, image } = article

  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  return (
    <Link to={`/blog/${slug}`} className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
        <span className={styles.category}>{CATEGORY_LABELS[category] ?? category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.dot}>·</span>
          <time className={styles.date}>{formattedDate}</time>
          <span className={styles.dot}>·</span>
          <span className={styles.readTime}>{readTime} min</span>
        </div>
        <span className={styles.readMore}>Leer artículo →</span>
      </div>
    </Link>
  )
}
