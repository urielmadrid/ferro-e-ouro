import type { ReactNode, SVGProps } from "react";

/**
 * Ícones da Ferro & Ouro.
 * Traço de 1,5 px, cantos vivos (sem arredondar) e um detalhe em ouro por ícone.
 * - Cor do traço: herda `currentColor` (use classes como `text-marfim`).
 * - Cor do detalhe: variável CSS `--fo-accent` (definida em app/globals.css).
 */

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number | string;
};

const gold = { stroke: "var(--fo-accent, #B08D57)" } as const;
const goldFill = { fill: "var(--fo-accent, #B08D57)", stroke: "none" } as const;

function Base({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="miter"
      strokeLinecap="butt"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconTesoura(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7.6 15.6 17 3.2M16.4 15.6 7 3.2" />
      <circle cx="6.2" cy="18.4" r="2.9" />
      <circle cx="17.8" cy="18.4" r="2.9" />
      <circle cx="12" cy="9.9" r="1" style={goldFill} />
    </Base>
  );
}

export function IconNavalha(props: IconProps) {
  return (
    <Base {...props}>
      <g transform="rotate(-35 12 12)">
        <path d="M2 9.5H14V8.5H20L22 10.5V14.5H14V13H5.5Z" />
        <circle cx="17" cy="11.5" r="1" style={goldFill} />
      </g>
    </Base>
  );
}

export function IconMaquina(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 8H17V18.5L14.5 21H9.5L7 18.5Z" />
      <path d="M7 8V4M9.5 8V4M12 8V4M14.5 8V4M17 8V4" style={gold} />
      <path d="M12 12.5V15.5" style={gold} />
    </Base>
  );
}

export function IconPente(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 6H21L19.5 11H3Z" />
      <path d="M4.5 11V18M7 11V18M9.5 11V18M12 11V18M14.5 11V18M17 11V18" style={gold} />
    </Base>
  );
}

export function IconBarba(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 8C5 4.5 8 3 12 3S19 4.5 19 8V13C19 18 16 21 12 21S5 18 5 13Z" />
      <path d="M5 11C6.5 16 9 15.5 12 15.5S17.5 16 19 11" style={gold} />
      <path d="M9 12.5C10 11.5 11.5 12 12 12.5C12.5 12 14 11.5 15 12.5" style={gold} />
      <path d="M10.5 18H13.5" style={gold} />
    </Base>
  );
}

export function IconSobrancelha(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 14C8 6.5 15.5 6 21 9.5C15 9.5 9 11 3 14Z" />
      <path d="M7 18.5C9.5 20 14.5 20 17 18.5" style={gold} />
    </Base>
  );
}

export function IconCadeira(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 3H16V12H8Z" />
      <path d="M5 12H19V15.5H5Z" />
      <path d="M5 12V8M19 12V8" />
      <path d="M12 15.5V19M7.5 21H16.5" style={gold} />
    </Base>
  );
}

export function IconRelogio(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3V4.8M21 12H19.2M12 21V19.2M3 12H4.8" />
      <path d="M12 6.5V12L15.5 14" style={gold} />
    </Base>
  );
}

export function IconCalendario(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 6H20V20H4Z" />
      <path d="M4 10.5H20" />
      <path d="M8 3V7.5M16 3V7.5" style={gold} />
      <path d="M7.5 14H9.5M11 14H13M14.5 14H16.5M7.5 17.2H9.5M11 17.2H13" />
    </Base>
  );
}

export function IconPacote(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10H20V20H4Z" />
      <path d="M3 6.5H21V10H3Z" />
      <path d="M12 6.5V20" style={gold} />
      <path d="M12 6.5C10 2.5 6.5 3.5 7.5 6.5H12M12 6.5C14 2.5 17.5 3.5 16.5 6.5H12" style={gold} />
    </Base>
  );
}

export function IconVapor(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 3C6.5 5 9.5 6 8 8.5M12 3C10.5 5 13.5 6 12 8.5M16 3C14.5 5 17.5 6 16 8.5" style={gold} />
      <path d="M4 12H20V20.5H4Z" />
      <path d="M4 16H20" />
    </Base>
  );
}

export function IconEscudo(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3L19.5 6V12C19.5 16.5 16.5 19.5 12 21C7.5 19.5 4.5 16.5 4.5 12V6Z" />
      <path d="M8.5 12L11 14.5L15.5 9.5" style={gold} />
    </Base>
  );
}

export function IconFrasco(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9.5 3H14.5V6.5H9.5Z" style={gold} />
      <path d="M10 6.5H14V9.5H10Z" />
      <path d="M7.5 9.5H16.5V21H7.5Z" />
      <path d="M10 13.5H14V17.5H10Z" style={gold} />
    </Base>
  );
}

export function IconPerfil(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 21C5 17 8 14.5 12 14.5S19 17 19 21Z" />
      <path d="M9.5 14.8L12 18L14.5 14.8" style={gold} />
    </Base>
  );
}

/** Mapa para buscar o ícone pelo nome (útil em data/services.seed.ts). */
export const icones = {
  tesoura: IconTesoura,
  navalha: IconNavalha,
  maquina: IconMaquina,
  pente: IconPente,
  barba: IconBarba,
  sobrancelha: IconSobrancelha,
  cadeira: IconCadeira,
  relogio: IconRelogio,
  calendario: IconCalendario,
  pacote: IconPacote,
  vapor: IconVapor,
  escudo: IconEscudo,
  frasco: IconFrasco,
  perfil: IconPerfil,
} as const;

export type IconName = keyof typeof icones;