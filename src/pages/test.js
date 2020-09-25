import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestPage = () => (
  <Layout>
    <SEO title="Test" />
    <section className="container spaced-page">
      <div className="columns">
        <div className="column has-background-primary is-four-fifths">
          <div className="box">is-four-fifths</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-three-quarters">
          <div className="box">is-three-quarters</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-two-thirds">
          <div className="box">is-two-thirds</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-three-fifths">
          <div className="box">is-three-fifths</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-half">
          <div className="box">is-half</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-two-fifths">
          <div className="box">is-two-fifths</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-one-third">
          <div className="box">is-one-third</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-one-quarter">
          <div className="box">is-one-quarter</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-background-primary is-one-fifth">
          <div className="box">is-one-fifth</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column has-background-primary is-half is-offset-one-quarter">
          <div className="box">is-half is-offset-one-quarter</div>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column has-background-primary is-three-fifths is-offset-one-fifth">
          <div className="box">is-three-fifths is-offset-one-fifth</div>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column has-background-primary is-4 is-offset-8">
          <div className="box">is-4 is-offset-8</div>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column has-background-primary is-11 is-offset-1">
          <div className="box">is-11 is-offset-1</div>
        </div>
      </div>

      <div className="columns is-vcentered">
        <div className="column has-background-primary is-8">
          <div className="box">
            <p className="bd-notification is-primary">First column</p>
          </div>
        </div>
        <div className="column has-background-info">
          <div className="box"></div>{" "}
          <p className="bd-notification is-primary">
            Second column with more content. This is so you can see the vertical
            alignment.
          </p>
        </div>
      </div>

      <div className="columns is-multiline is-mobile">
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-half">
          <div className="box">
            <code>is-half</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-primary is-one-quarter">
          <div className="box">
            <code>is-one-quarter</code>
          </div>
        </div>
        <div className="column has-background-info">
          <div className="box">Auto</div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-narrow">
          <div className="box" style={{ width: "200px" }}>
            <p className="title is-5">Narrow column</p>
            <p className="subtitle">This column is only 200px wide.</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p className="title is-5">Flexible column</p>
            <p className="subtitle">
              This column will take up the remaining space available.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TestPage
