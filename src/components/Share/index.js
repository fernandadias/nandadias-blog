import React from 'react'

import * as S from './styles'

const Share = ({ category, title, slug }) => {

  return (
    <S.ShareContainer category={category}>
      <h1>hey,<br /> duvido você<br /> compartilhar</h1>
      <a
        href={`https://twitter.com/intent/tweet/?text=${title}&url=https://nandadias.com.br${slug}%2F&via=nandadiasmusic`}
        target="_blank"
        rel="noopener noreferrer">twitter</a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://nandadias.com.br${slug}&title=${title}&summary=${title}&source=LinkedIn`}
        target="_blank"
        rel="noopener noreferrer"
      >linkedin</a>
      <a href={`mailto:oi@gmail.com?&subject=${title}&body=https://nandadias.com.br${slug}`}
        target="_blank"
        rel="noopener noreferrer">email</a>
      <a href="$" onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(`https://nandadias.com.br${slug}`)
      }}>copiar link</a>
    </S.ShareContainer>
  )

}

export default Share