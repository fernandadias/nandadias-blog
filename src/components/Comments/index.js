import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styles'

const Comments = ({ url, title }) => {
  const completeURL = `https://nandadias.com.br${url}`

  return (
    <S.CommentsContainer >
      <S.CommentsTitle>me conta o que achou:</S.CommentsTitle>
      <ReactDisqusComments
        shortname="nandadias"
        identifier={completeURL}
        title={title}
        url={completeURL} />
    </S.CommentsContainer >
  );
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments