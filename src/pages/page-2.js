import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="container spaced-page">
      <div className="columns">
        <div className="column content">
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
