import React from "react"

import Logo from '../Logo'
import Avatar from '../Avatar'

import * as S from './styles'

const MobileHeader = () => (

  <S.MobileHeaderContainer>
    <Logo />
    <S.OlarOpen>
      <Avatar />
      <h1>olar,</h1>
    </S.OlarOpen>
  </S.MobileHeaderContainer>

)

export default MobileHeader
