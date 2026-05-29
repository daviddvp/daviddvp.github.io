/**
 * SKILLS TÉCNICAS
 * ---------------
 * Agrupadas por categoría. Añade, quita o reordena libremente.
 * `accent` controla el color del grupo; `icon` la clave del icono (ver ui/Icon.tsx).
 */

export type Accent = "emerald" | "sky" | "violet";

export interface SkillGroup {
  category: string;
  icon: string;
  accent: Accent;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud (AWS)",
    icon: "cloud",
    accent: "sky",
    skills: [
      "AWS ECS",
      "AWS EKS",
      "AWS VPC",
      "AWS WAF",
      "AWS Shield",
      "AWS GuardDuty",
      "AWS Inspector",
      "AWS Systems Manager",
      "EC2 Auto Scaling",
    ],
  },
  {
    category: "Contenedores & Orquestación",
    icon: "container",
    accent: "emerald",
    skills: ["Docker", "Docker Compose", "Kubernetes", "Minikube", "Harbor"],
  },
  {
    category: "IaC & Automatización",
    icon: "pipeline",
    accent: "violet",
    skills: ["Terraform", "Ansible", "GitHub Actions", "Git", "Jira", "Confluence"],
  },
  {
    category: "Monitorización & Redes",
    icon: "chart",
    accent: "sky",
    skills: ["Zabbix", "Grafana", "Kibana", "Nagios", "Cacti", "Nmap", "Wireshark"],
  },
  {
    category: "Sistemas & Virtualización",
    icon: "shield",
    accent: "emerald",
    skills: ["Linux", "Windows Server", "VMware", "Proxmox", "Pfsense", "Cisco", "UFW / Iptables"],
  },
  {
    category: "Scripting & Programación",
    icon: "terminal",
    accent: "violet",
    skills: ["Bash", "Python", "Rust", "Java", "Lua", "YAML"],
  },
];
