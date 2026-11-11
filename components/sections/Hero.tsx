import type { CSSProperties } from "react";
import { icones } from "@/components/icons";
import { HeroPoste } from "@/components/sections/HeroPoste";
import { heroConteudo } from "@/data/hero";
import { ctaAgendar } from "@/data/navegacao";

// Atraso da animação de entrada (classe .entrada em app/globals.css).
const atraso = (ms: number) => ({ "--atraso": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { eyebrow, titulo, descricao, secundario, destaques } = heroConteudo;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-onix pb-20 pt-28 lg:pt-24"
    >
      {/* fundo: luz quente, listras sutis e transição para a próxima seção */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 72% 45%, rgba(176,141,87,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 bg-[url('/brand/pattern-listras.svg')] opacity-70"
          style={{
            maskImage: "linear-gradient(to left, black, transparent 65%)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ backgroundImage: "linear-gradient(to bottom, transparent, #0A0A0B)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <p
            className="entrada flex items-center gap-3 font-display text-xs uppercase tracking-[0.35em] text-ouro"
            style={atraso(0)}
          >
            <span aria-hidden="true" className="h-px w-10 bg-ouro" />
            {eyebrow}
          </p>

          <h1
            className="entrada mt-6 font-display text-[clamp(2.25rem,6.2vw,5.5rem)] font-light uppercase leading-[1.05] tracking-[0.08em] text-marfim"
            style={atraso(120)}
          >
            <span className="block">{titulo.linha1}</span>
            <span className="block">
              {titulo.linha2}{" "}
              <em className="font-serif font-normal normal-case italic tracking-normal text-ouro">
                {titulo.destaque}
              </em>
            </span>
          </h1>

          <p
            className="entrada mt-8 max-w-xl text-base leading-relaxed text-prata sm:text-lg"
            style={atraso(300)}
          >
            {descricao}
          </p>

          <div
            className="entrada mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={atraso(450)}
          >
            <a
              href={ctaAgendar.href}
              className="corte inline-block bg-ouro px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro"
            >
              {ctaAgendar.rotulo}
            </a>
            <a
              href={secundario.href}
              className="group inline-flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-marfim transition-colors duration-300 hover:text-ouro-claro"
            >
              {secundario.rotulo}
              <span
                aria-hidden="true"
                className="h-px w-10 bg-ouro transition-all duration-300 group-hover:w-16"
              />
            </a>
          </div>

          <ul
            className="entrada mt-14 grid max-w-3xl gap-8 border-t border-grafite-claro pt-8 sm:grid-cols-3"
            style={atraso(650)}
          >
            {destaques.map((item) => {
              const Icone = icones[item.icone];
              return (
                <li key={item.titulo} className="flex gap-4">
                  <Icone size={28} className="mt-0.5 shrink-0 text-prata" />
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-marfim">
                      {item.titulo}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-aco">{item.texto}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div
            className="entrada-escala mx-auto flex h-[46svh] items-center justify-center lg:h-[min(74svh,680px)]"
            style={atraso(300)}
          >
            <HeroPoste />
          </div>
        </div>
      </div>

      {/* indicador de rolagem (só em telas grandes) */}
      <div
        aria-hidden="true"
        className="entrada absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        style={atraso(1000)}
      >
        <span className="font-display text-[0.65rem] uppercase tracking-[0.4em] text-aco">
          Role
        </span>
        <span className="linha-rolar block h-10 w-px bg-ouro" />
      </div>
    </section>
  );
}