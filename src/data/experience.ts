/**
 * EXPERIENCIA PROFESIONAL
 * -----------------------
 * Orden cronológico inverso (lo más reciente primero).
 * `highlights` lista logros medibles; se renderizan como bullets en la timeline.
 */

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "DevOps",
    company: "UST",
    period: "Feb. 2024 — Actualidad",
    location: "España",
    summary:
      "Responsable de la seguridad, automatización y operación de infraestructura cloud en AWS, orquestación de contenedores y respuesta ante incidentes.",
    highlights: [
      "Automatización de despliegues seguros con Ansible, Harbor y Git.",
      "Orquestación de contenedores sobre AWS ECS y AWS EKS.",
      "Gestión de infraestructura como código (IaC) con Terraform.",
      "Hardening de servidores Linux con AWS Systems Manager, AWS Inspector, UFW e Iptables.",
      "Seguridad de redes con AWS WAF, AWS Shield, AWS VPC y Nmap.",
      "Monitorización y respuesta ante incidentes con Zabbix, Kibana, Grafana y AWS GuardDuty.",
      "Automatización de parches de seguridad mediante AWS EC2 Auto Scaling.",
      "Gestión de ticketing y documentación con Jira y Confluence.",
    ],
    stack: ["AWS EKS", "AWS ECS", "Terraform", "Ansible", "Harbor", "Git", "Zabbix", "Kibana", "Grafana", "AWS GuardDuty", "Jira", "Confluence"],
  },
  {
    role: "Administrador de sistemas",
    company: "Grupo Aspa",
    period: "Oct. 2021 — Feb. 2024",
    location: "España",
    summary:
      "Administración y gestión de servidores físicos y virtuales, virtualización, backups y monitorización de redes en entornos mixtos.",
    highlights: [
      "Virtualización y gestión de backups con VMware, Proxmox y AWS.",
      "Configuración y administración de servidores físicos y virtuales (Linux, Windows Server, HP, Oracle, Dell, Supermicro).",
      "Monitorización de redes con Zabbix, Nagios, Wireshark y Nmap.",
      "Administración de VPNs y firewalls con Zabbix, Cacti y Nagios.",
    ],
    stack: ["VMware", "Proxmox", "AWS", "Linux", "Windows Server", "Zabbix", "Nagios", "Wireshark", "Nmap", "Cacti"],
  },
  {
    role: "Administrador de sistemas",
    company: "FDS Spain",
    period: "Ago. 2021 — Sept. 2021",
    location: "España",
    summary:
      "Administración de servidores y redes en entornos Linux y Windows Server.",
    highlights: [
      "Administración de servidores Linux y Windows Server.",
      "Scripting en Bash para automatización de tareas.",
    ],
    stack: ["Linux", "Windows Server", "Bash"],
  },
  {
    role: "Becario · Técnico de sistemas",
    company: "I.N.T.A",
    period: "Mar. 2021 — Jul. 2021",
    location: "España",
    summary:
      "Prácticas de formación en administración de sistemas y redes.",
    highlights: [
      "Administración de servidores Linux y Windows Server.",
      "Administración de redes con Pfsense y Cisco.",
    ],
    stack: ["Linux", "Windows Server", "Pfsense", "Cisco"],
  },
];
