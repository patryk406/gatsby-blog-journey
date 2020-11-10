import React from "react"
import Nav from "../components/nav/index"
import Featured from "../components/featured/index"
import Home from "../components/home/index"

import Layout from "../components/layout"

// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Nav />
    <Featured />
    <Home/>
  </Layout>
)
export default IndexPage