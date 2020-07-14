import React from "react"
import { Link } from 'gatsby'

import SEO from "../components/seo"
import GlobalStyles from '../styles/global'

import NotFoundGIF from '../images/gifs/notfound-02.gif'

import * as S from './styles'

const NotFoundPage = () => (
  <S.NotFoundMain>
    <GlobalStyles />
    <SEO title="404: Not found" />
    <S.NotFoundContainer>
      <div>
        <h1>Ih, acho que deu ruim</h1>
        <p>Se for um bug, me dê um grito:</p>
        <br />
        <p>
          <Link
            to="https://github.com/fernandadias/nandadias-blog"
            target="_blank" rel="noreferrer">github</Link>
            |
          <Link to="/">voltar para home</Link>
        </p>
      </div>
      <img src={NotFoundGIF} />
    </S.NotFoundContainer>
  </S.NotFoundMain>
)

export default NotFoundPage
