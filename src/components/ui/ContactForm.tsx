import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: conectar con backend, servicio de email (Resend, Formspree, etc.)
    // Por ahora simulamos el envío
    await new Promise((r) => setTimeout(r, 1000));

    console.log('Form data:', form);
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={40} className="text-accent" />
        <div>
          <p className="font-semibold text-text-primary">Mensaje recibido</p>
          <p className="text-sm text-text-secondary mt-1">Te responderé en cuanto pueda. Gracias por escribir.</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          className="btn-outline text-xs"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="card space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="form-input"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="form-input"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="form-label">Asunto</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="¿De qué quieres hablar?"
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="message" className="form-label">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntame el contexto, el reto, o lo que necesitas..."
          rows={5}
          className="form-input resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || !form.name || !form.email || !form.message}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="animate-pulse">Enviando...</span>
          </>
        ) : (
          <>
            <Send size={15} />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        El formulario está preparado para conectarse a un backend. Los datos no se envían aún.
      </p>
    </div>
  );
}
