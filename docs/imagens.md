# Ferro & Ouro — Direção de imagens

## Estratégia

Não há fotos reais. Eu não consigo gerar fotografias neste ambiente, então esta é a lista de **14 imagens** com prompts individuais. Você gera (ou escolhe em um banco) e salva no projeto; eu integro e trato.

**Duas opções, podem ser combinadas:**

1. **Gerador de imagens por IA** à sua escolha. Antes de usar, confira nos termos do serviço se o uso em site é permitido. Para os 3 retratos de barbeiros, IA é a melhor opção, porque não amarra um rosto de pessoa real a um nome inventado.
2. **Bancos gratuitos de licença livre** (Unsplash, Pexels). Para os 3 retratos, prefira IA; nos demais, use os termos de busca em inglês indicados em cada linha.

**Cuidados:**

- Peça sempre **sem texto, sem logotipos e sem marcas d'água**.
- Gere em resolução alta; eu reduzo e converto para WebP/AVIF na Fase 4.
- Se uma imagem sair com mãos ou ferramentas deformadas, descarte e gere de novo. Isso é comum em IA.

## Bloco de estilo (cole no final de TODOS os prompts)

```
cinematic photography, photorealistic, deep charcoal and black tones, warm tungsten key light with antique gold highlights, soft rim light, shallow depth of field, fine film grain, moody premium barbershop atmosphere, 35mm or 85mm lens look, no text, no logos, no watermark
```

## Onde salvar

Salve os arquivos originais em `public/images/originais/` com o nome indicado abaixo. O tratamento duotone e a conversão de formato acontecem depois, em um script que preparo na Fase 4.

## Lista de imagens

### Profissionais (proporção 4:5, 1200 x 1500 px)

| Arquivo | Prompt |
|---|---|
| `barbeiro-01.jpg` | Portrait of a confident barber in his early 40s, short groomed beard, black apron, arms crossed, looking at the camera, dark graphite background, warm rim light on shoulders, waist-up framing |
| `barbeiro-02.jpg` | Portrait of a young barber around 28, sharp skin fade haircut, holding a hair clipper at chest height, slight smile, side lighting from the left, dark background, waist-up framing |
| `barbeiro-03.jpg` | Portrait of a distinguished barber in his 50s, silver hair and neat mustache, holding a straight razor closed in one hand, rolled shirt sleeves, serious calm expression, dark textured wall behind |

### Sobre a barbearia

| Arquivo | Dimensão | Prompt |
|---|---|---|
| `sobre-cadeira.jpg` | 4:5, 1600 x 2000 | Close-up of a premium barber chair, black leather and polished steel with brass details, single warm spotlight from above, dark tiled floor, low camera angle |
| `sobre-ambiente.jpg` | 3:2, 2400 x 1600 | Wide interior of a luxury barbershop, dark walls, brass pendant lights, large mirrors with thin gold frames, wooden counter, two leather chairs, nobody in the frame, warm evening light |

### Galeria (proporções variadas para o layout assimétrico)

| Arquivo | Dimensão | Prompt |
|---|---|---|
| `galeria-01.jpg` | 3:2, 1800 x 1200 | Macro of barber scissors and a comb resting on a dark marble counter, reflections, hairs not visible, golden highlights on the steel |
| `galeria-02.jpg` | 4:5, 1200 x 1500 | Straight razor open on a worn leather strop, extreme close-up of the blade edge catching a warm light, background fully dark |
| `galeria-03.jpg` | 1:1, 1400 x 1400 | Close-up of a professional hair trimmer with gold-colored detail, held by a gloved hand, dark background, rim light on the metal |
| `galeria-04.jpg` | 3:2, 1800 x 1200 | Barber finishing a beard line with a straight razor, hot towel on the shoulder, hands in focus, client face partly out of frame |
| `galeria-05.jpg` | 4:5, 1200 x 1500 | Back of a man's head showing a clean skin fade haircut, side lighting that highlights the gradient, dark background |
| `galeria-06.jpg` | 4:5, 1200 x 1500 | Portrait of a man with a modern textured crop haircut and short beard, looking away, graphite backdrop, soft rim light |
| `galeria-07.jpg` | 3:2, 1800 x 1200 | Pomade tin and beard oil bottles in dark glass with gold caps, unbranded and without labels, on a wood and leather surface |
| `galeria-08.jpg` | 3:2, 1800 x 1200 | Detail of a brass pendant lamp reflected in a barbershop mirror, bokeh lights, deep shadows |

### Contato

| Arquivo | Dimensão | Prompt |
|---|---|---|
| `fachada-noite.jpg` | 3:2, 1800 x 1200 | Barbershop storefront at dusk, large glass window glowing with warm light, dark facade, no readable signage, empty sidewalk |

## Tratamento padrão (Fase 4)

Todas as imagens recebem o mesmo tratamento para parecerem da mesma sessão de fotos: sombras puxadas para o grafite (`#0A0A0B`), luzes aquecidas para o ouro, granulação leve e vinheta suave. Isso também esconde diferenças entre imagens de fontes distintas.

## O que não usar

Imagens com texto ou logotipo de terceiros, rostos de pessoas reais identificáveis apresentados com nomes inventados, imagens de baixa resolução ou com compressão visível.
