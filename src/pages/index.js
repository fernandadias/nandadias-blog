import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

import * as S from './styles'

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query PostList {
      allMarkdownRemark {
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
  )

  const postList = allMarkdownRemark.edges

  return (

    <Layout>
      <SEO title="Home" />
      <S.PostsContainer>
        {postList.map(({
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
      </S.PostsContainer>
    </Layout>

  )
}

export default IndexPage
