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
        <p>sou produteira na <a href="http://konduto.com/" target="_blank" rel="noreferrer">konduto</a></p>
        <p>designer por formação</p>
        <p>aquariana por sorte</p>
        <p>e curiosa pelas coisas que falo aqui</p>
        <br />
        <p>se quiser bater um papo, pode me achar nesses lugares:</p>
        <br />
        <a
          href={socialLinks.twitter.url}
          title={`nanda dias no ${socialLinks.twitter.label}`}
          target="_blank"
          rel="noopener noreferrer">
          {socialLinks.twitter.label}
        </a>
        <a
          href={socialLinks.instagram.url}
          title={`nanda dias no ${socialLinks.instagram.label}`}
          target="_blank"
          rel="noopener noreferrer">
          {socialLinks.instagram.label}
        </a>
        <a
          href={socialLinks.github.url}
          title={`nanda dias no ${socialLinks.github.label}`}
          target="_blank"
          rel="noopener noreferrer">
          {socialLinks.github.label}
        </a>
        <a
          href={socialLinks.behance.url}
          title={`nanda dias no ${socialLinks.behance.label}`}
          target="_blank"
          rel="noopener noreferrer">
          {socialLinks.behance.label}
        </a>
        <a
          href={socialLinks.linkedin.url}
          title={`nanda dias no ${socialLinks.linkedin.label}`}
          target="_blank"
          rel="noopener noreferrer">
          {socialLinks.linkedin.label}
        </a>
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
          <a
            href="https://github.com/fernandadias/nandadias-blog"
            title={`nanda dias no ${socialLinks.github.label}`}
            target="_blank" rel="noopener noreferrer">github</a>
            |
          <Link to="/">voltar para home</Link>
        </p>
      </div>
    </S.WebMobileContainer>
  </>

)

export default OlarMobile