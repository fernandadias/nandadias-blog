import React from 'react'
import { Link } from 'gatsby'

import * as S from './styles'

const Categories = ({ category }) => {

  const isProduct = category === "product"
  const isFront = category === "front"
  const isData = category === "data"
  const isMusic = category === "music"
  const isBack = category === "back"
  const isDesign = category === "design"
  const isAll = !category

  return (
    <S.CategoriesContainer>
      <Link className={isAll ? `all active` : `all`} to="/">all</Link><br />
      <Link className={isDesign ? `design active` : `design`} to="/category/design">design</Link><span>/</span>
      <Link className={isProduct ? `product active` : `product`} to="/category/product">produto</Link> <br />
      <Link className={isFront ? `front active` : `front`} to="/category/front">front-end</Link><span></span>
      <Link className={isData ? `data active` : `data`} to="/category/data">dados</Link> <br />
      <Link className={isMusic ? `music active` : `music`} to="/category/music">música</Link><span>/</span>
      <Link className={isBack ? `back active` : `back`} to="/category/back">back-end</Link>
    </S.CategoriesContainer>
  )
}
export default Categories