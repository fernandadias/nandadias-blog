import React from 'react'

import * as S from './styles'

const Share = ({ category }) => {

  return (
    <S.ShareContainer category={category}>
      <h1>hey,<br /> duvido você<br /> compartilhar</h1>
      <a href="/">twitter</a>
      <a href="/">linkedin</a>
      <a href="/">email</a>
      <a href="/">copiar link</a>
    </S.ShareContainer>
  )


}

export default Share