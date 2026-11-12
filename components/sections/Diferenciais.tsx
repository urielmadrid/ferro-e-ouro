import Link from "next/link";
import { icones } from "@/components/icons";
import { Revelar } from "@/components/ui/Revelar";
import { diferenciais, diferenciaisConteudo } from "@/data/diferenciais";
import { ctaAgendar } from "@/data/navegacao";

export function Diferenciais() {
  const { eyebrow, titulo, introducao, rotuloBotao } = diferenciaisConteudo;

  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-20 overflow-hidden bg-carvao py-28 lg:py-40"
    >
      {/* linhas diagonais discretas ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/brand/pattern-listras.svg')] opacity-[0.12]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* coluna do título: fica fixa enquanto a lista rola no desktop */}
          <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-32">
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
            <Revelar atraso={200}>
              <p className="mt-6 max-w-sm leading-relaxed text-prata">{introducao}</p>
            </Revelar>
            <Revelar atraso={300}>
              <Link
                href={ctaAgendar.href}
                className="corte mt-10 inline-block bg-ouro px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro"
              >
                {rotuloBotao}
              </Link>
            </Revelar>
          </div>

          <ul className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
            {diferenciais.map((item, i) => {
              const Icone = icones[item.icone];
              return (
                <li key={item.id} className="border-t border-grafite-claro">
                  <Revelar atraso={(i % 2) * 120} className="h-full">
                    <article className="group flex h-full gap-6 py-10">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center bg-grafite text-marfim transition-colors duration-500 group-hover:bg-grafite-claro"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
                        }}
                      >
                        <Icone size={28} />
                      </div>
                      <div>
                        <span className="font-display text-xs tracking-[0.2em] text-ouro">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-display text-lg uppercase tracking-[0.1em] text-marfim">
                          {item.titulo}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-aco">{item.texto}</p>
                      </div>
                    </article>
                  </Revelar>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}