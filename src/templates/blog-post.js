import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Share from "../components/Share"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from './styles'

const BlogPost = ({ data, pageContext }) => {

  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  const post = data.markdownRemark
  const { title, category, date, description, image } = post.frontmatter
  const { timeToRead, html } = post
  const { slug } = post.fields
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
      <SEO
        title={title}
        description={description}
        image={image}
      />
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
          <RecommendedPosts next={next} previous={previous} />
          <Comments url={post.fields.slug} title={title} />
        </S.PostContainer>
        <S.ExtrasContainer>
          <S.BioContainer>
            <Share category={category} title={title} slug={slug} />
          </S.BioContainer>
        </S.ExtrasContainer>
      </S.ContentContainer>
    </Layout>
  )

}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost