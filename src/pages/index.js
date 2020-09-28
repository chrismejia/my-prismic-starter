import React from "react"
import { graphql } from "gatsby"

import { Intro, Layout, SEO, LastJob } from "../components"

function IndexPage({ data }) {
  const prismicData = data.prismic
  if (!prismicData) return null

  const introData = prismicData.allHomepages.edges[0]
  const projectData = prismicData.allProjects.edges[0]

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <div className="container">
        <div className="columns">
          <div className="column content">
            {/* <pre>{JSON.stringify(projectData, null, 2)}</pre> */}
          </div>
        </div>
      </div>
      <LastJob />
      {/* <section className="container spaced-page">
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
      </section> */}
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            content
            about_title
            about_bio
            _linkType
          }
        }
      }
      allProjects {
        edges {
          node {
            project_hero_imageSharp {
              childImageSharp {
                fixed {
                  tracedSVG
                  src
                }
              }
            }
            project_hero_image
          }
        }
      }
    }
  }
`

export default IndexPage
