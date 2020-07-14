import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Avatar from "../components/Avatar"
import Olar from '../components/Olar'
import Categories from '../components/Categories'

import * as S from './styles'

const CategoryBlogList = props => {

  const categoryPostList = props.data.allMarkdownRemark.edges

  const category = props.pageContext.category
  let categoryTranslate = category

  switch (category) {
    case "product":
      categoryTranslate = "produto"
      break;
    case "front":
      categoryTranslate = "front-end"
      break;
    case "data":
      categoryTranslate = "dados"
      break;
    case "music":
      categoryTranslate = "música"
      break;
    case "back":
      categoryTranslate = "back-end"
      break;
    default:
      break
  }

  return (
    <>
      <Layout>
        <SEO title="Categorias" />
        <S.ContentContainer>
          <S.PostContainer>
            <h1 className="header">
              {categoryPostList.length > 1 ?
                `Se liga nesses ${categoryPostList.length} papos sobre`
                :
                `Se liga nesse papo sobre`}
              <span className={category}>
                {categoryTranslate}
              </span>
            </h1>
            {categoryPostList.map(({
              node: {
                frontmatter: { title, date, category },
                timeToRead,
                fields: { slug }
              },
            }) => (
                <PostItem
                  slug={slug}
                  category={category}
                  date={date}
                  timeToRead={timeToRead}
                  title={title}
                />
              ))}
          </S.PostContainer>
          <S.ExtrasContainer>
            <S.BioContainer>
              <Avatar />
              <Olar />
            </S.BioContainer>
            <Categories category={category} />
          </S.ExtrasContainer>
        </S.ContentContainer>
      </Layout>
    </>
  )

}

export const query = graphql`
  query CategoryPostList($category: String!) {
  allMarkdownRemark(sort:
   {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
    edges {
      node {
        frontmatter {
          title
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          category
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}

`

export default CategoryBlogList