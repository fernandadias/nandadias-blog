import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import Icons from '../appIcons'

import * as S from './styles'

const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => (

  <S.PaginationContainer>
    {!isFirst && <Link to={prevPage}><Icons.Left /> papos mais novos</Link>}
    {!isLast && <Link to={nextPage}>papos antigos <Icons.Right /></Link>}
  </S.PaginationContainer>

)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination