import React, { useState, useEffect } from 'react'

import Logo from "../Logo"
import socialLinks from './content'
import Icons from '../appIcons'

import * as S from './styles'

const Sidebar = () => {


  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (

    <S.SidebarContainer>
      <S.LogoWapper>
        <Logo />
      </S.LogoWapper>
      <S.ActionLinks>
        <S.MenuLink to="/search">
          <span className="text">pesquisar</span>
          <span className="icon"><Icons.Search /></span>
        </S.MenuLink>
        <S.MenuLink to="/" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}>
          <span className="text">acender a luz</span>
          <span className="icon"><Icons.Light /></span>
        </S.MenuLink>
      </S.ActionLinks>
      <S.SocialLinks>
        <S.MenuSocialLink
          href={socialLinks.twitter.url}
          title={`nanda dias no ${socialLinks.twitter.label}`}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">{socialLinks.twitter.label}</span>
          <span className="icon"><socialLinks.twitter.icon /></span>
        </S.MenuSocialLink>
        <S.MenuSocialLink
          href={socialLinks.instagram.url}
          title={`nanda dias no ${socialLinks.instagram.label}`}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">{socialLinks.instagram.label}</span>
          <span className="icon"><socialLinks.instagram.icon /></span>
        </S.MenuSocialLink>
        <S.MenuSocialLink
          href={socialLinks.github.url}
          title={`nanda dias no ${socialLinks.github.label}`}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">{socialLinks.github.label}</span>
          <span className="icon"><socialLinks.github.icon /></span>
        </S.MenuSocialLink>
        <S.MenuSocialLink
          href={socialLinks.behance.url}
          title={`nanda dias no ${socialLinks.behance.label}`}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">{socialLinks.behance.label}</span>
          <span className="icon"><socialLinks.behance.icon /></span>
        </S.MenuSocialLink>
        <S.MenuSocialLink
          href={socialLinks.linkedin.url}
          title={`nanda dias no ${socialLinks.linkedin.label}`}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">{socialLinks.linkedin.label}</span>
          <span className="icon"><socialLinks.linkedin.icon /></span>
        </S.MenuSocialLink>
      </S.SocialLinks>
    </S.SidebarContainer>

  )

}


export default Sidebar