import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DateCalculator from "../components/DateCalculator"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-134173534-3"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-134173534-3');`}
      </script>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client="ca-pub-8789074411525323"
      />
    </Helmet>
    <SEO title="When did my parents fuck?" />
    <h1 className="text-5xl text-center">When did my parents fuck?</h1>
    <h2 className="text-lg text-center">
      Find out the date you were conceived on.
    </h2>
    <DateCalculator />
  </Layout>
)

export default IndexPage
