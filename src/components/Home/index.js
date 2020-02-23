import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import SEO from '../../components/SEO'

const Article = ({ data }) => {
  return (
    <li className="mb-5 border-b py-4">
      <Link
        className="text-gray-800 hover:text-teal-600"
        to={`articles/${data.node.slug}`}
      >
        <h2 className="font-heading text-2xl">
          {data.node.title}
        </h2>
      </Link>
      <span className="text-sm inline-block text-gray-700 broder border-b">
        <time>{data.node.publishDate}</time>
      </span>
      <div
        className="py-4 text-sm text-gray-800"
        dangerouslySetInnerHTML={{
          __html:
            data.node.content.childMarkdownRemark.excerpt
        }}
      />
      <small>
        <Link
          className="text-gray-700 text-xs hover:text-teal-600"
          to={`articles/${data.node.slug}`}
        >
          Read more ››
        </Link>
      </small>
    </li>
  )
}
const IndexPage = ({ data, pageContext }) => {
  const {
    nodes,
    page,
    prev,
    next,
    pages,
    total,
    limit
  } = pageContext
  const PaginationLink = props => {
    if (props.to && props.text) {
      return <Link to={props.to}>{props.text}</Link>
    }
    return null
  }
  return (
    <Layout>
      <SEO
        postData={{
          frontmatter: {}
        }}
      />
      <div className="flex flex-wrap lg:flex-row-reverse container mx-auto p-8">
        <div className="w-full lg:w-1/3">
          <iframe
            className="ml-auto"
            width="200"
            height="450"
            src="https://leanpub.com/gatsbyandcontentfulguide/embed"
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
        <div className="w-full lg:w-2/3">
          <ul className="list-none">
            {nodes.map((node, i) => (
              <Article key={i} data={node} />
            ))}
          </ul>
          <div className="previousPost pagination">
            <PaginationLink
              to={prev}
              text="Go to Previous Page"
            />
          </div>
          <div className="nextPost pagination">
            <PaginationLink
              to={next}
              text="Go to Next Page"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default IndexPage
