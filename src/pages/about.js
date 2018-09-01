import React from 'react';
import * as PropTypes from 'prop-types';
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const AboutPage = ({data}) => (
  <Layout>
    <div className="about main-content">
      <img
        className="about__image"
        src={
          data.allContentfulLandingPage.edges[0].node.image.resolutions.src
        }
        alt='Image of Khaled Garbaya'
      />
      <div
        className="about__content"
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
  data: PropTypes.object.isRequired
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
              resolutions (width:400) {
                src
              }
            }
          }
        }
      }
    }
`
