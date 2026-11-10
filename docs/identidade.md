# Ferro & Ouro — Identidade visual (v1)

Status: proposta da Fase 2, aguardando aprovação.

## 1. Conceito

**Ferro & Ouro** une os dois materiais da barbearia: o ferro (navalha, tesoura, máquina, estrutura da cadeira) e o ouro (latão, detalhes, acabamento). A marca é escura e quente: preto ônix, grafite, prata de aço e ouro envelhecido, com luz de fim de tarde.

**Assinatura gráfica: o corte de navalha.** Uma diagonal de aproximadamente 58 graus aparece nas pontas do monograma, nas letras F e E do wordmark, nos botões e nos cards. É o elemento que diferencia a marca de um site genérico.

**Tradição + tecnologia:** a tradição vem da navalha, do poste de barbeiro e da régua graduada; a tecnologia vem da geometria precisa, do brilho metálico e do 3D.

## 2. Logotipo

| Arquivo (`public/brand/`) | Uso |
|---|---|
| `monograma.svg` | Símbolo principal: "F" formado por uma navalha de ferro (haste, com pivô) e duas lâminas de ouro embutidas (braços), dentro de um anel metade ferro, metade ouro. |
| `logo-horizontal.svg` | Header, footer, documentos. Monograma + wordmark "FERRO ◆ OURO". |
| `logo-vertical.svg` | Capa, redes sociais, tela de abertura. |
| `monograma-mono.svg` | Uma cor só, herda `currentColor` quando usado inline. Para carimbos, relevo e impressão. |
| `favicon.svg` | Ícone da aba, versão compacta com fundo ônix. |

**O wordmark é desenhado, não digitado.** As letras são construídas com traço geométrico próprio; F e E levam o corte de navalha. O losango ◆ substitui o "&" no logotipo; em texto corrido o nome continua "Ferro & Ouro".

**Cores do logotipo:** "FERRO" em prata `#C9CCD1`, "OURO" em ouro `#B08D57`, símbolo com gradientes de ferro e ouro.

**Versões:** todos os arquivos coloridos foram desenhados para fundo escuro. Em fundo claro, use `monograma-mono.svg` em preto.

**Área de respeito:** margem livre mínima de 1/4 da altura do monograma em todos os lados.

**Tamanhos mínimos:** monograma 24 px; logo horizontal 160 px de largura; logo vertical 90 px de largura; favicon 16 px.

**Não fazer:** distorcer, girar, trocar as cores, adicionar sombra, aplicar sobre fotos sem escurecer o fundo.

## 3. Paleta

### Ferro (base)

| Nome | Hex | Uso |
|---|---|---|
| Ônix | `#0A0A0B` | Fundo principal |
| Carvão | `#111214` | Seções alternadas |
| Grafite | `#1A1B1E` | Cards e superfícies |
| Grafite claro | `#2A2C31` | Bordas e divisores |
| Aço | `#8A8F98` | Texto secundário |
| Prata | `#C9CCD1` | Títulos secundários, wordmark "FERRO" |
| Brilho de ferro | `#F1F2F4` | Realces metálicos |

### Ouro (acento)

| Nome | Hex | Uso |
|---|---|---|
| Ouro escuro | `#6F5530` | Sombra do gradiente |
| Ouro envelhecido | `#B08D57` | Acento principal, botões, linhas |
| Ouro claro | `#D8BC85` | Hover e destaques |
| Champanhe | `#F0DCAA` | Brilho nos gradientes |

### Apoio

| Nome | Hex | Uso |
|---|---|---|
| Marfim | `#EDE7DA` | Texto principal sobre fundo escuro |
| Bordô de poste | `#5A1E24` | Uso raro: detalhe de poste de barbeiro, estados pontuais. Não usar como cor de texto. |

**Regras:** o ouro ocupa no máximo cerca de 10% da superfície; fundo sempre escuro; nunca usar gradiente de ouro em blocos grandes de texto.

**Contraste calculado (WCAG, sobre Ônix):** Marfim 16,1:1 · Prata 12,3:1 · Ouro claro 10,8:1 · Ouro envelhecido 6,4:1 · Aço 6,1:1. Texto Ônix sobre botão de Ouro envelhecido: 6,4:1. Texto Aço sobre Grafite: 5,3:1. Todos acima de 4,5:1, exceto o Bordô (1,6:1), por isso ele não serve para texto. A auditoria completa fica para a Fase 9.

## 4. Tipografia

Todas gratuitas (licença OFL) e carregadas pelo `next/font/google`, que hospeda os arquivos no próprio site.

| Papel | Fonte | Uso |
|---|---|---|
| Títulos e rótulos | **Jost** | Caixa-alta, peso 300 a 500, espaçamento entre letras ampliado (cerca de 0,12em). Combina com a geometria do wordmark. |
| Destaque editorial | **Instrument Serif** (itálico) | Uma palavra por título, em ouro, para dar contraste humano ao geométrico. |
| Texto corrido e interface | **Manrope** | Parágrafos, formulários, menus. |

## 5. Elementos gráficos

- **Corte de navalha:** diagonal assinatura. Em botões e cards vira um canto cortado; em imagens, uma máscara diagonal.
- **Régua graduada** (`divisor-regua.svg`): separador entre seções, com losango central. Evoca medida, precisão e degradê.
- **Listras diagonais** (`pattern-listras.svg`): referência discreta ao poste de barbeiro, em ouro a 22% de opacidade.
- **Granulação** (`grain.svg`): textura de filme sobre fundos escuros, a 4% a 8% de opacidade.
- **Moldura dupla:** anel externo grosso + anel interno fino, herdado do monograma, para destacar imagens e selos.
- **Losango ◆:** separador de texto e marcador de lista.

## 6. Cena 3D (Fase 6)

Um **poste de barbeiro** construído por código (sem modelo externo), com listras helicoidais em ferro e ouro, tampas de latão, iluminação quente e poeira em suspensão. Parallax pelo mouse. Em celulares fracos ou com "reduzir movimento" ativo, entra uma imagem estática no lugar.

## 7. Movimento

- Entradas suaves: 600 a 900 ms, com desaceleração longa.
- Nada pisca, nada balança sem motivo; hover responde em menos de 200 ms.
- Todo efeito respeita `prefers-reduced-motion`.
- O 3D só carrega depois do conteúdo principal.

## 8. Ícones (próxima etapa)

Conjunto próprio de 10 ícones em traço de 1,5 px, com cantos vivos (sem arredondar) e um detalhe em ouro por ícone: tesoura, navalha, máquina, pente, barba, sobrancelha, cadeira, relógio, calendário e pacote. Ficam em `components/icons/index.tsx` como componentes React. O traço herda a cor do texto (`currentColor`) e o detalhe usa a variável `--fo-accent`.

## 9. Direção de imagem

Veja `docs/imagens.md`. Resumo: como não há fotos reais, as imagens são geradas por IA ou escolhidas em bancos gratuitos, e **todas passam pelo mesmo tratamento** (preto grafite nas sombras, ouro quente nas luzes, granulação, vinheta leve) para formarem uma família visual.