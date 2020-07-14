import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const NotFound = () => {

  const { notFoundImage } = useStaticQuery(graphql`

    query{
      notFoundImage: file(relativePath: { eq: "notfound-08.gif" }) {
        childImageSharp{
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  ` )

  return <Img fluid={notFoundImage.childImageSharp.fluid} />
}

export default NotFound