/**
 * FORMA DE TRABAJAR / ARQUITECTURA
 * --------------------------------
 * Principios que guían cómo diseño y opero infraestructura.
 */

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  { title: "Automatización primero", description: "Si una tarea se repite, se convierte en código. El trabajo manual no escala ni es auditable." },
  { title: "Infraestructura como código", description: "Todo el estado vive en Git: versionado, revisable por PR y reproducible en cualquier entorno." },
  { title: "Seguridad desde el diseño", description: "Mínimo privilegio, secretos gestionados, imágenes escaneadas y superficie de ataque reducida por defecto." },
  { title: "Observabilidad end-to-end", description: "Métricas, logs y trazas correlacionados. Si no se puede medir, no se puede operar con confianza." },
  { title: "Escalabilidad y alta disponibilidad", description: "Diseño para el fallo: redundancia, autoescalado y degradación controlada antes que caídas." },
  { title: "Documentación clara", description: "Runbooks, diagramas y READMEs para que el conocimiento no dependa de una sola persona." },
  { title: "Mejora continua", description: "Post-mortems sin culpa, SLOs revisados y deuda técnica priorizada como cualquier otro trabajo." },
];
