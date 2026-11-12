import Image from "next/image";
import Link from "next/link";
import { canais, endereco, horarios } from "@/data/contato";
import { ctaAgendar, navegacao } from "@/data/navegacao";
import { rodapeConteudo } from "@/data/rodape";

const tituloColuna = "font-display text-xs uppercase tracking-[0.3em] text-ouro";

export function Footer() {
  const { slogan, rotuloNavegacao, rotuloVisita, rotuloAgendar, rotuloTopo, privacidade, nomeLegal } =
    rodapeConteudo;
  const ano = new Date().getFullYear();

  return (
    <footer className="relative border-t border-grafite-claro bg-onix">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${nomeLegal}, ir para o início`} className="inline-block">
              <Image
                src="/brand/logo-horizontal.svg"
                alt={nomeLegal}
                width={260}
                height={47}
                className="h-auto w-56"
              />
            </Link>
            <p className="mt-6 max-w-xs leading-relaxed text-aco">{slogan}</p>
            <Link
              href={ctaAgendar.href}
              className="corte mt-8 inline-block bg-ouro px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro"
            >
              {rotuloAgendar}
            </Link>
          </div>

          <nav aria-label="Navegação do rodapé" className="lg:col-span-3">
            <h2 className={tituloColuna}>{rotuloNavegacao}</h2>
            <ul className="mt-5 space-y-3">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-prata transition-colors duration-300 hover:text-ouro-claro"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className={tituloColuna}>{rotuloVisita}</h2>
            <address className="mt-5 not-italic leading-relaxed text-prata">
              {endereco.linha1}
              <br />
              {endereco.linha2}
            </address>
            <ul className="mt-5 space-y-1 text-sm text-aco">
              {horarios.map((h) => (
                <li key={h.dias}>
                  {h.dias}: <span className="text-prata">{h.horas}</span>
                </li>
              ))}
            </ul>
            {canais.instagram && (
              <a
                href={`https://instagram.com/${canais.instagram.usuario}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-prata underline decoration-ouro/50 underline-offset-4 transition-colors duration-300 hover:text-ouro-claro"
              >
                @{canais.instagram.usuario}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-grafite-claro" />
          <span className="text-xs text-ouro">◆</span>
          <span className="h-px flex-1 bg-grafite-claro" />
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-aco sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {nomeLegal}. Todos os direitos reservados.
          </p>
          <p className="max-w-md sm:text-center">{privacidade}</p>
          <a
            href="#inicio"
            className="font-display uppercase tracking-[0.2em] text-prata transition-colors duration-300 hover:text-ouro-claro"
          >
            {rotuloTopo}
          </a>
        </div>
      </div>
    </footer>
  );
}