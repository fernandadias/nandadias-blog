import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import Icons from '../appIcons'

import Categories from '../Categories'

import * as S from './styles'

const MobileFooter = () => {

  const [openFooter, setOpenFooter] = useState(false)

  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MobileFooterContainer className={openFooter ? 'open' : 'close'}>
      <S.Categories>
        <a onClick={() => setOpenFooter(!openFooter)}>assuntos</a>
      </S.Categories>
      <S.Icons>
        <Link to="/search"><Icons.Search /></Link>
        <Link to="/" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}>
          <Icons.Light />
        </Link>
      </S.Icons>
      <Categories />
    </S.MobileFooterContainer>
  )
}

export default MobileFooter
