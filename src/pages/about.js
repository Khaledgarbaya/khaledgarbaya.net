import React from 'react';
import * as PropTypes from 'prop-types';

const AboutPage = ({data}) => (
  <div className="about main-content">
    <img
      className="about__image"
      src={
        data.allContentfulLandingPage.edges[0].node.image.responsiveResolution.src
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
              responsiveResolution (width:400) {
                src
              }
            }
          }
        }
      }
    }
`
