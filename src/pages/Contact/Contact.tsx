import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import styles from './Contact.module.css'

interface FormState {
  name: string; email: string; subject: string; message: string
}

const SUBJECTS = [
  'Propuesta de colaboración',
  'Envío de producto para reseña',
  'Publicidad o patrocinio',
  'Corrección de contenido',
  'Pregunta sobre G-Shock',
  'Otro',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k: keyof FormState, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá la integración con el backend / Formspree / EmailJS
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <div className="page-enter">

      <section className={styles.hero}>
        <div className="container">
          <SectionTitle
            overline="Contacto"
            title="Escríbenos"
            subtitle="Para colaboraciones, propuestas, correcciones o cualquier consulta sobre G-Shock. Respondemos en menos de 48 horas."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* Sidebar info */}
            <aside className={styles.sidebar}>
              <div className={styles.colabCard}>
                <h3 className={styles.colabTitle}>Colaboraciones</h3>
                <div className={styles.colabList}>
                  {COLABS.map(c => (
                    <div key={c.title} className={styles.colabItem}>
                      <span className={styles.colabIcon}>{c.icon}</span>
                      <div>
                        <h4 className={styles.colabItemTitle}>{c.title}</h4>
                        <p className={styles.colabItemDesc}>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.socialCard}>
                <h4 className={styles.socialTitle}>También en redes</h4>
                <div className={styles.socialLinks}>
                  {SOCIALS.map(s => (
                    <a key={s.name} href={s.href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      <span className={styles.socialIcon}>{s.icon}</span>
                      <div>
                        <span className={styles.socialName}>{s.name}</span>
                        <span className={styles.socialHandle}>{s.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Gracias por escribirnos. Te responderemos en menos de 48 horas.</p>
                  <Button onClick={() => setSent(false)} variant="outline" size="sm">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Nombre *</label>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email *</label>
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Asunto *</label>
                    <select
                      className={styles.input}
                      value={form.subject}
                      onChange={e => update('subject', e.target.value)}
                      required
                    >
                      <option value="">Selecciona un asunto...</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Mensaje *</label>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" fullWidth>Enviar mensaje</Button>
                  <p className={styles.formNote}>
                    Al enviar el formulario aceptas que usemos tu email para responderte. Nada más.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

const COLABS = [
  { icon: '⌚', title: 'Reseñas de producto', desc: 'Envíanos tu G-Shock y lo analizamos en profundidad.' },
  { icon: '🤝', title: 'Colaboraciones de marca', desc: 'Acuerdos puntuales con marcas y distribuidores afines.' },
  { icon: '✍️', title: 'Artículos de invitado', desc: '¿Eres experto en G-Shock? Escribe para nosotros.' },
  { icon: '📣', title: 'Publicidad contextual', desc: 'Solo aceptamos publicidad relevante para nuestra audiencia.' },
]

const SOCIALS = [
  { name: 'Instagram', handle: '@gshockzone', href: '#', icon: '📸' },
  { name: 'YouTube',   handle: 'G-Shock Zone', href: '#', icon: '▶️' },
  { name: 'Twitter/X', handle: '@gshockzone',  href: '#', icon: '✖️' },
]
