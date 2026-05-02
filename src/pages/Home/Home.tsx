import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ModelCard from '../../components/ModelCard/ModelCard'
import Button from '../../components/Button/Button'
import { getFeaturedArticles } from '../../data/articles'
import { getIconicModels } from '../../data/models'
import styles from './Home.module.css'

const featuredArticles = getFeaturedArticles()
const iconicModels = getIconicModels()

const STATS = [
  { value: '40+', label: 'Años de historia' },
  { value: '200m', label: 'Resistencia al agua' },
  { value: '600+', label: 'Modelos publicados' },
  { value: '100M', label: 'Unidades vendidas' },
]

const WHY = [
  { icon: '⬛', title: 'Indestructible', desc: 'El G-Shock nació para sobrevivir a una caída de 10 metros. Desde entonces, no ha parado de endurecerse.' },
  { icon: '☀️', title: 'Autosuficiente', desc: 'Tough Solar y Multi-Band 6 eliminan las pilas y los errores de hora para siempre. Funciona y punto.' },
  { icon: '🎯', title: 'Sin concesiones', desc: 'Diseñado sin compromisos estéticos ni funcionales. No es un reloj bonito: es el reloj correcto.' },
  { icon: '📡', title: 'Tecnología real', desc: 'Brújula, altímetro, GPS, Bluetooth, sincronización atómica. Funciones que usas de verdad.' },
]

export default function Home() {
  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroBgGrid} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroDot} />
            <span className={styles.heroEyebrowText}>Blog independiente sobre G-Shock</span>
          </div>
          <h1 className={styles.heroTitle}>
            El reloj que<br />
            <span className={styles.heroTitleRed}>sobrevive todo</span>
          </h1>
          <p className={styles.heroSub}>
            Reseñas honestas, guías de compra y la historia completa de los relojes
            Casio G-Shock. Desde el DW-5000C hasta el último CasiOak.
          </p>
          <div className={styles.heroCta}>
            <Button to="/modelos" size="lg">Explorar modelos</Button>
            <Button to="/blog" variant="outline" size="lg">Leer el blog</Button>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className="container">
            <div className={styles.statsGrid}>
              {STATS.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES G-SHOCK ───────────────────────────── */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <SectionTitle
                overline="Qué es G-Shock"
                title="Un reloj diseñado para no romperse nunca"
                subtitle="En 1983, Kikuo Ibe, ingeniero de Casio, se obsesionó con una idea: crear el reloj más resistente del mundo. Después de más de 200 prototipos lanzados desde el baño del edificio de Casio, nació el DW-5000C. El resto es historia."
              />
              <div className={styles.aboutCta}>
                <Button to="/modelos" variant="outline">Ver la historia completa</Button>
              </div>
            </div>
            <div className={styles.whyGrid}>
              {WHY.map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <span className={styles.whyIcon}>{w.icon}</span>
                  <h4 className={styles.whyTitle}>{w.title}</h4>
                  <p className={styles.whyDesc}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODELOS ICÓNICOS ──────────────────────────── */}
      <section className={`section ${styles.models}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionTitle
              overline="Modelos destacados"
              title="Los G-Shock que debes conocer"
              subtitle="Tres décadas de evolución condensadas en los modelos que han definido la historia de la línea."
            />
            <Button to="/modelos" variant="outline">Ver todos los modelos</Button>
          </div>
          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {iconicModels.map(m => <ModelCard key={m.id} model={m} />)}
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS DESTACADOS ──────────────────────── */}
      <section className={`section ${styles.articles}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionTitle
              overline="Del blog"
              title="Últimos artículos"
              subtitle="Reseñas en profundidad, comparativas y guías para elegir el G-Shock que mejor se adapta a ti."
            />
            <Button to="/blog" variant="outline">Ver todos los artículos</Button>
          </div>
          <div className="grid-2" style={{ marginTop: '2.5rem' }}>
            {featuredArticles.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA COMPRA ───────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <div className="stripe-red" />
              <h3 className={styles.ctaTitle}>¿No sabes qué G-Shock elegir?</h3>
              <p className={styles.ctaText}>
                Nuestra guía de compra filtra por uso, presupuesto y tipo de reloj para que
                no pierdas tiempo en catálogos de 200 modelos.
              </p>
            </div>
            <Button to="/guia-de-compra" size="lg">Ir a la guía →</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
