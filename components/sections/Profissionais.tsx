import Link from "next/link";
import { CartaoProfissional } from "@/components/ui/CartaoProfissional";
import { Revelar } from "@/components/ui/Revelar";
import { profissionais, profissionaisConteudo } from "@/data/profissionais";
import { servicos } from "@/data/servicos";

export function Profissionais() {
  const { eyebrow, titulo, introducao, rotuloBotao, qualquer } = profissionaisConteudo;

  return (
    <section
      id="profissionais"
      className="relative scroll-mt-20 overflow-hidden bg-carvao py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Revelar>
              <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.35em] text-ouro">
                <span aria-hidden="true" className="h-px w-10 bg-ouro" />
                {eyebrow}
              </p>
            </Revelar>
            <Revelar atraso={100}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-light uppercase leading-[1.08] tracking-[0.08em] text-marfim">
                {titulo.linha1}{" "}
                <em className="font-serif font-normal normal-case italic tracking-normal text-ouro">
                  {titulo.destaque}
                </em>
              </h2>
            </Revelar>
          </div>
          <div className="lg:col-span-5">
            <Revelar atraso={200}>
              <p className="max-w-md leading-relaxed text-prata">{introducao}</p>
            </Revelar>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {profissionais.map((profissional, i) => {
            const nomesServicos = profissional.servicosIds
              .map((id) => servicos.find((servico) => servico.id === id)?.nome)
              .filter((nome): nome is string => nome !== undefined);

            return (
              <Revelar
                key={profissional.id}
                atraso={i * 150}
                className={`h-full ${i === 1 ? "lg:mt-14" : ""}`}
              >
                <CartaoProfissional
                  profissional={profissional}
                  indice={i}
                  nomesServicos={nomesServicos}
                  rotuloBotao={rotuloBotao}
                />
              </Revelar>
            );
          })}
        </div>

        <Revelar className="mt-16 flex justify-center">
          <Link
            href={{ pathname: "/", query: { profissional: qualquer.id }, hash: "agendamento" }}
            className="group inline-flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-marfim transition-colors duration-300 hover:text-ouro-claro"
          >
            {qualquer.rotulo}
            <span
              aria-hidden="true"
              className="h-px w-10 bg-ouro transition-all duration-300 group-hover:w-16"
            />
          </Link>
        </Revelar>
      </div>
    </section>
  );
}