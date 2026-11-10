import Image from "next/image";
import { icones, type IconName } from "@/components/icons";

// Página TEMPORÁRIA para validar identidade, fontes e ícones.
// Será substituída pelas seções reais na Fase 4.

const cores = [
  { nome: "Ônix", hex: "#0A0A0B", classe: "bg-onix" },
  { nome: "Carvão", hex: "#111214", classe: "bg-carvao" },
  { nome: "Grafite", hex: "#1A1B1E", classe: "bg-grafite" },
  { nome: "Grafite claro", hex: "#2A2C31", classe: "bg-grafite-claro" },
  { nome: "Aço", hex: "#8A8F98", classe: "bg-aco" },
  { nome: "Prata", hex: "#C9CCD1", classe: "bg-prata" },
  { nome: "Ouro escuro", hex: "#6F5530", classe: "bg-ouro-escuro" },
  { nome: "Ouro", hex: "#B08D57", classe: "bg-ouro" },
  { nome: "Ouro claro", hex: "#D8BC85", classe: "bg-ouro-claro" },
  { nome: "Marfim", hex: "#EDE7DA", classe: "bg-marfim" },
];

export default function Home() {
  const nomesIcones = Object.keys(icones) as IconName[];

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex justify-center">
        <Image
          src="/brand/logo-horizontal.svg"
          alt="Ferro & Ouro"
          width={670}
          height={120}
          priority
          className="h-auto w-full max-w-xl"
        />
      </header>

      <Image
        src="/brand/divisor-regua.svg"
        alt=""
        width={600}
        height={24}
        className="mx-auto h-auto w-full max-w-xl"
      />

      <section className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-aco">
          Teste de identidade
        </p>
        <h1 className="mt-4 font-display text-5xl font-light uppercase tracking-[0.12em] text-marfim sm:text-7xl">
          Corte com{" "}
          <span className="font-serif font-normal normal-case italic tracking-normal text-ouro">
            precisão
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-aco">
          Este texto está em Manrope. O título usa Jost em caixa-alta e a palavra em
          destaque usa Instrument Serif itálico, em ouro.
        </p>
        <button
          type="button"
          className="corte mt-8 inline-block cursor-pointer bg-ouro px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-onix transition-colors hover:bg-ouro-claro"
        >
          Agendar horário
        </button>
      </section>

      <section>
        <h2 className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-aco">
          Ícones
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {nomesIcones.map((nome) => {
            const Icone = icones[nome];
            return (
              <div
                key={nome}
                className="flex flex-col items-center gap-3 border border-grafite-claro bg-carvao p-6 text-marfim"
              >
                <Icone size={36} />
                <span className="font-display text-xs uppercase tracking-[0.2em] text-aco">
                  {nome}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-aco">
          Paleta
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {cores.map((cor) => (
            <div key={cor.nome}>
              <div className={`h-20 border border-grafite-claro ${cor.classe}`} />
              <p className="mt-2 text-sm text-marfim">{cor.nome}</p>
              <p className="text-xs text-aco">{cor.hex}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}