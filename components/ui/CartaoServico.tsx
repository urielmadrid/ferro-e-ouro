"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { IconRelogio, icones } from "@/components/icons";
import type { Servico } from "@/data/servicos";
import { formatarDuracao, formatarPreco } from "@/lib/formatar";

/**
 * Cartão de serviço: canto cortado, brilho dourado que segue o mouse e botão de agendar.
 * O botão leva ao agendamento com o serviço indicado na URL (?servico=...).
 */
export function CartaoServico({
  servico,
  indice,
  rotuloBotao,
}: {
  servico: Servico;
  indice: number;
  rotuloBotao: string;
}) {
  const Icone = icones[servico.icone];

  const aoMover = (e: MouseEvent<HTMLElement>) => {
    const caixa = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - caixa.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - caixa.top}px`);
  };

  return (
    <article onMouseMove={aoMover} className="group relative h-full">
      {/* moldura de 1px: duas camadas com o mesmo corte */}
      <div className="corte-card h-full bg-grafite-claro p-px transition-colors duration-500 group-focus-within:bg-ouro/70 group-hover:bg-ouro/70">
        <div className="corte-card relative flex h-full flex-col bg-carvao p-7">
          {/* brilho que acompanha o mouse */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              backgroundImage:
                "radial-gradient(260px circle at var(--x, 50%) var(--y, 0%), rgba(176,141,87,0.16), transparent 70%)",
            }}
          />

          {servico.etiqueta && (
            <span className="absolute right-0 top-0 bg-ouro px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.2em] text-onix">
              {servico.etiqueta}
            </span>
          )}

          <div className="relative flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center border border-grafite-claro text-marfim transition-colors duration-500 group-hover:border-ouro/60">
              <Icone size={26} />
            </span>
            <span className="font-display text-xs tracking-[0.2em] text-ouro">
              {String(indice + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="relative mt-6 font-display text-lg uppercase tracking-[0.12em] text-marfim">
            {servico.nome}
          </h3>
          <p className="relative mt-3 text-sm leading-relaxed text-aco">{servico.descricao}</p>

          <div className="relative mt-auto pt-8">
            <div className="flex items-end justify-between gap-4 border-t border-grafite-claro pt-5">
              <div>
                {servico.aPartirDe && (
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-aco">
                    a partir de
                  </p>
                )}
                <p className="font-serif text-4xl leading-none text-ouro">
                  {formatarPreco(servico.precoCentavos)}
                </p>
              </div>
              <p className="flex items-center gap-2 pb-1 text-sm text-prata">
                <IconRelogio size={16} className="text-aco" />
                {formatarDuracao(servico.duracaoMin)}
              </p>
            </div>

            <Link
              href={{ pathname: "/", query: { servico: servico.id }, hash: "agendamento" }}
              aria-label={`${rotuloBotao}: ${servico.nome}`}
              className="group/botao mt-6 inline-flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-marfim transition-colors duration-300 hover:text-ouro-claro"
            >
              {rotuloBotao}
              <span
                aria-hidden="true"
                className="h-px w-10 bg-ouro transition-all duration-300 group-hover/botao:w-16"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}