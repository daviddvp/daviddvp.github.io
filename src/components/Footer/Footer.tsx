import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const LINKS = [
  { section: 'Navegar', items: [
    { label: 'Inicio', to: '/' },
    { label: 'Modelos', to: '/modelos' },
    { label: 'Blog', to: '/blog' },
    { label: 'Guía de Compra', to: '/guia-de-compra' },
    { label: 'Contacto', to: '/contacto' },
  ]},
  { section: 'Categorías', items: [
    { label: 'Reseñas', to: '/blog?cat=resenas' },
    { label: 'Comparativas', to: '/blog?cat=comparativas' },
    { label: 'Guías', to: '/blog?cat=guias' },
    { label: 'Historia', to: '/blog?cat=historia' },
    { label: 'Mantenimiento', to: '/blog?cat=mantenimiento' },
  ]},
]

const SOCIAL = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'YouTube',   href: '#', icon: 'YT' },
  { label: 'Twitter/X', href: '#', icon: 'X' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.logoG}>G</span>SHOCK ZONE
          </span>
          <p className={styles.tagline}>
            El blog independiente sobre relojes Casio G-Shock.<br/>
            Reseñas, guías y todo sobre los relojes más duros del mundo.
          </p>
          <div className={styles.social}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {LINKS.map(col => (
          <div key={col.section} className={styles.col}>
            <h4 className={styles.colTitle}>{col.section}</h4>
            <ul>
              {col.items.map(item => (
                <li key={item.label}>
                  <Link to={item.to} className={styles.colLink}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} G-Shock Zone. Blog independiente no afiliado a Casio.</p>
          <p className={styles.disclaimer}>
            Las marcas mencionadas son propiedad de sus respectivos titulares.
          </p>
        </div>
      </div>
    </footer>
  )
}
