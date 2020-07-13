import React from 'react'
import { Link } from 'gatsby'
import Icons from '../appIcons'
import socialLinks from '../../components/Sidebar/content'

import MobileAvatar from '../MobileAvatar'
import Logo from '../Logo'

import * as S from './styles'

const OlarMobile = () => (
  <>
    <S.OlarMobileContainer>
      <S.OlarHeaderContainer>
        <Logo />
        <Link to="/">
          <Icons.Close />
        </Link>
      </S.OlarHeaderContainer>
      <S.OlarAvatarContainer>
        <MobileAvatar />
        <h1>olar,</h1>
      </S.OlarAvatarContainer>
      <S.OlarContentContainer>
        <p>sou produteira na <a href="http://konduto.com/" target="_blank">konduto</a></p>
        <p>designer por formação</p>
        <p>aquariana por sorte</p>
        <p>e curiosa pelas coisas que falo aqui</p>
        <br />
        <p>se quiser bater um papo, pode me achar nesses lugares:</p>
        <br />
        <Link to={socialLinks.twitter.url} target="_blank">
          {socialLinks.twitter.label}
        </Link>
        <Link to={socialLinks.instagram.url} target="_blank">
          {socialLinks.instagram.label}
        </Link>
        <Link to={socialLinks.github.url} target="_blank">
          {socialLinks.github.label}
        </Link>
        <Link to={socialLinks.behance.url} target="_blank">
          {socialLinks.behance.label}
        </Link>
        <Link to={socialLinks.linkedin.url} target="_blank">
          {socialLinks.linkedin.label}
        </Link>
      </S.OlarContentContainer>

    </S.OlarMobileContainer>
    <S.WebMobileContainer>
      <div>
        <h1>ops, não era pra você chegar aqui</h1>
        <p>achou uma das gambiarras que fiz rs</p>
        <br />
        <br />
        <p>mas já que ta aqui, não quer olhar as issues desse blog que tenho abertas?</p>
        <br />
        <p>
          <Link
            to="https://github.com/fernandadias/nandadias-blog"
            target="_blank">github</Link>
            |
          <Link to="/">voltar para home</Link>
        </p>
      </div>
    </S.WebMobileContainer>
  </>

)

export default OlarMobile