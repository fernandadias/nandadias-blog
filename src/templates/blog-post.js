import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Share from "../components/Share"

import * as S from './styles'

const BlogPost = ({ data }) => {

  const post = data.markdownRemark
  const { title, category, date } = post.frontmatter
  const { timeToRead, html } = post
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
    <Layout>
      <SEO title={title} />
      <S.ContentContainer>
        <S.PostContainer>
          <S.PostMarkWrapper>
            <S.PostMarkLine category={category} />
            <S.PostMarkInfo>
              <S.PostMarkTitle>
                {title}
              </S.PostMarkTitle>
              <S.PostMarkDate>
                {date} • um papo de {timeToRead}min sobre <span className={category}> {category ? `${categoryTranslate}` : `aleatoriedades`} </span>
              </S.PostMarkDate>
            </S.PostMarkInfo>
          </S.PostMarkWrapper>
          <S.MarkdownContent category={category} dangerouslySetInnerHTML={{ __html: html }} >
          </S.MarkdownContent>
        </S.PostContainer>
        <S.ExtrasContainer>
          <S.BioContainer>
            <Share category={category} />
          </S.BioContainer>
        </S.ExtrasContainer>
      </S.ContentContainer>
    </Layout>
  )

}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        category
      }
      html
      timeToRead
    }
  }
`

export default BlogPost