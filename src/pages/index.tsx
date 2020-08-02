import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DateCalculator from "../components/DateCalculator"

const IndexPage = () => (
  <Layout>
    <SEO title="When did my parents fuck?" />
    <h1 className="text-5xl text-center">When did my parents fuck?</h1>
    <h2 className="text-lg text-center">
      Find out the date you were conceived on.
    </h2>
    <DateCalculator />
  </Layout>
)

export default IndexPage
