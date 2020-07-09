import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"
import Avatar from "../components/Avatar"
import Olar from '../components/Olar'
import Categories from '../components/Categories'

import * as S from './styles'

const BlogList = props => {

  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ContentContainer>
        <S.PostContainer>
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
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            nextPage={nextPage}
            prevPage={prevPage}
          />
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