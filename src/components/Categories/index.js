import React from 'react'

import * as S from './styles'

const Categories = () => (
  <S.CategoriesContainer>
    <a className="all active" href="#">all</a><br />
    <a className="design" href="/">design</a><span>/</span>
    <a className="product" href="/">produto</a> <br />
    <a className="front" href="/">front-end</a><span>/</span>
    <a className="data" href="/">dados</a> <br />
    <a className="music" href="/">música</a><span>/</span>
    <a className="back" href="/">back-end</a>
  </S.CategoriesContainer>
)
export default Categories