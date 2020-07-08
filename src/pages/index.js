import React from "react"

import Layout from "../components/layout"
import Avatar from "../components/Avatar"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Avatar />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
