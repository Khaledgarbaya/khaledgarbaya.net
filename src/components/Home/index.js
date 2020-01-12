import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../Layout'

const Article = ({ data }) => {
  return (
    <li className="post">
      <Link to={`articles/${data.node.slug}`}>
        <h2 className="post__title">{data.node.title}</h2>
      </Link>
      <span className="post__meta">
        <time>{data.node.publishDate}</time>
      </span>
      <div
        className="post__summary"
        dangerouslySetInnerHTML={{
          __html:
            data.node.content.childMarkdownRemark.excerpt
        }}
      />
      <small>
        <Link
          className="read-more-link"
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
      <iframe
        className="article__embed"
        width="160"
        height="400"
        src="https://leanpub.com/gatsbyandcontentfulguide/embed"
        frameborder="0"
        allowtransparency="true"
      ></iframe>
      <div className="articles-list">
        <ul>
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
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default IndexPage
