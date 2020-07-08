import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => {

  const { logoImage } = useStaticQuery(graphql`

    query{
      logoImage: file(relativePath: { eq: "nanda-dias-logo.png" }) {
        childImageSharp{
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  ` )

  return <Img fluid={logoImage.childImageSharp.fluid} />

}

export default Logo