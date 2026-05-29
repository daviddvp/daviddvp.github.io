import { type ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms para crear efecto escalonado (stagger) */
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Envuelve cualquier contenido para que aparezca con un fade-up sutil
 * cuando entra en el viewport. Respeta prefers-reduced-motion vía CSS.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, inView } = useInView();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
