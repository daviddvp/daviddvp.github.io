/**
 * Iconos SVG inline (sin librerías externas para mantener el bundle ligero).
 * Cada clave coincide con el campo `icon` de los datos de skills/secciones.
 */

export type IconName =
  | "cloud" | "container" | "pipeline" | "code" | "chart"
  | "terminal" | "shield" | "arrow" | "download" | "mail"
  | "linkedin" | "github" | "pin" | "check" | "spark" | "menu" | "close";

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, JSX.Element> = {
  cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.3 4 4 0 0 0 7 17h10.5Z" />,
  container: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" />
      <path d="m3 7.5 9 4.5 9-4.5M12 12v9" />
    </>
  ),
  pipeline: (
    <>
      <circle cx="5" cy="6" r="2.4" /><circle cx="5" cy="18" r="2.4" /><circle cx="19" cy="12" r="2.4" />
      <path d="M7.2 6h4a3 3 0 0 1 3 3v.5M7.2 18h4a3 3 0 0 0 3-3v-.5" />
    </>
  ),
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" />,
  chart: <path d="M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6" />,
  terminal: <><path d="m5 8 4 4-4 4" /><path d="M13 16h6" /><rect x="2.5" y="3.5" width="19" height="17" rx="2.5" /></>,
  shield: <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4" /></>,
  github: <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.3 0C6.6 2 5.5 2.3 5.5 2.3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 8.8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <path d="m5 12 5 5 9-11" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M16 16l2.5 2.5M18 6l-2.5 2.5M8 16l-2.5 2.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
