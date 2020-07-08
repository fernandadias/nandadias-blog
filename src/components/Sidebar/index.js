import React from 'react'

import Logo from "../Logo"
import socialLinks from './content'
import Icons from '../appIcons'

import * as S from './styles'

const Sidebar = () => {

  return (

    <S.SidebarContainer>
      <S.LogoWapper>
        <Logo />
      </S.LogoWapper>
      <S.ActionLinks>
        <S.MenuLink to="/">
          <span className="text">pesquisar</span>
          <span className="icon"><Icons.Search /></span>
        </S.MenuLink>
        <S.MenuLink to="/">
          <span className="text">acender a luz</span>
          <span className="icon"><Icons.Light /></span>
        </S.MenuLink>
      </S.ActionLinks>
      <S.SocialLinks>
        <S.MenuLink to={socialLinks.twitter.url}>
          <span className="text">{socialLinks.twitter.label}</span>
          <span className="icon"><socialLinks.twitter.icon /></span>
        </S.MenuLink>
        <S.MenuLink to={socialLinks.instagram.url}>
          <span className="text">{socialLinks.instagram.label}</span>
          <span className="icon"><socialLinks.instagram.icon /></span>
        </S.MenuLink>
        <S.MenuLink to={socialLinks.github.url}>
          <span className="text">{socialLinks.github.label}</span>
          <span className="icon"><socialLinks.github.icon /></span>
        </S.MenuLink>
        <S.MenuLink to={socialLinks.behance.url}>
          <span className="text">{socialLinks.behance.label}</span>
          <span className="icon"><socialLinks.behance.icon /></span>
        </S.MenuLink>
        <S.MenuLink to={socialLinks.linkedin.url}>
          <span className="text">{socialLinks.linkedin.label}</span>
          <span className="icon"><socialLinks.linkedin.icon /></span>
        </S.MenuLink>
      </S.SocialLinks>
    </S.SidebarContainer>

  )

}


export default Sidebar