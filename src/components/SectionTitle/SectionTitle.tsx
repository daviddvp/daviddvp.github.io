import styles from './SectionTitle.module.css'

interface Props {
  overline?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  overline, title, subtitle, align = 'left', light = false
}: Props) {
  return (
    <div className={`${styles.root} ${styles[align]} ${light ? styles.light : ''}`}>
      {overline && (
        <span className={styles.overline}>{overline}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
