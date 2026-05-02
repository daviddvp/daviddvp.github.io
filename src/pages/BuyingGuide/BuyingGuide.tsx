import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ModelCard from '../../components/ModelCard/ModelCard'
import { models, getModelById } from '../../data/models'
import styles from './BuyingGuide.module.css'

const GUIDE_CATS = [
  {
    id: 'daily',
    icon: '🏙️',
    title: 'Uso diario',
    desc: 'Ligero, cómodo, resistente y con buena legibilidad. Para llevar sin pensar.',
    modelIds: ['ga2100', 'gwm5610'],
  },
  {
    id: 'sport',
    icon: '🏃',
    title: 'Deporte',
    desc: 'GPS, monitor cardíaco y modos deportivos. Para los que entrenan en serio.',
    modelIds: ['gbdh1000', 'gwm5610'],
  },
  {
    id: 'outdoor',
    icon: '⛰️',
    title: 'Outdoor / Militar',
    desc: 'Triple sensor, anti-barro, resistencia extrema. Para el campo de batalla o la montaña.',
    modelIds: ['rangeman', 'mudmaster'],
  },
  {
    id: 'collecting',
    icon: '🏅',
    title: 'Coleccionismo',
    desc: 'Ediciones limitadas, diseño icónico, historia detrás. El placer del reloj especial.',
    modelIds: ['dw5600', 'ga2100'],
  },
  {
    id: 'budget',
    icon: '💶',
    title: 'Presupuesto ajustado',
    desc: 'Máximo G-Shock por el mínimo presupuesto. Todo lo que necesitas sin gastar de más.',
    modelIds: ['dw5600', 'ga700'],
  },
  {
    id: 'diving',
    icon: '🤿',
    title: 'Buceo',
    desc: 'El único G-Shock con certificación ISO para buceo deportivo.',
    modelIds: ['frogman'],
  },
]

const BUDGET_RANGES = [
  { range: '< 80€',      models: ['dw5600'] },
  { range: '80€ – 150€', models: ['gwm5610', 'ga2100', 'ga700'] },
  { range: '150€ – 300€', models: ['rangeman', 'gbdh1000'] },
  { range: '300€+',      models: ['mudmaster', 'frogman'] },
]

export default function BuyingGuide() {
  const [activeUse, setActiveUse] = useState('daily')
  const active = GUIDE_CATS.find(c => c.id === activeUse)!
  const activeModels = active.modelIds.map(id => getModelById(id)).filter(Boolean)

  return (
    <div className="page-enter">

      <section className={styles.hero}>
        <div className="container">
          <SectionTitle
            overline="Guía de compra"
            title="¿Qué G-Shock te conviene?"
            subtitle="Filtra por uso y presupuesto. Sin leer catálogos de 200 páginas."
          />
        </div>
      </section>

      {/* Por uso */}
      <section className="section">
        <div className="container">
          <h2 className={styles.h2}>Por tipo de uso</h2>
          <div className={styles.useTabs}>
            {GUIDE_CATS.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveUse(cat.id)}
                className={`${styles.useTab} ${activeUse === cat.id ? styles.activeTab : ''}`}
              >
                <span className={styles.useIcon}>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>

          <div className={styles.usePanel}>
            <div className={styles.usePanelInfo}>
              <span className={styles.usePanelIcon}>{active.icon}</span>
              <div>
                <h3 className={styles.usePanelTitle}>{active.title}</h3>
                <p className={styles.usePanelDesc}>{active.desc}</p>
              </div>
            </div>
            <div className="grid-2" style={{ marginTop: '1.5rem' }}>
              {activeModels.map(m => m && <ModelCard key={m.id} model={m} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Por presupuesto */}
      <section className={`section ${styles.budgetSection}`}>
        <div className="container">
          <SectionTitle
            overline="Por presupuesto"
            title="¿Cuánto quieres gastar?"
            subtitle="Todos los rangos tienen excelentes opciones. El G-Shock de 60€ es igual de indestructible que el de 400€."
          />
          <div className={styles.budgetGrid} style={{ marginTop: '2.5rem' }}>
            {BUDGET_RANGES.map(br => (
              <div key={br.range} className={styles.budgetCard}>
                <div className={styles.budgetRange}>{br.range}</div>
                <ul className={styles.budgetList}>
                  {br.models.map(id => {
                    const m = getModelById(id)
                    return m ? (
                      <li key={id} className={styles.budgetItem}>
                        <span className={styles.budgetModelName}>{m.name}</span>
                        <span className={styles.budgetModelPrice}>{m.priceRange}</span>
                      </li>
                    ) : null
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="section">
        <div className="container">
          <SectionTitle
            overline="Consejos"
            title="Antes de comprar, léete esto"
          />
          <div className="grid-2" style={{ marginTop: '2rem' }}>
            {TIPS.map(t => (
              <div key={t.title} className={styles.tipCard}>
                <h4 className={styles.tipTitle}>{t.title}</h4>
                <p className={styles.tipBody}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

const TIPS = [
  { title: '1. Define tu uso antes de mirar modelos', body: 'El catálogo G-Shock es enorme. Si no sabes para qué lo quieres, acabarás eligiendo por estética y pagando funciones que nunca usarás.' },
  { title: '2. El DW-5600 vale para todo', body: 'Si no tienes claro qué modelo quieres, el DW-5600 o el GW-M5610 cubren el 95% de los casos de uso por menos de 130€.' },
  { title: '3. Compra en tiendas oficiales o distribuidores', body: 'El mercado de réplicas es inmenso. Compra en Casio.com, Amazon o distribuidores verificados. Los precios que parecen demasiado buenos suelen serlo.' },
  { title: '4. La batería solar no es magia', body: 'El Tough Solar necesita luz para cargar. En invierno o interiores con poca luz, la recarga es más lenta. No significa que falle.' },
]
