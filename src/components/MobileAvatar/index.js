import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as S from './styles'

const MobileAvatar = () => {

  const { avatarImage } = useStaticQuery(graphql`

    query{
      avatarImage: file(relativePath: { eq: "nanda-dias-avatar.png" }) {
        childImageSharp{
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  ` )

  return (
    <S.AvatarContainer>
      <Img fluid={avatarImage.childImageSharp.fluid} />
    </S.AvatarContainer>
  )

}

export default MobileAvatar