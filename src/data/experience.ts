import type { ExperienceItem, Certification } from '@/types';

// === Historial profesional ===
export const experience: ExperienceItem[] = [
  {
    id: 'exp-2',
    company: 'Infracore Solutions',
    role: 'DevOps Engineer',
    period: 'Ene 2023 — Presente',
    location: 'Madrid (remoto parcial)',
    type: 'full-time',
    summary: 'Equipo de plataforma de 4 personas dando soporte a 15 equipos de desarrollo. Responsable de la plataforma CI/CD, infraestructura cloud y observabilidad.',
    highlights: [
      'Migración de Jenkins a GitLab CI para 8 equipos, reduciendo el tiempo medio de pipeline de 45 a 12 minutos.',
      'Diseño e implementación del stack de observabilidad (Prometheus + Grafana + Loki) para producción.',
      'Redefinición de la infraestructura AWS en Terraform, pasando de configuración manual a IaC completo.',
      'Implementación de políticas de seguridad en pipelines: análisis de imágenes, dependencias y SAST.',
      'Creación de documentación técnica y runbooks usados como referencia por todo el equipo.',
    ],
    technologies: ['Kubernetes', 'GitLab CI', 'Terraform', 'AWS', 'Prometheus', 'Grafana', 'Helm', 'Python'],
  },
  {
    id: 'exp-1',
    company: 'Nexbyte Technologies',
    role: 'SysAdmin / Junior DevOps',
    period: 'Mar 2021 — Dic 2022',
    location: 'Madrid',
    type: 'full-time',
    summary: 'Primer contacto profesional con entornos de producción. Administración de servidores Linux, soporte a desarrollo y primeros pasos en automatización y contenedores.',
    highlights: [
      'Administración de 30+ servidores Linux (Ubuntu/CentOS) en entorno de producción.',
      'Containerización de aplicaciones legacy con Docker y Docker Compose.',
      'Creación de scripts de mantenimiento y monitorización básica con Bash y Python.',
      'Soporte al equipo de desarrollo en configuración de entornos y resolución de incidencias.',
      'Gestión de copias de seguridad y procedimientos de recuperación ante desastres.',
    ],
    technologies: ['Linux', 'Bash', 'Python', 'Docker', 'Docker Compose', 'Nginx', 'PostgreSQL', 'Ansible'],
  },
];

// === Certificaciones ===
export const certifications: Certification[] = [
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Nov 2023',
    credentialId: 'CKA-2023-XXXX',
    status: 'active',
  },
  {
    name: 'AWS Certified SysOps Administrator – Associate',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    credentialId: 'AWS-SOA-XXXX',
    status: 'active',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'En progreso',
    status: 'in-progress',
  },
];
