import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

import * as S from './styles'

const BlogList = props => {

  const postList = props.data.allMarkdownRemark.edges

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

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
      ) {
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

export default BlogList