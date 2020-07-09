import React from "react"
import { Link } from "gatsby"
import Icons from '../appIcons'

import * as S from './styles'

const MobileFooter = () => {

  return (
    <S.MobileFooterContainer>
      <S.Categories>
        <Link>assuntos</Link>
      </S.Categories>
      <S.Icons>
        <Link to="search"><Icons.Search /></Link>
        <Link><Icons.Light /></Link>
      </S.Icons>
    </S.MobileFooterContainer>
  )
}

export default MobileFooter
