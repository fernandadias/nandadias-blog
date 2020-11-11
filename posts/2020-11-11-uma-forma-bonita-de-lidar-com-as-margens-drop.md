---
title: Uma forma bonita de lidar com as margens [drop]
description: Botões alinhados a esquerda e com margin a direita... Quem nunca?
date: 2020-08-01 12:17:10
thumbnail: assets/img/ehwdeixwoaau10y.jpeg
category: front
---
Assumo que já fiz muito rs 😂

Botões alinhados a esquerda e com margin a direita uns dos outros. O "problema" disso é q o último botão terá uma margem, sem precisar.

O jeito fofo de fazer isso é adicionar margin a esquerda mesmo e só a partir do segundo botão 🚀

```css
.button {
  margin-right: 2rem; /* err gambiarra rs */
}

.button + .button {
  margin-left: 2rem; /* lindo <3 */
}
```