import type { TimelineEvent } from '../../types'
import styles from './Timeline.module.css'

interface Props { events: TimelineEvent[] }

export default function Timeline({ events }: Props) {
  return (
    <div className={styles.root}>
      {events.map((ev, i) => (
        <div key={ev.year} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}>
          <div className={styles.dot}>
            <span className={styles.year}>{ev.year}</span>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>{ev.title}</h4>
            {ev.model && <span className={styles.model}>{ev.model}</span>}
            <p className={styles.desc}>{ev.description}</p>
          </div>
        </div>
      ))}
      <div className={styles.line} />
    </div>
  )
}
