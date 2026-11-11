// Itens do menu. EDITE AQUI os textos e a ordem.
// Cada `href` precisa apontar para o `id` de uma seção da página (ex.: "/#sobre" -> <section id="sobre">).

export type ItemNavegacao = {
  rotulo: string;
  href: string;
};

export const navegacao: ItemNavegacao[] = [
  { rotulo: "Sobre", href: "/#sobre" },
  { rotulo: "Serviços", href: "/#servicos" },
  { rotulo: "Profissionais", href: "/#profissionais" },
  { rotulo: "Galeria", href: "/#galeria" },
  { rotulo: "Diferenciais", href: "/#diferenciais" },
  { rotulo: "Contato", href: "/#contato" },
];

// Botão principal do cabeçalho.
export const ctaAgendar: ItemNavegacao = {
  rotulo: "Agendar horário",
  href: "/#agendamento",
};