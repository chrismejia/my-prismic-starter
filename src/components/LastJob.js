import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function LastJob() {
  const data = useStaticQuery(graphql`
    query {
      halfmoonImage: file(relativePath: { eq: "halfmoon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  if (!data) return <div>picture not found</div>

  return (
    <section
      className="hero is-fullheight-with-navbar full-height is-black"
      id="last-job"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div
              className="column is-10 content"
              style={{ backgroundColor: "red" }}
            >
              <h1 className="title has-text-centered" id="halfmoon">
                HalfmoonBK
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, et est possit gubergren, brute
                labores vix et. Mea eu inani sonet tamquam, in eum ludus
                platonem. Quas legimus oportere ei qui, facer utamur constituto
                eam ad. Eros errem delicatissimi vel et, modo perpetua
                eloquentiam ad nec. Ius ad eius assueverit. Mel graeci erroribus
                no.
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-10">
              <Img fluid={data.halfmoonImage.childImageSharp.fluid} />
              {/* <pre>
                {JSON.stringify(
                  data.halfmoonImage.childImageSharp.fluid,
                  null,
                  2
                )}
              </pre> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// {
//   imageSharp {
//     # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
//     fluid(maxWidth: 700) {
//       ...GatsbyImageSharpFluid_withWebp_tracedSVG
//     }
//   }
// }

export default LastJob
