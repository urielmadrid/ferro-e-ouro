"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Imagem } from "@/components/ui/Imagem";
import { Revelar } from "@/components/ui/Revelar";
import type { ItemGaleria } from "@/data/galeria";

const SIZES = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw";

/**
 * Grade assimétrica (colunas com alturas diferentes) + visualização ampliada.
 * - Quadro SEM foto (src nulo): espaço reservado, não clicável.
 * - Quadro COM foto: botão que abre a imagem em tela cheia (<dialog> nativo).
 *   Esc fecha, clique fora fecha, setas ← → navegam entre as fotos existentes.
 */
export function GaleriaImagens({ itens }: { itens: ItemGaleria[] }) {
  const [aberto, setAberto] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // posições (no array) dos itens que já têm foto
  const comFoto = itens.flatMap((item, i) => (item.imagem.src ? [i] : []));
  const posicao = aberto === null ? -1 : comFoto.indexOf(aberto);
  const atual = aberto === null ? null : itens[aberto];

  function navegar(passo: 1 | -1) {
    if (comFoto.length < 2 || posicao < 0) return;
    setAberto(comFoto[(posicao + passo + comFoto.length) % comFoto.length]);
  }

  // abre/fecha o <dialog> conforme o estado
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (aberto !== null && !dialog.open) dialog.showModal();
    if (aberto === null && dialog.open) dialog.close();
  }, [aberto]);

  // trava a rolagem da página enquanto a imagem está ampliada
  const estaAberto = aberto !== null;
  useEffect(() => {
    if (!estaAberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [estaAberto]);

  return (
    <>
      <div className="mt-20 columns-1 gap-x-6 sm:columns-2 lg:columns-3">
        {itens.map((item, i) => {
          const temFoto = item.imagem.src !== null;
          const quadro = (
            <Imagem
              {...item.imagem}
              proporcao={item.proporcao}
              sizes={SIZES}
              variacao={i}
            />
          );

          return (
            <Revelar
              key={item.id}
              atraso={(i % 3) * 120}
              className="mb-10 break-inside-avoid"
            >
              <figure>
                {temFoto ? (
                  <div className="group relative overflow-hidden">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-105">
                      {quadro}
                    </div>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-3 border border-ouro/0 transition-colors duration-500 group-hover:border-ouro/70"
                    />
                    {/* botão por cima do quadro (evita <div> dentro de <button>) */}
                    <button
                      type="button"
                      onClick={() => setAberto(i)}
                      aria-label={`Ampliar imagem: ${item.legenda}`}
                      className="absolute inset-0 cursor-zoom-in focus-visible:outline-offset-[-4px]"
                    />
                  </div>
                ) : (
                  quadro
                )}
                <figcaption className="mt-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.22em] text-aco">
                  <span className="text-ouro">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-grafite-claro" />
                  {item.legenda}
                </figcaption>
              </figure>
            </Revelar>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Imagem ampliada da galeria"
        onClose={() => setAberto(null)}
        onClick={(e) => {
          // clicar no fundo (fora de imagem, legenda e setas) fecha
          if (!(e.target as HTMLElement).closest("[data-nao-fechar]")) setAberto(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") navegar(1);
          if (e.key === "ArrowLeft") navegar(-1);
        }}
        className="m-0 h-full max-h-none w-full max-w-none flex-col items-center justify-center bg-transparent p-4 text-marfim backdrop:bg-onix/95 open:flex sm:p-10"
      >
        {atual && atual.imagem.src && (
          <>
            <button
              type="button"
              onClick={() => setAberto(null)}
              aria-label="Fechar imagem ampliada"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-grafite-claro text-prata transition-colors duration-300 hover:border-ouro hover:text-ouro-claro sm:right-8 sm:top-8"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="butt"
                />
              </svg>
            </button>

            <figure data-nao-fechar className="flex w-full max-w-5xl flex-col items-center">
              <div className="relative h-[68vh] w-full">
                <Image
                  key={atual.imagem.src}
                  src={atual.imagem.src}
                  alt={atual.imagem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-6 text-center font-display text-xs uppercase tracking-[0.25em] text-prata">
                {atual.legenda}
              </figcaption>
            </figure>

            {comFoto.length > 1 && (
              <div data-nao-fechar className="mt-6 flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => navegar(-1)}
                  aria-label="Imagem anterior"
                  className="flex h-11 w-11 items-center justify-center border border-grafite-claro text-prata transition-colors duration-300 hover:border-ouro hover:text-ouro-claro"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <span
                  aria-live="polite"
                  className="font-display text-xs tracking-[0.25em] text-aco"
                >
                  {posicao + 1} / {comFoto.length}
                </span>
                <button
                  type="button"
                  onClick={() => navegar(1)}
                  aria-label="Próxima imagem"
                  className="flex h-11 w-11 items-center justify-center border border-grafite-claro text-prata transition-colors duration-300 hover:border-ouro hover:text-ouro-claro"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </dialog>
    </>
  );
}