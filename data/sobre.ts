import type { ImagemConteudo } from "@/components/ui/Imagem";

// Textos e imagens da seção Sobre. EDITE AQUI.
// Para colocar as fotos: salve o arquivo em public/images/ e troque `src: null`
// por, por exemplo, `src: "/images/sobre-cadeira.webp"`.

export const sobreConteudo = {
  eyebrow: "Sobre a Ferro & Ouro",

  // Título em duas linhas; `destaque` aparece em ouro, em itálico serifado.
  titulo: {
    linha1: "Tradição de navalha.",
    linha2: "Cuidado de",
    destaque: "ateliê.",
  },

  // O primeiro parágrafo aparece maior; os demais seguem em texto normal.
  paragrafos: [
    "A Ferro & Ouro nasceu de uma ideia simples: o ferro da navalha e da tesoura exige precisão, e o ouro do acabamento exige capricho. Em cada atendimento, unimos os dois.",
    "Aqui o tempo é dedicado a você. Ouvimos o que você quer, observamos o formato do rosto e o tipo do cabelo, e só então o primeiro corte acontece.",
  ],

  citacao: "Um corte bem-feito não se nota. Nota-se o homem que sai da cadeira.",

  principios: [
    {
      titulo: "Precisão",
      texto: "Cada linha, cada degradê e cada acabamento são feitos com medida e método.",
    },
    {
      titulo: "Calma",
      texto: "Hora marcada é hora respeitada. Sem pressa e sem fila de espera.",
    },
    {
      titulo: "Cuidado",
      texto: "Toalha quente, navalha afiada e atenção ao que você pediu.",
    },
  ],

  link: { rotulo: "Agendar meu horário", href: "/#agendamento" },

  imagens: {
    principal: {
      src: null,
      alt: "Cadeira de barbeiro em couro preto e latão sob uma luz quente",
      arquivo: "sobre-cadeira",
    } satisfies ImagemConteudo,
    secundaria: {
      src: null,
      alt: "Interior da barbearia com espelhos, luminárias de latão e bancada de madeira",
      arquivo: "sobre-ambiente",
    } satisfies ImagemConteudo,
  },
};