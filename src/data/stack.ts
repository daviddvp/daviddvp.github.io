import type { StackCategory } from '@/types';

// === Stack tecnológico actual ===
export const stackCategories: StackCategory[] = [
  {
    category: 'Orquestación & Contenedores',
    icon: '🐳',
    items: [
      {
        name: 'Kubernetes',
        description: 'Orquestación de contenedores en producción. Control de recursos, RBAC, ingress y gestión de workloads.',
        tags: ['orchestration', 'core'],
      },
      {
        name: 'Docker',
        description: 'Construcción y gestión de imágenes. La base de casi todo lo demás.',
        tags: ['containers', 'core'],
      },
      {
        name: 'Helm',
        description: 'Gestión de releases en Kubernetes. Charts propios y de terceros.',
        tags: ['kubernetes', 'packaging'],
      },
      {
        name: 'ArgoCD',
        description: 'GitOps para Kubernetes. La infraestructura como fuente de verdad en Git.',
        tags: ['gitops', 'cd'],
      },
    ],
  },
  {
    category: 'CI/CD',
    icon: '🔄',
    items: [
      {
        name: 'GitLab CI',
        description: 'Pipelines con stages, environments, matrices de variables, runners self-hosted.',
        tags: ['ci', 'core'],
      },
      {
        name: 'GitHub Actions',
        description: 'Workflows para proyectos open-source y repositorios personales.',
        tags: ['ci', 'cd'],
      },
    ],
  },
  {
    category: 'Cloud & IaC',
    icon: '☁️',
    items: [
      {
        name: 'AWS',
        description: 'EKS, EC2, RDS, S3, VPC, IAM. La plataforma cloud principal en proyectos de trabajo.',
        tags: ['cloud', 'core'],
      },
      {
        name: 'Terraform',
        description: 'Infraestructura como código. Módulos, workspaces, remote state, CI integrado.',
        tags: ['iac', 'core'],
      },
      {
        name: 'Ansible',
        description: 'Gestión de configuración, playbooks y automatización de tareas en servidores.',
        tags: ['iac', 'config'],
      },
    ],
  },
  {
    category: 'Observabilidad',
    icon: '📊',
    items: [
      {
        name: 'Prometheus',
        description: 'Métricas, alertas y scraping de exporters. El motor de observabilidad.',
        tags: ['monitoring', 'core'],
      },
      {
        name: 'Grafana',
        description: 'Dashboards, alertas y visualización. La capa visible del stack de monitorización.',
        tags: ['monitoring', 'core'],
      },
      {
        name: 'Loki',
        description: 'Agregación de logs. La alternativa ligera al stack ELK cuando no necesitas full-text search.',
        tags: ['logging'],
      },
    ],
  },
  {
    category: 'Lenguajes & Scripts',
    icon: '🐍',
    items: [
      {
        name: 'Python',
        description: 'Automatización, APIs internas, herramientas de infraestructura y scripts complejos.',
        tags: ['scripting', 'core'],
      },
      {
        name: 'Bash',
        description: 'El idioma de los servidores. Scripts de mantenimiento, diagnóstico y automatización.',
        tags: ['scripting', 'core'],
      },
    ],
  },
  {
    category: 'Sistemas & Networking',
    icon: '🐧',
    items: [
      {
        name: 'Linux (Ubuntu / RHEL)',
        description: 'Administración de sistemas, systemd, rendimiento, seguridad y troubleshooting.',
        tags: ['os', 'core'],
      },
      {
        name: 'Nginx',
        description: 'Proxy inverso, load balancing y servicio de assets estáticos.',
        tags: ['networking'],
      },
    ],
  },
];
