import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

import * as S from './styles'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <S.PostsContainer>
      <PostItem
        slug="/asd/"
        category="product"
        date="30 de julho de 2017"
        timeToRead="2"
        title="o não tão óbvio dia a dia do produteiro"
      />
      <PostItem
        slug="/asd/"
        category="music"
        date="30 de julho de 2017"
        timeToRead="24"
        title="playlists para todos os moods de trabalho"
      />
    </S.PostsContainer>
  </Layout>
)

export default IndexPage
