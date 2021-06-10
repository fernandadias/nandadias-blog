---
title: "Gatsby x Next: meus prós e contras para SSG"
description: Um comparativo - não extensivo - dos motivos que me levaram a
  preferir o Next em 2021
date: 2021-06-09 07:24:32
thumbnail: assets/img/nanda-dias-gatsby-versus-next.png
category: front
---
No ano passado eu me aventurei nos estudos dos SSG (Static Site Generators) e na época eu conhecia dois frameworks para fazer isso: **Jekyll** e **Gatsby**.

O **Jekyll** eu já tinha usado no site antigo da [Konduto](https://www.konduto.com). Eu não fiz o blog do zero mas mensalmente precisava fazer alguma alteração por lá e a experiência não era das melhores: o tempo de build me parecia ser demais para a quantidade de páginas (mas não cheguei a comparar com outras soluções), nunca consegui fazer nativamente um lazy loading das imagens e o prefetch dos links não funcionava bem.

Como o **Gatsby** me parecia ter um onboarding rápido e uma documentação legal resolvi me arriscar e isso resultou nesse blog lindo que estão vendo.

## Um resumo de como foi usar o Gatsby

A documentação tinha tudo o que eu precisava, dava para usar o Styled Components (que era meu vício na época), fuçar no GraphQl, tem plugin para fazer (quase) tudo e a performance é incrivelmente boa.

Então como uma produteira que a cada 6 meses resolve lembrar que gosta de codar eu super recomendo o Gatsby. Fácil e tem tudo lá.

## Paixão pelo Next

Agora corto a cena para a Nanda de 2021 literalmente apaixonada pelo **NextJS** depois de conhecer o Incremental Static Regeneration (ISR) do framework. E por estar super engajada em aprender mais do **NextJS** resolvi repensar se ainda usaria o **Gatsby** para SSG... E decidi não usar rs.

Aqui vou contar alguns motivos que me fazem hoje preferir o **NextJS** para SSG.

### Framework opinativo

Como eu quero testar rápido as coisas e saber logo na prática o que ta rolando de novo no cenário front-end ter um framework opinativo me ajuda bastante.

Com o **NextJS** não preciso pensar no mapeamento das rotas, importar o Router ou pensar no build. Então usando o `create-next-app` já ta tudo *quase* pronto para sair usando.

### Geração dos estáticos

Sou uma front convicta, então gosto de olhar pro node só se for muuuuuito necessário mesmo. Com o **NextJS** não preciso pensar em como o node vai gerar as páginas por baixo dos panos: uma vez que eu uso uma das API routes do **NextJS** (pro SSG é a `getStaticProps`) ele já faz todo o setup pra gente ❤️.

No **Gatsby** tem um arquivo separado chamado `gatsby-node.js` onde a gente lida com a camada node do framework. Se liga em como eu lidei com a geração das rotas aqui pro blog, no **Gatsby**:

```jsx
//gatsby-node.js

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql({
    //query marota aqui
  }.then(result => {

const posts = result.data.allMarkdownRemark.edges

posts.forEach(({ node, next, previous }) => {
  createPage({
    path: node.fields.slug,
    component: path.resolve(./src/templates/blog-post.js),
    context: {
      slug: node.fields.slug,
    },
  })
})´
```

No **Nextjs** eu abordaria o mesmo caso, direto na página de template, assim:

```jsx
//blog-post.js

function BlogPost({ posts }) {
  // aqui todo o render dos componentes
}

export async function getStaticProps() {
  // ainda não sei como/se da pra usar o GraphQl no Next
  // então to exemplificando aqui como se fosse usar REST mesmo
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default BlogPost
```

### Vercel: I love you!

Depois do meu primeiro deploy na **Vercel** minha vida mudou rs. É super tranquilo - e eu sou terrível com infra, então é tranquilo mesmo - e extremamente rápido.

Fora que hoje a **Vercel** é dona do **NextJS**, então os universos conversam super bem juntos. Subir projetos **Nextjs** na **Vercel** é o melhor dos mundos, pode acreditar.

### Geração runtime Vs built time

O pipeline do **Gatsby** gera os estáticos em builtime. Então quando o pipe roda o `gatsby built` todos os estáticos são gerados e pronto.
Como o **NextJS** gerencia um servidor node dedicado, os estáticos podem ser gerados em runtime. No SSG isso não tem nenhum impacto diferente de como é no **Gatsby**, mas quando misturamos o SSG com o SSR (Server-Side Rendering), da pra fazer uma página gerar os estáticos que são realmente estáticos (como o menu de categorias de um e-commerce) e em runtime coisas que mudam mais (como os produtos mais vendidos).

## Minha conclusão e confissão

No fim, tanto **Gatsby** quanto **NextJS** são ótimos para SSG. Talvez o **Gatsby** seja até melhor pois é focado em SSG.
Porém confesso que o hype do **NextJS** me deixa muito mais animada para usá-lo rs. Tem muito mais material rolando, novidades aparecendo e gente testando e discutindo aplicações dos novos releases.

Logo, se você for uma pessoa mais conservadora e fizer muito SSG puro e simples: acredito que vale usar o **Gatsby**.
Mas se tiver 1% de curiosidade eu recomendo muito que teste o **NextJS**. Sério... É viciante.