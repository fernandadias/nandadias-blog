import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import Icons from '../appIcons'

import * as S from './styles'

const MobileFooter = () => {

  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])


  return (
    <S.MobileFooterContainer>
      <S.Categories>
        <Link>assuntos</Link>
      </S.Categories>
      <S.Icons>
        <Link to="/search"><Icons.Search /></Link>
        <Link to="/" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}>
          <Icons.Light />
        </Link>
      </S.Icons>
    </S.MobileFooterContainer>
  )
}

export default MobileFooter
