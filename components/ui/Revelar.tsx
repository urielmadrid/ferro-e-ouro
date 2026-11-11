"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Faz o conteúdo aparecer suavemente quando entra na tela (uma única vez).
 * Os estilos ficam em app/globals.css (classe `.revelar`).
 * - `atraso`: milissegundos de espera, para criar entradas em cascata.
 */
export function Revelar({
  children,
  atraso = 0,
  className = "",
}: {
  children: ReactNode;
  atraso?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visivel={visivel}
      className={`revelar ${className}`}
      style={{ "--atraso": `${atraso}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}