import React from "react"

import SEO from "../components/seo"
import GlobalStyles from '../styles/global'

import OlarMobile from '../components/OlarMobile'
import MobileFooter from '../components/MobileFooter'

const OlarPage = () => (
  <>
    <GlobalStyles />
    <SEO title="Olar, sou a nanda" />
    <OlarMobile />
    <MobileFooter />
  </>
)

export default OlarPage
