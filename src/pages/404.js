import React from "react"
import { Link } from 'gatsby'

import SEO from "../components/seo"
import GlobalStyles from '../styles/global'

import NotFoundGIF from '../images/gifs/notfound-02.gif'

import * as S from '../components/styles'

const NotFoundPage = () => (
  <>
    <GlobalStyles />
    <SEO title="404: Not found" />
    <S.NotFoundContainer>
      <div>
        <h1>Ih, acho que deu ruim</h1>
        <p>Se for um bug, me dê um grito:</p>
        <br />
        <p>
          <a
            href="https://github.com/fernandadias/nandadias-blog"
            target="_blank"
            title="nanda dias no github"
            rel="noopener noreferrer">github</a>
            |
          <Link to="/">voltar para home</Link>
        </p>
      </div>
      <img alt="Página 404" src={NotFoundGIF} />
    </S.NotFoundContainer>
  </>
)

export default NotFoundPage
