import type { ImagemConteudo } from "@/components/ui/Imagem";

// ============================================================================
// PROFISSIONAIS — EDITE AQUI.
//
// ATENÇÃO: nomes, descrições e horários abaixo são DADOS DE EXEMPLO.
// Troque pelos profissionais reais antes de publicar.
//
// - id: sem acentos nem espaços; usado no link de agendamento e no banco de dados
// - servicosIds: ids dos serviços de data/servicos.ts que o profissional realiza
// - disponibilidade: texto livre exibido no cartão. A disponibilidade REAL
//   (dias e horários livres) será calculada pelo sistema de agendamento na Fase 5.
// - imagem.src: troque null pelo caminho da foto, ex.: "/images/barbeiro-01.webp"
// ============================================================================

export type Profissional = {
  id: string;
  nome: string;
  especialidade: string;
  descricao: string;
  servicosIds: string[];
  disponibilidade: string;
  imagem: ImagemConteudo;
};

export const profissionaisConteudo = {
  eyebrow: "Nossa equipe",
  titulo: { linha1: "Mãos de", destaque: "ofício." },
  introducao:
    "Escolha o profissional pelo estilo de cada um. Se preferir, indicamos o primeiro horário livre na agenda de quem estiver disponível.",
  rotuloBotao: "Agendar com",
  qualquer: { rotulo: "Primeiro profissional disponível", id: "qualquer" },
};

export const profissionais: Profissional[] = [
  {
    id: "rafael-moura",
    nome: "Rafael Moura",
    especialidade: "Corte clássico e tesoura",
    descricao:
      "Trabalha a tesoura com calma e método. Gosta de linhas limpas, risca bem marcada e acabamento na navalha.",
    servicosIds: ["corte-masculino", "corte-classico", "corte-e-barba", "sobrancelha"],
    disponibilidade: "Terça a sábado · 9h às 19h",
    imagem: {
      src: null,
      alt: "Retrato de Rafael Moura, barbeiro, de avental preto e braços cruzados",
      arquivo: "barbeiro-01",
    },
  },
  {
    id: "diego-alencar",
    nome: "Diego Alencar",
    especialidade: "Degradê e acabamentos",
    descricao:
      "Especialista em transições suaves, do fade baixo ao alto. Cuida de cada linha de contorno com precisão.",
    servicosIds: ["corte-masculino", "degrade", "acabamento", "sobrancelha"],
    disponibilidade: "Quarta a domingo · 10h às 20h",
    imagem: {
      src: null,
      alt: "Retrato de Diego Alencar, barbeiro, segurando uma máquina de acabamento",
      arquivo: "barbeiro-02",
    },
  },
  {
    id: "caio-brandao",
    nome: "Caio Brandão",
    especialidade: "Barba e navalha",
    descricao:
      "Modelagem de barba, toalha quente e navalha afiada. Atendimento sem pressa e atenção ao desenho do rosto.",
    servicosIds: ["barba", "corte-e-barba", "acabamento", "pacote-especial"],
    disponibilidade: "Segunda a sexta · 9h às 18h",
    imagem: {
      src: null,
      alt: "Retrato de Caio Brandão, barbeiro de cabelo grisalho, segurando uma navalha fechada",
      arquivo: "barbeiro-03",
    },
  },
];