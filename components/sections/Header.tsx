"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ctaAgendar, navegacao } from "@/data/navegacao";

const idDe = (href: string) => href.split("#")[1] ?? "";

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [ativo, setAtivo] = useState("");
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

  // Fundo e borda aparecem depois que a página rola um pouco.
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Destaca no menu a seção que está no meio da tela.
  useEffect(() => {
    const ids = ["inicio", ...navegacao.map((i) => idDe(i.href)), idDe(ctaAgendar.href)];
    const secoes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (secoes.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setAtivo(entrada.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secoes.forEach((secao) => observador.observe(secao));
    return () => observador.disconnect();
  }, []);

  // Menu mobile: trava a rolagem, fecha com Esc, mantém o Tab dentro do menu.
  useEffect(() => {
    if (!menuAberto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    painelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const focaveis = () =>
      [
        botaoRef.current,
        ...Array.from(painelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []),
      ].filter((el): el is HTMLElement => el !== null);

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuAberto(false);
        botaoRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const itens = focaveis();
      if (itens.length === 0) return;
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };

    const aoRedimensionar = () => {
      if (window.innerWidth >= 1024) setMenuAberto(false);
    };

    document.addEventListener("keydown", aoTeclar);
    window.addEventListener("resize", aoRedimensionar);
    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", aoTeclar);
      window.removeEventListener("resize", aoRedimensionar);
    };
  }, [menuAberto]);

  const fechar = () => setMenuAberto(false);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ouro focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:text-onix"
      >
        Pular para o conteúdo
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          rolou || menuAberto
            ? "border-grafite-claro/60 bg-onix/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 lg:px-10 ${
            rolou ? "py-3" : "py-5 lg:py-6"
          }`}
        >
          <a
            href="/#inicio"
            aria-label="Ferro & Ouro, ir para o início"
            className="shrink-0"
            onClick={fechar}
          >
            <Image
              src="/brand/monograma.svg"
              alt=""
              width={200}
              height={200}
              className="h-11 w-11 sm:hidden"
            />
            <Image
              src="/brand/logo-horizontal.svg"
              alt=""
              width={670}
              height={120}
              className="hidden h-10 w-auto sm:block"
            />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
            {navegacao.map((item) => {
              const ligado = ativo === idDe(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={ligado ? "location" : undefined}
                  className={`relative font-display text-xs uppercase tracking-[0.22em] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-ouro after:transition-transform after:duration-300 hover:text-marfim hover:after:scale-x-100 ${
                    ligado ? "text-marfim after:scale-x-100" : "text-prata after:scale-x-0"
                  }`}
                >
                  {item.rotulo}
                </a>
              );
            })}
          </nav>

          <a
            href={ctaAgendar.href}
            className="corte hidden bg-ouro px-7 py-3 font-display text-xs uppercase tracking-[0.2em] text-onix transition-colors duration-300 hover:bg-ouro-claro lg:inline-block"
          >
            {ctaAgendar.rotulo}
          </a>

          <button
            ref={botaoRef}
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-6 bg-ouro transition-all duration-300 ${
                menuAberto ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-[1.5px] bg-ouro transition-all duration-300 ${
                menuAberto ? "w-6 -rotate-45" : "w-4 translate-x-1 translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        ref={painelRef}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-onix px-8 pt-24 pb-10 transition-[opacity,visibility] duration-500 lg:hidden ${
          menuAberto ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Menu mobile" className="flex flex-col">
          {navegacao.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={fechar}
              className="flex items-baseline gap-4 border-b border-grafite-claro py-4 font-display text-3xl font-light uppercase tracking-[0.12em] text-marfim transition-colors hover:text-ouro-claro"
            >
              <span className="text-xs tracking-[0.2em] text-ouro">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.rotulo}
            </a>
          ))}
        </nav>

        <a
          href={ctaAgendar.href}
          onClick={fechar}
          className="corte mt-10 bg-ouro px-8 py-4 text-center font-display text-sm uppercase tracking-[0.2em] text-onix transition-colors hover:bg-ouro-claro"
        >
          {ctaAgendar.rotulo}
        </a>

        <Image
          src="/brand/divisor-regua.svg"
          alt=""
          width={600}
          height={24}
          className="mx-auto mt-10 h-auto w-full max-w-xs"
        />
      </div>
    </>
  );
}