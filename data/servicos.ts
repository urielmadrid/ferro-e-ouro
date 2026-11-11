import type { IconName } from "@/components/icons";

// ============================================================================
// SERVIÇOS — EDITE AQUI.
//
// ATENÇÃO: os preços e as durações abaixo são VALORES DE EXEMPLO.
// Troque pelos valores reais da barbearia antes de publicar.
//
// - precoCentavos: preço em centavos (4500 = R$ 45,00)
// - duracaoMin: duração estimada em minutos (o agendamento usa esse valor para
//   calcular os horários livres)
// - icone: nome de um ícone de components/icons (tesoura, navalha, maquina,
//   pente, barba, sobrancelha, cadeira, relogio, calendario, pacote)
// - id: não use acentos nem espaços; será usado no link e no banco de dados
// ============================================================================

export type Servico = {
  id: string;
  nome: string;
  descricao: string;
  duracaoMin: number;
  precoCentavos: number;
  /** Mostra "a partir de" antes do preço. */
  aPartirDe?: boolean;
  icone: IconName;
  /** Selo no canto do cartão (ex.: "Combo"). */
  etiqueta?: string;
};

export const servicosConteudo = {
  eyebrow: "O que fazemos",
  titulo: { linha1: "Nossos", destaque: "serviços." },
  introducao:
    "Escolha um serviço para começar o agendamento. Em seguida você seleciona o profissional, o dia e o horário.",
  rotuloBotao: "Agendar",
};

export const servicos: Servico[] = [
  {
    id: "corte-masculino",
    nome: "Corte masculino",
    descricao: "Corte na tesoura e na máquina, com lavagem e finalização.",
    duracaoMin: 40,
    precoCentavos: 5000,
    icone: "tesoura",
  },
  {
    id: "degrade",
    nome: "Degradê",
    descricao: "Transição suave nas laterais, do fade baixo ao alto, com acabamento na navalha.",
    duracaoMin: 45,
    precoCentavos: 6000,
    icone: "maquina",
  },
  {
    id: "corte-classico",
    nome: "Corte clássico",
    descricao: "Cabelo na tesoura, risca definida e penteado ao estilo tradicional.",
    duracaoMin: 40,
    precoCentavos: 5500,
    icone: "pente",
  },
  {
    id: "barba",
    nome: "Barba",
    descricao: "Modelagem, toalha quente e navalha para um contorno limpo e preciso.",
    duracaoMin: 30,
    precoCentavos: 4000,
    icone: "barba",
  },
  {
    id: "corte-e-barba",
    nome: "Corte + barba",
    descricao: "O corte da sua escolha somado à barba completa, em um só atendimento.",
    duracaoMin: 70,
    precoCentavos: 8500,
    icone: "cadeira",
    etiqueta: "Combo",
  },
  {
    id: "sobrancelha",
    nome: "Sobrancelha",
    descricao: "Alinhamento e limpeza com navalha, mantendo o desenho natural.",
    duracaoMin: 15,
    precoCentavos: 2000,
    icone: "sobrancelha",
  },
  {
    id: "acabamento",
    nome: "Acabamento",
    descricao: "Contorno do pescoço, costeletas e linhas na navalha para manter o corte em dia.",
    duracaoMin: 20,
    precoCentavos: 2500,
    icone: "navalha",
  },
  {
    id: "pacote-especial",
    nome: "Pacotes especiais",
    descricao: "Corte, barba, sobrancelha e toalha quente em uma experiência completa.",
    duracaoMin: 90,
    precoCentavos: 13000,
    aPartirDe: true,
    icone: "pacote",
    etiqueta: "Combo",
  },
];