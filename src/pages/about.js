import React from 'react'
import * as PropTypes from 'prop-types'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const AboutPage = ({data}) => (
  <Layout>
    <div className="container mx-auto p-8 flex flex-wrap">
      <div className="p-6">
        <img
          src={data.allContentfulLandingPage.edges[0].node.image.fixed.src}
          alt="Khaled Garbaya"
        />
      </div>
      <div
        className="prose prose-xl"
        dangerouslySetInnerHTML={{
          __html:
            data.allContentfulLandingPage.edges[0].node.content
              .childMarkdownRemark.html,
        }}
      />
    </div>
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulLandingPage(filter: {slug: {eq: "about"}}) {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            fixed(width: 400, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`
