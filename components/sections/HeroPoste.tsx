/**
 * Poste de barbeiro em SVG (ferro e ouro).
 * - As listras deslizam por CSS (classe `.listras-poste` em app/globals.css).
 * - Na Fase 6 a cena 3D entra por cima em telas potentes; este SVG continua como
 *   alternativa para celulares fracos e para quem usa "reduzir movimento".
 */
export function HeroPoste({ className = "h-full w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 540"
      aria-hidden="true"
      focusable="false"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <radialGradient id="hp-brilho" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#B08D57" stopOpacity=".55" />
          <stop offset="1" stopColor="#B08D57" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hp-latao" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6F5530" />
          <stop offset=".35" stopColor="#F0DCAA" />
          <stop offset=".62" stopColor="#B08D57" />
          <stop offset="1" stopColor="#5A4426" />
        </linearGradient>
        <linearGradient id="hp-cilindro" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".7" />
          <stop offset=".16" stopColor="#000" stopOpacity="0" />
          <stop offset=".3" stopColor="#fff" stopOpacity=".34" />
          <stop offset=".42" stopColor="#fff" stopOpacity="0" />
          <stop offset=".78" stopColor="#000" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity=".75" />
        </linearGradient>
        <linearGradient id="hp-sombra-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".55" />
          <stop offset=".12" stopColor="#000" stopOpacity="0" />
          <stop offset=".88" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".55" />
        </linearGradient>
        <clipPath id="hp-tubo">
          <rect x="78" y="124" width="84" height="332" />
        </clipPath>
        <filter id="hp-desfoque-grande" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="hp-desfoque-pequeno" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* luz ambiente e reflexo no chão */}
      <ellipse cx="120" cy="290" rx="150" ry="270" fill="url(#hp-brilho)" filter="url(#hp-desfoque-grande)" />
      <ellipse cx="120" cy="516" rx="84" ry="8" fill="#B08D57" fillOpacity=".4" filter="url(#hp-desfoque-pequeno)" />

      {/* tubo de vidro com listras (o grupo .listras-poste anda 84px e recomeça) */}
      <g clipPath="url(#hp-tubo)">
        <rect x="78" y="124" width="84" height="332" fill="#101113" />
        <g className="listras-poste">
          <g fill="#B08D57">
            <polygon points="78,-44 162,-78 162,-58 78,-24" />
            <polygon points="78,40 162,6 162,26 78,60" />
            <polygon points="78,124 162,90 162,110 78,144" />
            <polygon points="78,208 162,174 162,194 78,228" />
            <polygon points="78,292 162,258 162,278 78,312" />
            <polygon points="78,376 162,342 162,362 78,396" />
            <polygon points="78,460 162,426 162,446 78,480" />
            <polygon points="78,544 162,510 162,530 78,564" />
            <polygon points="78,628 162,594 162,614 78,648" />
          </g>
          <g fill="#C9CCD1">
            <polygon points="78,-2 162,-36 162,-16 78,18" />
            <polygon points="78,82 162,48 162,68 78,102" />
            <polygon points="78,166 162,132 162,152 78,186" />
            <polygon points="78,250 162,216 162,236 78,270" />
            <polygon points="78,334 162,300 162,320 78,354" />
            <polygon points="78,418 162,384 162,404 78,438" />
            <polygon points="78,502 162,468 162,488 78,522" />
            <polygon points="78,586 162,552 162,572 78,606" />
            <polygon points="78,670 162,636 162,656 78,690" />
          </g>
        </g>
        <rect x="78" y="124" width="84" height="332" fill="url(#hp-cilindro)" />
        <rect x="78" y="124" width="84" height="332" fill="url(#hp-sombra-v)" />
      </g>
      <rect x="78.5" y="124.5" width="83" height="331" fill="none" stroke="#C9CCD1" strokeOpacity=".35" />

      {/* tampa superior */}
      <path d="M70 112C70 84 92 76 120 76S170 84 170 112Z" fill="url(#hp-latao)" />
      <rect x="64" y="112" width="112" height="14" fill="url(#hp-latao)" />
      <rect x="64" y="124" width="112" height="2" fill="#000" fillOpacity=".35" />
      <rect x="117" y="62" width="6" height="16" fill="url(#hp-latao)" />
      <circle cx="120" cy="58" r="8" fill="url(#hp-latao)" />

      {/* base */}
      <rect x="64" y="454" width="112" height="14" fill="url(#hp-latao)" />
      <rect x="64" y="454" width="112" height="2" fill="#000" fillOpacity=".35" />
      <path d="M72 468H168L184 500H56Z" fill="url(#hp-latao)" />
      <rect x="44" y="500" width="152" height="14" rx="2" fill="url(#hp-latao)" />
      <rect x="44" y="510" width="152" height="4" rx="2" fill="#000" fillOpacity=".4" />
    </svg>
  );
}