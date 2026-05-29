/**
 * PERFIL Y CONTACTO
 * -----------------
 * Edita este archivo para personalizar tu identidad: nombre, titular,
 * párrafos de "Sobre mí", enlaces y disponibilidad.
 * El resto de la web lee desde aquí.
 */

export interface ProfileLink {
  label: string;
  value: string;
  href: string;
}

export const profile = {
  // --- Identidad ---
  name: "David Del Valle Puado",
  initials: "DDV",
  role: "DevOps & Ciberseguridad en AWS",
  tagline:
    "Especialista en soluciones DevOps con experiencia en AWS, automatización y despliegues escalables.",
  subtagline:
    "AWS · Terraform · Ansible · Kubernetes · CI/CD — infraestructura segura y de alta disponibilidad.",

  // --- Métricas de cabecera (chips del hero) ---
  heroStats: [
    { label: "Experiencia cloud", value: "AWS" },
    { label: "Inglés", value: "B2" },
    { label: "Años en producción", value: "4+" },
  ] as { label: string; value: string }[],

  // --- Sobre mí (párrafos editables) ---
  about: [
    "Especialista en soluciones DevOps con experiencia en AWS. Hábil en automatización, optimización de recursos y despliegues escalables.",
    "Experiencia en monitorización avanzada y seguridad de sistemas para garantizar alta disponibilidad. He trabajado con AWS ECS, AWS EKS, Terraform, Ansible y herramientas de observabilidad como Zabbix, Grafana y Kibana.",
    "Apasionado por la seguridad en infraestructura: hardening de servidores Linux, gestión de VPNs y firewalls, y respuesta ante incidentes con AWS GuardDuty y AWS Inspector.",
  ] as string[],

  // --- Contacto ---
  location: "Talavera de la Reina, España",
  timezone: "CET / CEST (UTC+1/+2)",
  availability: "Disponible para remoto, híbrido y freelance",
  email: "delvallepuadodavid@gmail.com",

  links: [
    { label: "Email", value: "delvallepuadodavid@gmail.com", href: "mailto:delvallepuadodavid@gmail.com" },
    { label: "LinkedIn", value: "David Del Valle Puado", href: "https://www.linkedin.com/in/daviddvp/" },
    { label: "GitHub", value: "@daviddvp", href: "https://github.com/daviddvp" },
  ] as ProfileLink[],

  // Coloca tu PDF en /public con este nombre (o cambia la ruta)
  cvUrl: "/cv-david-del-valle.pdf",
};

export type Profile = typeof profile;
