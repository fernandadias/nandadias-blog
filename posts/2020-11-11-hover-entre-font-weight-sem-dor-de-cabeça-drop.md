---
title: Hover entre font-weight sem dor de cabeça [drop]
description: Pra quem já sofreu com esse conflito
date: 2020-05-22 12:21:29
thumbnail: assets/img/ehvrbecxsaatfu_.jpeg
category: front
---
Sabe aquele hover entre font-weight normal e bold que fica "pulando"?  Tem solução!

Taí o que me salva sempre quando não posso colocar uma largura fixa nos elementos. Pra não ter que lidar com a diferença de densidade entre a familia normal/bold da fonte, é só usar o text-shadow 😎

```css
a.textToHover {
  color: #000;
}

a.textToHover:hover {
  text-shadow: 0px 0px 1px #000;
}
```