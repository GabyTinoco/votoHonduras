import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
      query {
        vacationPhotos: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "diputados_liberal"}}, sort: {fields: base, order: ASC}) {
          edges {
            node {
              id
              base
              childImageSharp {
                fluid( maxWidth: 1200, maxHeight: 800, fit: COVER, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      `}
      render={data => (
        <div>
          <h1>{data.vacationPhotos}</h1>
        </div>
      )}
    />
  )
}