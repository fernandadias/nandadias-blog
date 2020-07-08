import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const PostItem = ({ slug, category, title, date, timeToRead }) => (

  <S.PostItemLink category={category} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemLine category={category} />
      <S.PostItemInfo>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDate>{date} • um papo de {timeToRead}min</S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>

)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired
}

export default PostItem