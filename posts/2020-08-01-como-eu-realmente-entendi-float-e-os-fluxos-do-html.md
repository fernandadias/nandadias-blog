---
title: como eu realmente entendi float e os fluxos do html
description: espero que esse texto te ajude a parar de chutar a propriedade
  float nos seus próximos estilos
date: 2020-07-07 02:44:02
thumbnail: assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html.jpeg
category: front
---
Acho que existe uma caminhada comum quando o assunto é css: chutar, chutar muito, chutar mais um tanto e começar a estudar. Pois é, depois de muita gambiarra patrocinada por mim venho por meio desse contar as minhas descobertas atuais sobre **css floats** e espero que te ajude a tomar decisões mais conscientes nos seus próximos layouts.

# Como usar

O `float` te ajuda a "flutuar" elementos para a esquerda ou para a direita do viewport (basicamente).

Então o uso é simples (e talvez por isso a gente chute tanto). Basta inserir a propriedade `float: left/right` ao elemento.

```
.elemento-alvo {
   float: right;
}
```

# O que acontece por baixos dos panos

Aqui que a coisa aperta, os BOs em geral aparecem e a minha mente explodiu quando comecei a aprender. Responde pra você ai: sabe o que acontece no DOM quando um elemendo passa a ter a propriedade float?

Eu não sabia, e quando entendi fez sentido a quantidade de gambiarras que já fiz com float nessa vida rs. Primeiro, vamos entender como estavam os elementos antes do float existir:

![Um quadrado anarelo a esquerda com "float:leaft" escrito dentro, um texto "Texto que não vai flutuar" no centro e um quadrado azul com "float: right" escrito dentro](assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html-01.png)

Criando um layout hipotético de um blog estilo anos 90, poderíamos imaginar que o nosso layout já estava pronto com o menu sendo a div amarela à esquerda, os posts mais vistos à direita na div azul e o conteúdo dos posts ao centro.

Mas temos um problemas aqui, olhando assim temos a sensação de que esse conteúdo está realmente no meio da página. Algo como:

![](assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html-02.png)

Mas não é bem assim, na verdade o conteúdo está todo lá atrás ocupando a página inteira. Assim:

![](assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html-03.png)

# Entendendo os fluxos do html

O que acontece aqui é que o \`float\` cria um novo fluxo no html e pra entender vamos dar meio passo pra trás e pincelar sobre o fluxo do html.

Sendo o html uma linguagem de marcação de texto e o texto é estruturado (linear e ordenado), a precedência de elementos é respeitada. Ou seja, na regra um elemento vem após o outro e abaixo do outro. Para que eu flutue (float) um elemento preciso quebrar essa regra, certo? Por isso cria-se um novo fluxo que desconsidera o contexto da DOM. Então, antes dos float as duas div e o parágrafo habitavam no mesmo fluxo da DOM, mas quando aplicamos as propriedades float nas div elas criaram um fluxo só pra elas acima do fluxo da DOM:

![](assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html-04.png)

**Mas por que o texto ficou centralizado?** Taí outra magía dos princípios do html. O html sempre manterá seus textos no fluxo superior existente então, mesmo o elemento pertencendo a um fluxo inferior, o texto está ocupando o espaço do fluxo superior. Uma forma nativa de garantir que "a informação sempre será passada".

# Como usar

Já usei muito o `float` para layout, mas hoje com `flex-box` e `css-grid` não vejo muitos motivos para usar nos layouts do dia a dia. Semanticamente vejo muito fit do uso do float para blocos inseridos dentro de textos (imagens, por exemplo).

Como boa aquariana sou zero-regras... Então se fizer sentido usar eu vou usar rs, mas é bem importante perceber o que está acontecendo por baixo dos panos para garantir que o comportamento esperado está realmente acontecendo.

Espero ter ajudado nos seus próximos layouts :)