import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ArticleTemplate extends Component {
  render() {
    const {
      title,
      content,
      publishDate
    } = this.props.data.contentfulBlog
    return (
      <div className='article'>
        <div className='article__meta'>
        <p>Published: <time>{publishDate}</time> </p>
        </div>
        <div className='article__header'>
          <h2 className='h1'>{title}</h2>
        </div>
        <section dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} className='article__content' />
      </div>
    )
  }
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default ArticleTemplate;

export const pageQuery = graphql`
  query articleQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      publishDate(formatString:"dddd, MMM Do YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
