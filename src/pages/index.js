import React from 'react'
import {Link, graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Article = ({data}) => {
  return (
    <li className="py-4 mb-5 border-b">
      <Link
        className="text-gray-800 hover:text-teal-600"
        to={`/articles/${data.slug}`}
      >
        <h2 className="text-3xl font-heading my-5">{data.title}</h2>
      </Link>
      <span className="inline-block text-sm text-gray-700 border-b broder mb-5">
        <time>{data.publishDate}</time>
      </span>
      <div
        className="prose prose-lg mb-5"
        dangerouslySetInnerHTML={{
          __html: data.description.childMarkdownRemark.html,
        }}
      />
      <small>
        <Link
          className="text-xs text-gray-700 hover:text-teal-600"
          to={`/articles/${data.slug}`}
        >
          Read more ››
        </Link>
      </small>
    </li>
  )
}
const IndexPage = ({data}) => {
  const {nodes} = data.allContentfulBlog
  return (
    <Layout>
      <SEO
        postData={{
          frontmatter: {},
        }}
      />
      <div className="max-w-screen-md mx-auto p-8">
        <ul className="list-none">
          {nodes.map((node, i) => (
            <Article key={i} data={node} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}
export const query = graphql`
  {
    allContentfulBlog(sort: {fields: [publishDate], order: DESC}) {
      nodes {
        title
        slug
        publishDate(formatString: "dddd, MMM Do YYYY")
        description {
          childMarkdownRemark {
            html
          }
        }
        content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
export default IndexPage
