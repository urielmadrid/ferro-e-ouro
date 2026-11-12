import type { IconName } from "@/components/icons";

// ============================================================================
// DIFERENCIAIS — EDITE AQUI.
//
// ATENÇÃO: os textos abaixo são EXEMPLOS. Confirme com a barbearia real se cada
// afirmação é verdadeira (higiene, toalha quente, produtos) e apague ou troque o
// que não for. Não coloque números (anos de experiência, clientes atendidos)
// sem dado real.
//
// - icone: nome de um ícone de components/icons/index.tsx
//   (tesoura, navalha, maquina, pente, barba, sobrancelha, cadeira, relogio,
//    calendario, pacote, vapor, escudo, frasco, perfil)
// - Os dois primeiros itens descrevem o sistema de agendamento da Fase 5;
//   só deixe no ar depois que ele estiver funcionando.
// ============================================================================

export type Diferencial = {
  id: string;
  icone: IconName;
  titulo: string;
  texto: string;
};

export const diferenciaisConteudo = {
  eyebrow: "Diferenciais",
  titulo: { linha1: "O que faz a", destaque: "diferença." },
  introducao:
    "Não é só o corte. É o cuidado antes, durante e depois da cadeira.",
  rotuloBotao: "Agendar meu horário",
};

export const diferenciais: Diferencial[] = [
  {
    id: "agenda-online",
    icone: "calendario",
    titulo: "Agenda online",
    texto:
      "Escolha serviço, profissional e horário em poucos passos. Cada horário só pode ser reservado por uma pessoa.",
  },
  {
    id: "hora-marcada",
    icone: "relogio",
    titulo: "Hora marcada",
    texto:
      "Seu horário é reservado só para você. Sem fila de espera e sem perder a tarde inteira.",
  },
  {
    id: "toalha-quente",
    icone: "vapor",
    titulo: "Toalha quente e navalha",
    texto:
      "O ritual clássico da barba, feito com calma e com a lâmina bem afiada.",
  },
  {
    id: "higiene",
    icone: "escudo",
    titulo: "Higiene em primeiro lugar",
    texto: "Ferramentas higienizadas entre um atendimento e outro.",
  },
  {
    id: "produtos",
    icone: "frasco",
    titulo: "Produtos selecionados",
    texto:
      "Pomadas e óleos escolhidos pelo resultado, para o corte durar além da cadeira.",
  },
  {
    id: "profissional",
    icone: "perfil",
    titulo: "Você escolhe quem atende",
    texto:
      "Cada barbeiro tem seu estilo. Escolha o seu ou fique com o primeiro horário livre.",
  },
];