// Funções de formatação usadas em várias partes do site (serviços, agendamento, resumo).

const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** 4500 -> "R$ 45,00". Os preços são guardados em centavos para evitar erros de arredondamento. */
export function formatarPreco(centavos: number): string {
  return moeda.format(centavos / 100);
}

/** 40 -> "40 min"; 60 -> "1 h"; 70 -> "1 h 10 min". */
export function formatarDuracao(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  if (horas === 0) return `${resto} min`;
  if (resto === 0) return `${horas} h`;
  return `${horas} h ${resto} min`;
}