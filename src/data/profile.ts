import type { Profile } from '@/types';

// === Edita este archivo para actualizar tu información personal ===
export const profile: Profile = {
  name: 'Alejandro Ruiz',
  role: 'DevOps Engineer',
  tagline: 'Infraestructura que no da sorpresas a las 3 AM.',
  bio: `Trabajo en el espacio entre desarrollo y operaciones: automatizo lo repetitivo,
estabilizo lo frágil y trato de que los deployments sean algo aburrido (en el buen sentido).
Dos años largos en entornos de producción me han enseñado que la observabilidad y la documentación
no son opcionales, y que el "funciona en mi máquina" deja de ser gracioso muy pronto.`,
  location: 'Madrid, España',
  availability: 'open',
  availabilityLabel: 'Abierto a nuevas oportunidades',
  currentStack: [
    'Kubernetes', 'GitLab CI', 'Terraform', 'Prometheus',
    'Docker', 'Python', 'Bash', 'Linux',
  ],
  valueProps: [
    {
      icon: '⚙️',
      title: 'Automatización real',
      description: 'Identifico tareas manuales repetitivas y las convierto en pipelines, scripts o workflows. Si algo se hace más de dos veces, debería automatizarse.',
    },
    {
      icon: '🔍',
      title: 'Observabilidad práctica',
      description: 'Monto sistemas de monitorización que avisan antes de que el problema llegue al cliente. Métricas útiles, no ruido.',
    },
    {
      icon: '🔒',
      title: 'Seguridad desde el principio',
      description: 'Integro prácticas de seguridad en el pipeline y en la infraestructura, no como revisión final sino como parte del proceso.',
    },
    {
      icon: '📋',
      title: 'Documentación que se usa',
      description: 'Escribo runbooks y documentación técnica que cualquier miembro del equipo puede seguir, no solo el que lo creó.',
    },
  ],
  contact: {
    email: 'alex.ruiz@example.com',
    github: 'https://github.com/alexruiz-dev',
    linkedin: 'https://linkedin.com/in/alexruiz-devops',
  },
};
