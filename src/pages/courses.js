import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'

const CoursesPage = ({data}) => (
  <Layout>
    <div className="courses main-content">
      <div
        className="courses__content"
        dangerouslySetInnerHTML={{
          __html:
          data.allContentfulLandingPage.edges[0].node.content
          .childMarkdownRemark.html,
        }}
      />
    </div>
  </Layout>
)

export default CoursesPage

export const pageQuery = graphql`
  query CoursesPageQuery {
    allContentfulLandingPage(filter: {slug: {eq: "courses"}}) {
      edges {
        node {
          content {
            childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
`
