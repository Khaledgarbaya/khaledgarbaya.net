import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Article = ({data}) => {
  return (
  <li className='post'>
    <Link to={`articles/${data.node.slug}`}>
      <h2 className='post__title'>{data.node.title}</h2>
    </Link>
    <span className='post__meta'><time>{data.node.publishDate}</time></span>
    <div className='post__summary' dangerouslySetInnerHTML={{__html: data.node.content.childMarkdownRemark.excerpt}} />
    <small><Link className='read-more-link' to={`articles/${data.node.slug}`}>Read more ››</Link></small>
  </li>)
}
const IndexPage = ({data}) => {
return (
  <ul className='articles-list'>
    {data.allContentfulBlog.edges.map((edge, i) => <Article key={i} data={edge}/>)}
  </ul>
)
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (limit:100) {
      edges {
        node {
          title
          slug
          publishDate(formatString:"dddd, MMM Do YYYY")
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
export default IndexPage
