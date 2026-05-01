import type { SkillGroup } from '@/types';

// === Niveles: learning | working | comfortable | proficient ===
// - learning:    lo estoy aprendiendo, no lo usaría solo en producción
// - working:     lo uso y resuelvo problemas con supervisión
// - comfortable: trabajo de forma independiente, conozco sus límites
// - proficient:  lo domino bien, lo enseño o lo reviso en otros

export const skillGroups: SkillGroup[] = [
  {
    category: 'Contenedores & Orquestación',
    icon: '🐳',
    skills: [
      { name: 'Docker',       level: 'proficient',  note: 'Dockerfiles, multi-stage, compose, redes y volúmenes' },
      { name: 'Kubernetes',   level: 'comfortable', note: 'Workloads, servicios, ingress, RBAC, Helm' },
      { name: 'Helm',         level: 'comfortable', note: 'Creación de charts, templating, releases' },
      { name: 'OpenShift',    level: 'working',     note: 'Experiencia en entorno de cliente, aún aprendiendo' },
      { name: 'k3s',          level: 'comfortable', note: 'Uso en homelab y entornos ligeros' },
    ],
  },
  {
    category: 'CI/CD & GitOps',
    icon: '🔄',
    skills: [
      { name: 'GitLab CI',    level: 'proficient',  note: 'Pipelines completos, variables, environments, runners' },
      { name: 'GitHub Actions', level: 'comfortable', note: 'Workflows, reusable actions, secrets' },
      { name: 'ArgoCD',       level: 'working',     note: 'GitOps con ArgoCD en laboratorio y staging' },
      { name: 'Jenkins',      level: 'working',     note: 'Mantenimiento de pipelines heredados' },
    ],
  },
  {
    category: 'Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS',          level: 'comfortable', note: 'EC2, EKS, RDS, S3, VPC, IAM, CloudWatch' },
      { name: 'GCP',          level: 'learning',    note: 'GKE y Cloud Storage en proyectos personales' },
      { name: 'Azure',        level: 'learning',    note: 'Básico, AKS y Azure DevOps' },
    ],
  },
  {
    category: 'IaC & Configuración',
    icon: '📐',
    skills: [
      { name: 'Terraform',    level: 'comfortable', note: 'Módulos, workspaces, remote state, CI integrado' },
      { name: 'Ansible',      level: 'working',     note: 'Playbooks, roles, inventarios dinámicos' },
      { name: 'Packer',       level: 'learning',    note: 'Construcción de AMIs en proyectos puntuales' },
    ],
  },
  {
    category: 'Observabilidad',
    icon: '📊',
    skills: [
      { name: 'Prometheus',   level: 'comfortable', note: 'PromQL, exporters, alerting rules, scraping' },
      { name: 'Grafana',      level: 'comfortable', note: 'Dashboards, datasources, alertas, templating' },
      { name: 'Loki',         level: 'working',     note: 'Log aggregation con promtail y Grafana' },
      { name: 'ELK Stack',    level: 'working',     note: 'Elasticsearch, Logstash y Kibana en proyectos de cliente' },
      { name: 'Datadog',      level: 'working',     note: 'APM, logs y monitors en entorno de empresa' },
    ],
  },
  {
    category: 'Linux & Sistemas',
    icon: '🐧',
    skills: [
      { name: 'Linux (Ubuntu/RHEL)', level: 'proficient', note: 'Administración, systemd, red, seguridad, rendimiento' },
      { name: 'Bash',         level: 'proficient',  note: 'Scripts de automatización, mantenimiento y diagnóstico' },
      { name: 'Networking',   level: 'comfortable', note: 'TCP/IP, DNS, iptables, VPN, load balancing' },
    ],
  },
  {
    category: 'Scripting & Código',
    icon: '🐍',
    skills: [
      { name: 'Python',       level: 'comfortable', note: 'Scripts de automatización, APIs, herramientas internas' },
      { name: 'YAML / JSON',  level: 'proficient',  note: 'Configuración de infraestructura y herramientas' },
      { name: 'Go',           level: 'learning',    note: 'Explorando para herramientas de infraestructura' },
    ],
  },
  {
    category: 'Seguridad',
    icon: '🔒',
    skills: [
      { name: 'Trivy / Snyk', level: 'working',     note: 'Análisis de vulnerabilidades en contenedores y deps' },
      { name: 'Vault (HashiCorp)', level: 'working', note: 'Gestión de secretos, políticas básicas' },
      { name: 'SOPS',         level: 'working',     note: 'Cifrado de secretos en repositorios GitOps' },
      { name: 'CIS Benchmarks', level: 'working',   note: 'Hardening de sistemas Linux' },
    ],
  },
];

export const skillLevelLabels: Record<string, string> = {
  learning:    'Aprendiendo',
  working:     'Trabajando con ello',
  comfortable: 'Cómodo',
  proficient:  'Solvente',
};

export const skillLevelColors: Record<string, string> = {
  learning:    'bg-bg-subtle text-text-muted border-border',
  working:     'bg-bg-subtle text-text-secondary border-border',
  comfortable: 'bg-accent-subtle text-accent border-accent/20',
  proficient:  'bg-accent text-bg-primary border-accent',
};
