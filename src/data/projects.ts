/**
 * PROYECTOS DESTACADOS
 * --------------------
 * Cada proyecto cuenta una historia técnica: problema -> solución -> impacto.
 * `metric` se resalta visualmente en la tarjeta.
 */

export interface Project {
  name: string;
  tagline: string;
  problem: string;
  result: string;
  metric: { value: string; label: string };
  stack: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: "Kubernetes: Apache + PHP + MySQL",
    tagline: "Entorno Kubernetes modular con almacenamiento persistente y gestión de secretos.",
    problem:
      "Desplegar una aplicación web con base de datos en Kubernetes requiere coordinar múltiples recursos: almacenamiento, credenciales, configuración y red.",
    result:
      "Entorno completo sobre Minikube con PVC para MySQL, Kubernetes Secrets para credenciales, ConfigMap para el código PHP, y servicios ClusterIP y NodePort para la red.",
    metric: { value: "K8s", label: "orquestación con Minikube" },
    stack: ["Kubernetes", "Minikube", "Docker", "Apache", "PHP 8.2", "MySQL 8.0"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/Minikube-apache-php-mysql-practise" }],
  },
  {
    name: "Apache Tomcat en Docker",
    tagline: "Despliegue containerizado de aplicaciones Java con CI/CD integrado.",
    problem:
      "Configurar y mantener un servidor Tomcat de forma reproducible en distintos entornos es costoso y propenso a errores manuales.",
    result:
      "Imagen Docker de Tomcat con directorios de configuración y webapps separados, Docker Compose listo para levantar el entorno y pipeline de CI automatizado con GitHub Actions.",
    metric: { value: "CI/CD", label: "pipeline con GitHub Actions" },
    stack: ["Java", "Docker", "Apache Tomcat", "Docker Compose", "GitHub Actions", "Shell"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/Tomcat-Container" }],
  },
  {
    name: "Servidor Samba en Docker",
    tagline: "Compartición de archivos en red entre Windows, Linux y móviles con un único contenedor.",
    problem:
      "Configurar Samba manualmente es complejo, difícil de reproducir y requiere ajustes distintos según el sistema operativo cliente.",
    result:
      "Contenedor Docker con Samba listo para usar, credenciales configurables por variables de entorno y compatible con Windows, Linux, iOS y Android sin configuración adicional.",
    metric: { value: "SMB", label: "protocolo multiplataforma" },
    stack: ["Docker", "Docker Compose", "Samba", "SMB/CIFS"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/Samba-container" }],
  },
  {
    name: "Multi-stage Build: Rust + Docker",
    tagline: "Imagen de producción mínima para aplicación Rust usando Alpine Linux.",
    problem:
      "Las imágenes Docker de aplicaciones compiladas suelen incluir el compilador completo, disparando el tamaño y la superficie de ataque.",
    result:
      "Build en dos etapas: compilación en imagen Rust completa y runtime sobre Alpine Linux. Imagen final sin dependencias de build ni compilador.",
    metric: { value: "Alpine", label: "runtime mínimo sin compilador" },
    stack: ["Rust", "Docker", "Alpine Linux", "Cargo", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/test_rust_docker" }],
  },
  {
    name: "Automatización de Volúmenes Linux",
    tagline: "Scripts de automatización para montaje de discos y sincronización de archivos.",
    problem:
      "Las operaciones de montaje de volúmenes y copia de ficheros en Linux son tareas repetitivas propensas a error manual en entornos de administración de sistemas.",
    result:
      "Scripts orquestados en Bash y Python que automatizan el montaje y la sincronización de forma reproducible, con script de arranque único y fallback de compatibilidad.",
    metric: { value: "Bash + Python", label: "automatización de sysadmin" },
    stack: ["Bash", "Python", "Linux"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/New_volume_Linux" }],
  },
  {
    name: "Guía de Configuración Neovim",
    tagline: "Setup completo de Neovim con plugins modernos, LSP y atajos productivos.",
    problem:
      "Configurar Neovim desde cero es tedioso: requiere conocer multitud de plugins, su integración y definir atajos de teclado coherentes.",
    result:
      "Ficheros de configuración en Lua listos para usar con NvimTree, Telescope, Treesitter, LSP y autocompletado, más guía de instalación paso a paso.",
    metric: { value: "Lua", label: "configuración moderna con Packer" },
    stack: ["Neovim", "Lua", "Packer", "LSP", "Treesitter", "Telescope"],
    links: [{ label: "GitHub", href: "https://github.com/daviddvp/neovim_config_guide_dvp" }],
  },
];
