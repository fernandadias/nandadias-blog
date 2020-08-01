---
title: como eu realmente entendi float e os fluxos do html
description: espero que esse texto te ajude a parar de chutar a propriedade
  float nos seus próximos estilos
date: 2020-07-07 02:44:02
thumbnail: assets/img/nanda-dias-como-eu-realmente-entendi-float-e-os-fluxos-do-html.jpeg
category: front
---
Acho que existe uma caminhada comum quando o assunto é css: chutar, chutar muito, chutar mais um tanto e começar a estudar. Pois é, depois de muita gambiarra patrocinada por mim venho por meio desse contar as minhas descobertas atuais sobre **css floats** e que te ajude a tomar decisões mais conscientes nos seus próximos layouts.

# Como e quando usar

O `float` te ajuda a "flutuar" elementos para a esquerda ou para a direita do viewport (basicamente).
Vou testar ilustrar no codeopen o raciocínio, onde a div vermelha está flutuando para a esquerda e a div azul para a direita:
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="NandaDias" data-slug-hash="eYJqjOX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="como eu realmente entendi float e os fluxos do html - 01">
  <span>See the Pen <a href="https://codepen.io/NandaDias/pen/eYJqjOX">
  como eu realmente entendi float e os fluxos do html - 01</a> by Nanda Dias (<a href="https://codepen.io/NandaDias">@NandaDias</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Então o uso é simples (e talvez por isso a gente chute tanto). Basta inserir a propriedade `float: left/right` ao elemento.

```
.elemento-alvo {
   float: right;
}
```

# O que acontece por baixos dos panos

Aqui que a coisa aperta e a minha mente explodiu. Responde pra você ai: sabe o que acontece no DOM quando um elemendo passa a ter a propriedade float?

Eu não sabia, e quando entendi fez sentido a quantidade de gambiarras que já fiz com float nessa vida rs. Antes, vamos entender como estavam os elementos antes do float existir:
