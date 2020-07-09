import React from 'react'
import propTypes from 'prop-types'

import Icons from '../appIcons'

import * as S from './styles'

const RecommendedPosts = ({ next, previous }) => (

  <S.RecommendedContainer>
    {previous &&
      <S.RecommendedLink
        to={previous.fields.slug}
        category={previous.frontmatter.category}>
        <Icons.Left />
        {previous.frontmatter.title}
      </S.RecommendedLink>}
    {next &&
      <S.RecommendedLink
        to={next.fields.slug}
        category={next.frontmatter.category}>
        {next.frontmatter.title}
        <Icons.Right />
      </S.RecommendedLink>}
  </S.RecommendedContainer>

)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      category: propTypes.string,
      title: propTypes.string.isRequired
    }),
    frontmatfieldster: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      category: propTypes.string,
      title: propTypes.string.isRequired
    }),
    frontmatfieldster: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
}

export default RecommendedPosts