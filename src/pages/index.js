import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container spaced-page">
      <div className="columns">
        <div className="column has-background-primary is-three-quarters">
          <div className="box">is-three-quarters</div>
        </div>
        <div className="column has-background-info">
          <div className="box">
            <Image />
          </div>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/test/">Go to test</Link> <br />
    </section>
  </Layout>
)

export default IndexPage
