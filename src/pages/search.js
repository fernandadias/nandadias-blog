import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Avatar from "../components/Avatar"
import Olar from '../components/Olar'
import Categories from '../components/Categories'

import * as S from '../templates/styles'

const SearchPage = () => (
  <Layout>
    <SEO title="Pesquisa" />
    <S.ContentContainer>
      <S.PostContainer>
        <Search />
      </S.PostContainer>
      <S.ExtrasContainer>
        <S.BioContainer>
          <Avatar />
          <Olar />
        </S.BioContainer>
        <Categories />
      </S.ExtrasContainer>
    </S.ContentContainer>
  </Layout>
)

export default SearchPage
