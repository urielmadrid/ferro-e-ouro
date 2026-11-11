import Image from "next/image";
import { Imagem } from "@/components/ui/Imagem";
import { Revelar } from "@/components/ui/Revelar";
import { sobreConteudo } from "@/data/sobre";

export function Sobre() {
  const { eyebrow, titulo, paragrafos, citacao, principios, link, imagens } = sobreConteudo;
  const [abertura, ...demais] = paragrafos;

  return (
    <section
      id="sobre"
      className="relative scroll-mt-20 overflow-hidden bg-carvao py-28 lg:py-40"
    >
      <Image
        src="/brand/divisor-regua.svg"
        alt=""
        width={600}
        height={24}
        className="absolute left-1/2 top-8 h-auto w-72 -translate-x-1/2 opacity-80"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* composição de imagens */}
        <div className="relative pb-16 lg:col-span-5 lg:pb-24">
          <Revelar>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 border border-ouro/40"
              />
              <Imagem
                {...imagens.principal}
                proporcao="4 / 5"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="corte-card relative"
              />
              <div className="absolute -left-3 -top-3 flex h-24 w-24 items-center justify-center rounded-full border border-grafite-claro bg-onix lg:-left-8 lg:-top-8">
                <Image
                  src="/brand/monograma.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-14 w-14"
                />
              </div>
            </div>
          </Revelar>

          <Revelar atraso={250} className="absolute bottom-0 right-0 w-1/2 lg:-right-16 lg:w-3/5">
            <Imagem
              {...imagens.secundaria}
              proporcao="3 / 2"
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="border-4 border-carvao"
            />
          </Revelar>
        </div>

        {/* texto editorial */}
        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <Revelar>
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.35em] text-ouro">
              <span aria-hidden="true" className="h-px w-10 bg-ouro" />
              {eyebrow}
            </p>
          </Revelar>

          <Revelar atraso={100}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-light uppercase leading-[1.08] tracking-[0.08em] text-marfim">
              <span className="block">{titulo.linha1}</span>
              <span className="block">
                {titulo.linha2}{" "}
                <em className="font-serif font-normal normal-case italic tracking-normal text-ouro">
                  {titulo.destaque}
                </em>
              </span>
            </h2>
          </Revelar>

          <Revelar atraso={200}>
            <p className="mt-8 text-lg leading-relaxed text-marfim sm:text-xl">{abertura}</p>
            {demais.map((paragrafo) => (
              <p key={paragrafo} className="mt-5 leading-relaxed text-prata">
                {paragrafo}
              </p>
            ))}
          </Revelar>

          <Revelar atraso={300}>
            <blockquote className="mt-10 border-l-2 border-ouro pl-6 font-serif text-2xl italic leading-snug text-marfim sm:text-3xl">
              {citacao}
            </blockquote>
          </Revelar>

          <ul className="mt-12 grid gap-8 border-t border-grafite-claro pt-8 sm:grid-cols-3">
            {principios.map((item, i) => (
              <li key={item.titulo}>
                <Revelar atraso={i * 120}>
                  <span className="font-display text-xs tracking-[0.2em] text-ouro">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-sm uppercase tracking-[0.2em] text-marfim">
                    {item.titulo}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-aco">{item.texto}</p>
                </Revelar>
              </li>
            ))}
          </ul>

          <Revelar atraso={200} className="mt-10">
            <a
              href={link.href}
              className="group inline-flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-marfim transition-colors duration-300 hover:text-ouro-claro"
            >
              {link.rotulo}
              <span
                aria-hidden="true"
                className="h-px w-10 bg-ouro transition-all duration-300 group-hover:w-16"
              />
            </a>
          </Revelar>
        </div>
      </div>
    </section>
  );
}