import { CartaoServico } from "@/components/ui/CartaoServico";
import { Revelar } from "@/components/ui/Revelar";
import { servicos, servicosConteudo } from "@/data/servicos";

export function Servicos() {
  const { eyebrow, titulo, introducao, rotuloBotao } = servicosConteudo;

  return (
    <section id="servicos" className="relative scroll-mt-20 bg-onix py-28 lg:py-40">
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {servicos.map((servico, i) => (
            <Revelar key={servico.id} atraso={(i % 4) * 100} className="h-full">
              <CartaoServico servico={servico} indice={i} rotuloBotao={rotuloBotao} />
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}