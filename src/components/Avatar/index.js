import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {

  const { avatarImage } = useStaticQuery(graphql`

    query{
      avatarImage: file(relativePath: { eq: "nanda-dias-logo.png" }) {
        childImageSharp{
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  ` )

  return <Img fluid={avatarImage.childImageSharp.fluid} />

}

export default Avatar