import Link from "next/link";
import { IconCalendario } from "@/components/icons";
import { Imagem } from "@/components/ui/Imagem";
import type { Profissional } from "@/data/profissionais";

/**
 * Cartão de profissional: retrato com canto cortado, especialidade, serviços,
 * disponibilidade e botão que leva ao agendamento com o profissional indicado na URL.
 */
export function CartaoProfissional({
  profissional,
  indice,
  nomesServicos,
  rotuloBotao,
}: {
  profissional: Profissional;
  indice: number;
  nomesServicos: string[];
  rotuloBotao: string;
}) {
  const { id, nome, especialidade, descricao, disponibilidade, imagem } = profissional;
  const primeiroNome = nome.split(" ")[0];

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative">
        {/* moldura dourada deslocada que se aproxima no hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 border border-ouro/30 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        />
        <div className="corte-card relative overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-105">
            <Imagem
              {...imagem}
              proporcao="4 / 5"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(17,18,20,0.9), transparent)",
            }}
          />
          <span className="absolute left-4 top-4 font-display text-xs tracking-[0.2em] text-ouro">
            {String(indice + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-1 flex-col">
        <h3 className="font-display text-2xl uppercase tracking-[0.1em] text-marfim">{nome}</h3>
        <p className="mt-1 font-serif text-xl italic text-ouro">{especialidade}</p>
        <p className="mt-4 text-sm leading-relaxed text-aco">{descricao}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Serviços de ${primeiroNome}`}>
          {nomesServicos.map((servico) => (
            <li
              key={servico}
              className="border border-grafite-claro px-3 py-1 text-xs text-prata"
            >
              {servico}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-2 text-sm text-aco">
          <IconCalendario size={16} className="shrink-0 text-prata" />
          {disponibilidade}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={{ pathname: "/", query: { profissional: id }, hash: "agendamento" }}
            className="corte inline-block bg-ouro px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro"
          >
            {rotuloBotao} {primeiroNome}
          </Link>
        </div>
      </div>
    </article>
  );
}