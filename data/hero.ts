import type { IconName } from "@/components/icons";

// Textos da Hero. EDITE AQUI para trocar frases, botão secundário e destaques.
// O botão principal ("Agendar horário") vem de data/navegacao.ts.

export const heroConteudo = {
  eyebrow: "Barbearia premium",

  // Título em duas linhas; a palavra `destaque` aparece em ouro, em itálico serifado.
  titulo: {
    linha1: "A precisão do ferro.",
    linha2: "O acabamento do",
    destaque: "ouro.",
  },

  descricao:
    "Cortes, barba e acabamento com técnica clássica e atendimento sob medida. Escolha o serviço, o profissional e o horário em poucos toques.",

  secundario: { rotulo: "Conhecer a barbearia", href: "/#sobre" },

  destaques: [
    {
      icone: "calendario",
      titulo: "Agende online",
      texto: "Serviço, profissional e horário em poucos toques.",
    },
    {
      icone: "tesoura",
      titulo: "Técnica clássica",
      texto: "Corte e barba feitos com método e atenção ao detalhe.",
    },
    {
      icone: "cadeira",
      titulo: "Ambiente premium",
      texto: "Um espaço pensado para você relaxar durante o atendimento.",
    },
  ] satisfies { icone: IconName; titulo: string; texto: string }[],
};