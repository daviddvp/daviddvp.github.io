import type { GShockModel } from '../../types'
import styles from './ModelCard.module.css'

const TYPE_LABELS: Record<string, string> = {
  'solar': 'Solar',
  'radio-controlled': 'Radio',
  'bluetooth': 'BT',
  'analogico-digital': 'Ana+Dig',
  'digital': 'Digital',
  'mud-resistant': 'Anti-barro',
  'diving': 'Buceo',
  'carbon-core': 'Carbon',
}

interface Props { model: GShockModel }

export default function ModelCard({ model }: Props) {
  return (
    <article className={`${styles.card} ${model.isIconic ? styles.iconic : ''}`}>
      {model.isIconic && <span className={styles.iconicBadge}>Icónico</span>}

      <div className={styles.imageWrap}>
        <img src={model.image} alt={model.name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.types}>
          {model.types.map(t => (
            <span key={t} className={styles.typeTag}>{TYPE_LABELS[t] ?? t}</span>
          ))}
        </div>

        <h3 className={styles.name}>{model.name}</h3>
        <p className={styles.tagline}>{model.tagline}</p>
        <p className={styles.desc}>{model.description}</p>

        <ul className={styles.features}>
          {model.keyFeatures.slice(0, 4).map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div className={styles.meta}>
            <span className={styles.year}>Desde {model.yearIntroduced}</span>
            <span className={styles.price}>{model.priceRange}</span>
          </div>
          <p className={styles.target}>
            <span>Para: </span>{model.targetUser}
          </p>
        </div>
      </div>
    </article>
  )
}
