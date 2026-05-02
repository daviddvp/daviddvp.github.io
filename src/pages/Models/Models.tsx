import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ModelCard from '../../components/ModelCard/ModelCard'
import Timeline from '../../components/Timeline/Timeline'
import { models } from '../../data/models'
import { timeline } from '../../data/models'
import type { ModelType } from '../../types'
import styles from './Models.module.css'

const FILTER_OPTIONS: { value: ModelType | 'all'; label: string }[] = [
  { value: 'all',             label: 'Todos' },
  { value: 'solar',           label: 'Solar' },
  { value: 'radio-controlled',label: 'Radio' },
  { value: 'bluetooth',       label: 'Bluetooth' },
  { value: 'analogico-digital',label: 'Ana+Digital' },
  { value: 'digital',         label: 'Digital puro' },
  { value: 'mud-resistant',   label: 'Anti-barro' },
  { value: 'diving',          label: 'Buceo' },
  { value: 'carbon-core',     label: 'Carbon Core' },
]

export default function Models() {
  const [filter, setFilter] = useState<ModelType | 'all'>('all')

  const filtered = filter === 'all'
    ? models
    : models.filter(m => m.types.includes(filter))

  return (
    <div className="page-enter">

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <SectionTitle
            overline="Familias y modelos"
            title="El universo G-Shock"
            subtitle="Más de 40 años y 600 modelos distintos. Desde el clásico cuadrado digital hasta los smartwatch de campo. Aquí tienes las familias que debes conocer."
          />
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filterLabel}>
            <span className={styles.filterIcon}>⚙</span>
            Filtrar por tecnología
          </div>
          <div className={styles.filterRow}>
            {FILTER_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`${styles.filterBtn} ${filter === opt.value ? styles.active : ''}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models grid */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.noResults}>No hay modelos con ese filtro activo.</p>
          ) : (
            <>
              <p className={styles.resultCount}>
                {filtered.length} modelo{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                {filtered.map(m => <ModelCard key={m.id} model={m} />)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Glosario */}
      <section className={`section ${styles.glossary}`}>
        <div className="container">
          <SectionTitle
            overline="Glosario"
            title="Términos clave de G-Shock"
            subtitle="Las tecnologías propias de Casio explicadas de forma directa."
          />
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {GLOSSARY.map(g => (
              <div key={g.term} className={styles.glossaryCard}>
                <h4 className={styles.glossaryTerm}>{g.term}</h4>
                <p className={styles.glossaryDef}>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <SectionTitle
            overline="Historia"
            title="40 años de G-Shock"
            subtitle="De un prototipo lanzado desde un baño al reloj más vendido en las fuerzas especiales del mundo."
            align="center"
          />
          <div style={{ marginTop: '3rem' }}>
            <Timeline events={timeline} />
          </div>
        </div>
      </section>

    </div>
  )
}

const GLOSSARY = [
  { term: 'Tough Solar',       def: 'Panel solar integrado que carga la batería con cualquier fuente de luz, eliminando el cambio de pilas.' },
  { term: 'Multi-Band 6',      def: 'Recepción de señal de radio atómica en 6 frecuencias mundiales (Japón x2, EE.UU., Europa, China). Precisión de ±1 segundo en 100.000 años.' },
  { term: 'Carbon Core Guard', def: 'Estructura interior de carbono que reduce el peso del reloj manteniendo la resistencia a golpes. Presente en el GA-2100.' },
  { term: 'Triple Sensor',     def: 'Combinación de brújula digital, altímetro/barómetro y termómetro en un mismo módulo. Presente en Rangeman y Mudmaster.' },
  { term: 'MIL-STD-810',       def: 'Norma militar estadounidense de resistencia a vibraciones, temperatura, humedad, impactos y altitud. El G-Shock la supera en varios criterios.' },
  { term: 'ISO 200M Diving',   def: 'Certificación internacional para buceo deportivo hasta 200 metros. Solo el Frogman la posee dentro de la gama G-Shock.' },
]
