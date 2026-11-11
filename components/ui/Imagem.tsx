import Image from "next/image";

/**
 * Imagem do site.
 * - Com `src` preenchido: mostra a foto (arquivo em public/images/...).
 * - Com `src` nulo: mostra um quadro elegante com o monograma (espaço reservado).
 *   O nome do arquivo esperado aparece só durante o desenvolvimento (npm run dev).
 */
export type ImagemConteudo = {
  /** Caminho a partir de /public, ex.: "/images/sobre-cadeira.webp". Use null enquanto não houver foto. */
  src: string | null;
  alt: string;
  /** Nome sugerido do arquivo (ver docs/imagens.md). */
  arquivo: string;
};

export function Imagem({
  src,
  alt,
  arquivo,
  proporcao,
  sizes,
  className = "",
  prioridade = false,
}: ImagemConteudo & {
  /** Proporção CSS, ex.: "4 / 5" ou "3 / 2". */
  proporcao: string;
  sizes: string;
  className?: string;
  prioridade?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-grafite ${className}`}
      style={{ aspectRatio: proporcao }}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={prioridade}
            className="object-cover"
          />
          {/* véu escuro leve para combinar com a identidade */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(10,10,11,0.45), rgba(10,10,11,0) 55%)",
            }}
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: "radial-gradient(ellipse at 30% 20%, #2a2c31, #111214 70%)",
          }}
        >
          <div className="absolute inset-0 bg-[url('/brand/pattern-listras.svg')] opacity-60" />
          <Image
            src="/brand/monograma.svg"
            alt=""
            width={200}
            height={200}
            className="relative h-1/3 w-auto opacity-30"
          />
          {process.env.NODE_ENV === "development" && (
            <span className="absolute bottom-3 left-3 font-display text-[0.65rem] uppercase tracking-[0.2em] text-aco">
              {arquivo}
            </span>
          )}
        </div>
      )}
    </div>
  );
}