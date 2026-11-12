import type { ImagemConteudo } from "@/components/ui/Imagem";

// ============================================================================
// CONTATO E LOCALIZAÇÃO — EDITE AQUI.
//
// ATENÇÃO: endereço e horários abaixo são DADOS DE EXEMPLO (endereço inventado).
// Troque pelos dados reais antes de publicar.
//
// Os canais (WhatsApp, telefone, Instagram, e-mail) e o mapa estão como null de
// propósito: só aparecem no site quando você preencher. Assim nenhum botão leva
// a um número ou a um endereço que não seja o da barbearia.
//
// - whatsapp.numero: só dígitos, com país e DDD. Ex.: "5553999999999"
// - whatsapp.exibir: como o número aparece escrito. Ex.: "(53) 99999-9999"
// - mapa.embedUrl: no Google Maps, busque o endereço > Compartilhar > Incorporar
//   um mapa > copie só o endereço que está dentro de src="..."
// - mapa.linkRota: no Google Maps, busque o endereço > Compartilhar > Copiar link
// - imagem.src: troque null por "/images/fachada-noite.webp" quando tiver a foto
//   (usada enquanto o mapa não estiver preenchido)
// ============================================================================

export const contatoConteudo = {
  eyebrow: "Contato",
  titulo: { linha1: "Venha", destaque: "nos visitar." },
  introducao:
    "A cadeira está reservada para você. Chegue com hora marcada ou fale com a gente pelos canais abaixo.",
  rotuloAgendar: "Agendar horário",
  rotuloRota: "Como chegar",
};

export const endereco = {
  linha1: "Rua do Ofício, 120",
  linha2: "Centro · Sua cidade, UF",
};

export const horarios: { dias: string; horas: string }[] = [
  { dias: "Segunda a sexta", horas: "9h às 20h" },
  { dias: "Sábado", horas: "9h às 19h" },
  { dias: "Domingo", horas: "10h às 16h" },
];

export type Canais = {
  whatsapp: { numero: string; exibir: string; mensagem: string } | null;
  telefone: { numero: string; exibir: string } | null;
  instagram: { usuario: string } | null;
  email: string | null;
};

export const canais: Canais = {
  whatsapp: null,
  telefone: null,
  instagram: null,
  email: null,
};

export const mapa: { embedUrl: string | null; linkRota: string | null } = {
  embedUrl: null,
  linkRota: null,
};

export const imagemFachada: ImagemConteudo = {
  src: null,
  alt: "Fachada da barbearia ao entardecer, com a vitrine iluminada em luz quente",
  arquivo: "fachada-noite",
};