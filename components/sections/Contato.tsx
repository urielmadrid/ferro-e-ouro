import Link from "next/link";
import { Imagem } from "@/components/ui/Imagem";
import { Revelar } from "@/components/ui/Revelar";
import {
  canais,
  contatoConteudo,
  endereco,
  horarios,
  imagemFachada,
  mapa,
} from "@/data/contato";
import { ctaAgendar } from "@/data/navegacao";

type Canal = { rotulo: string; texto: string; href: string };

function montarCanais(): Canal[] {
  const lista: Canal[] = [];
  if (canais.whatsapp) {
    const { numero, exibir, mensagem } = canais.whatsapp;
    lista.push({
      rotulo: "WhatsApp",
      texto: exibir,
      href: `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    });
  }
  if (canais.telefone) {
    lista.push({
      rotulo: "Telefone",
      texto: canais.telefone.exibir,
      href: `tel:+${canais.telefone.numero}`,
    });
  }
  if (canais.instagram) {
    lista.push({
      rotulo: "Instagram",
      texto: `@${canais.instagram.usuario}`,
      href: `https://instagram.com/${canais.instagram.usuario}`,
    });
  }
  if (canais.email) {
    lista.push({ rotulo: "E-mail", texto: canais.email, href: `mailto:${canais.email}` });
  }
  return lista;
}

const rotuloClasse =
  "font-display text-xs uppercase tracking-[0.3em] text-ouro";

export function Contato() {
  const { eyebrow, titulo, introducao, rotuloAgendar, rotuloRota } = contatoConteudo;
  const lista = montarCanais();
  const faltando = [
    !canais.whatsapp && "WhatsApp",
    !canais.telefone && "telefone",
    !canais.instagram && "Instagram",
    !canais.email && "e-mail",
    !mapa.embedUrl && "mapa",
  ].filter(Boolean);

  return (
    <section
      id="contato"
      className="relative scroll-mt-20 overflow-hidden bg-carvao py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
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
            <p className="mt-6 max-w-md leading-relaxed text-prata">{introducao}</p>
          </Revelar>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-12 lg:col-span-5">
            <Revelar>
              <h3 className={rotuloClasse}>Endereço</h3>
              <address className="mt-4 not-italic leading-relaxed text-marfim">
                <span className="block font-display text-xl uppercase tracking-[0.08em]">
                  {endereco.linha1}
                </span>
                <span className="mt-1 block text-prata">{endereco.linha2}</span>
              </address>
              {mapa.linkRota && (
                <a
                  href={mapa.linkRota}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-marfim transition-colors duration-300 hover:text-ouro-claro"
                >
                  {rotuloRota}
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-ouro transition-all duration-300 group-hover:w-16"
                  />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              )}
            </Revelar>

            <Revelar atraso={100}>
              <h3 className={rotuloClasse}>Horários</h3>
              <dl className="mt-4">
                {horarios.map((h) => (
                  <div
                    key={h.dias}
                    className="flex items-baseline justify-between gap-6 border-b border-grafite-claro py-3"
                  >
                    <dt className="text-prata">{h.dias}</dt>
                    <dd className="font-display text-sm tracking-[0.1em] text-marfim">
                      {h.horas}
                    </dd>
                  </div>
                ))}
              </dl>
            </Revelar>

            {lista.length > 0 && (
              <Revelar atraso={200}>
                <h3 className={rotuloClasse}>Fale com a gente</h3>
                <ul className="mt-4 space-y-3">
                  {lista.map((canal) => (
                    <li key={canal.rotulo} className="flex items-baseline gap-4">
                      <span className="w-24 shrink-0 text-sm text-aco">{canal.rotulo}</span>
                      <a
                        href={canal.href}
                        {...(canal.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-marfim underline decoration-ouro/50 underline-offset-4 transition-colors duration-300 hover:text-ouro-claro hover:decoration-ouro"
                      >
                        {canal.texto}
                      </a>
                    </li>
                  ))}
                </ul>
              </Revelar>
            )}

            <Revelar atraso={300}>
              <Link
                href={ctaAgendar.href}
                className="corte inline-block bg-ouro px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro"
              >
                {rotuloAgendar}
              </Link>
            </Revelar>

            {/* aviso só aparece no seu computador (npm run dev), nunca no site publicado */}
            {process.env.NODE_ENV === "development" && faltando.length > 0 && (
              <p className="border border-dashed border-grafite-claro p-4 text-xs leading-relaxed text-aco">
                Só você vê isto (modo desenvolvimento). Preencha em data/contato.ts:{" "}
                {faltando.join(", ")}.
              </p>
            )}
          </div>

          <div className="lg:col-span-7">
            <Revelar atraso={150}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-ouro/30"
                />
                <div className="corte-card relative overflow-hidden bg-grafite">
                  {mapa.embedUrl ? (
                    <div className="relative" style={{ aspectRatio: "4 / 3" }}>
                      <iframe
                        src={mapa.embedUrl}
                        title="Mapa com a localização da Ferro & Ouro"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0 grayscale"
                      />
                    </div>
                  ) : (
                    <Imagem
                      {...imagemFachada}
                      proporcao="4 / 3"
                      sizes="(min-width: 1024px) 55vw, 90vw"
                    />
                  )}
                </div>
              </div>
            </Revelar>
          </div>
        </div>
      </div>
    </section>
  );
}