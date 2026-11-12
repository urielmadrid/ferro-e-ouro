import type { ImagemConteudo } from "@/components/ui/Imagem";

// ============================================================================
// GALERIA — EDITE AQUI.
//
// As 8 imagens estão descritas em docs/imagens.md (galeria-01 a galeria-08).
//
// - imagem.src: troque null pelo caminho da foto, ex.: "/images/galeria-01.webp".
//   Enquanto for null, o quadro aparece como espaço reservado e NÃO é clicável.
//   Quando tiver foto, o quadro passa a abrir em tela cheia automaticamente.
// - proporcao: formato do quadro, no padrão CSS ("3 / 2", "4 / 5", "1 / 1").
//   Use a mesma proporção da foto para ela não ser cortada.
// - imagem.alt: descreva o que aparece na foto (leitores de tela usam esse texto).
// ============================================================================

export type ItemGaleria = {
  id: string;
  imagem: ImagemConteudo;
  proporcao: string;
  legenda: string;
};

export const galeriaConteudo = {
  eyebrow: "Galeria",
  titulo: { linha1: "O ofício em", destaque: "imagens." },
  introducao:
    "Ferramentas afiadas, mãos firmes e atenção ao detalhe. Um pouco do que acontece dentro da barbearia.",
};

export const galeriaItens: ItemGaleria[] = [
  {
    id: "galeria-01",
    imagem: {
      src: null,
      alt: "Tesoura de barbeiro e pente sobre uma bancada de mármore escuro, com reflexos dourados no aço",
      arquivo: "galeria-01",
    },
    proporcao: "3 / 2",
    legenda: "Tesoura e pente",
  },
  {
    id: "galeria-02",
    imagem: {
      src: null,
      alt: "Navalha aberta sobre um couro de afiar, com a lâmina captando uma luz quente",
      arquivo: "galeria-02",
    },
    proporcao: "4 / 5",
    legenda: "Navalha no couro",
  },
  {
    id: "galeria-03",
    imagem: {
      src: null,
      alt: "Máquina de acabamento com detalhe dourado nas mãos de um barbeiro de luvas",
      arquivo: "galeria-03",
    },
    proporcao: "1 / 1",
    legenda: "Máquina de acabamento",
  },
  {
    id: "galeria-04",
    imagem: {
      src: null,
      alt: "Barbeiro finalizando o contorno da barba com navalha, toalha quente no ombro",
      arquivo: "galeria-04",
    },
    proporcao: "3 / 2",
    legenda: "Acabamento da barba",
  },
  {
    id: "galeria-05",
    imagem: {
      src: null,
      alt: "Nuca de um homem com degradê bem feito, iluminada de lado",
      arquivo: "galeria-05",
    },
    proporcao: "4 / 5",
    legenda: "Degradê",
  },
  {
    id: "galeria-06",
    imagem: {
      src: null,
      alt: "Retrato de homem com corte moderno texturizado e barba curta, olhando para o lado",
      arquivo: "galeria-06",
    },
    proporcao: "4 / 5",
    legenda: "Corte moderno",
  },
  {
    id: "galeria-07",
    imagem: {
      src: null,
      alt: "Pomada e óleo de barba em frascos escuros com tampas douradas sobre madeira e couro",
      arquivo: "galeria-07",
    },
    proporcao: "3 / 2",
    legenda: "Produtos",
  },
  {
    id: "galeria-08",
    imagem: {
      src: null,
      alt: "Luminária de latão refletida no espelho da barbearia, com luzes desfocadas ao fundo",
      arquivo: "galeria-08",
    },
    proporcao: "3 / 2",
    legenda: "Luminária e espelho",
  },
];