import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SEO from '../components/SEO';
import SubscriptionForm from '../components/SubscriptionForm'

class ArticleTemplate extends Component {
  render() {
    const { title, slug, content, featureImage, publishDate, author } = this.props.data.contentfulBlog
    return (
      <div className="article">
      <SEO
        key={`seo-${slug}`}
        postImage={featureImage ? `https:${featureImage.file.url}` : null}
        postData={
          {
            frontmatter:{
              slug,
              publishDate,
              title,
              description: content.childMarkdownRemark.excerpt
            }
          }
        }
        isBlogPost
      />
        <div className="article__meta">
          <p>
            Published: <time>{publishDate}</time>{' '}
          </p>
        </div>
        <div className="article__header">
          <h2 className="h1">{title}</h2>
        </div>
        <section
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
          className='article__content'
        />

        <div className='article__newsletter'>
          <p>Enjoyed this post? Receive the next one in your inbox! <br /> No spam, just content.</p>
          <SubscriptionForm />
        </div>
        <div className='article__author'>
          <div className='person'>
            <div className='person__avatar'>
              <img src={author.avatar.file.url} alt={author.avatar.title} />
            </div>
            <div className='person__text'>
              <div className='person__name'>{author.fullName}</div>
              <div 
                className='person__description' 
                dangerouslySetInnerHTML={{__html: author.bio.childMarkdownRemark.html}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "dddd, MMM Do YYYY")
      content {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      featureImage {
        file {
          url
        }
      }
      author {
        fullName
        bio {
          childMarkdownRemark {
            html
          }
        }
        avatar {
          title
          file {
            url
          }
        }

      }
    }
  }
`
