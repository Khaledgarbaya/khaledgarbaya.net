import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import SubscriptionForm from '../components/SubscriptionForm'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

class ArticleTemplate extends Component {
  render() {
    const {
      title,
      slug,
      content,
      featureImage,
      publishDate,
      author,
    } = this.props.data.contentfulBlog
    return (
      <Layout>
        <div className="p-8">
          <SEO
            key={`seo-${slug}`}
            postImage={featureImage ? `https:${featureImage.file.url}` : null}
            postData={{
              frontmatter: {
                slug,
                publishDate,
                title,
                description: content.childMarkdownRemark.excerpt,
              },
            }}
            isBlogPost
          />

          <h2 className="text-3xl font-heading">{title}</h2>
          <span className="inline-block text-sm text-gray-700 border-b broder">
            Published: <time>{publishDate}</time>{' '}
          </span>
          <div className="prose prose-xl container mx-auto">
            <section
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
              className="w-full"
            />
          </div>
          <div className="text-sm text-gray">
            <SubscriptionForm />
          </div>
          <div className="container mx-auto mt-4 mt-5 text-sm text-gray-700">
            <div className="flex flex-wrap">
              <div className="rounded-full overflow-hidden w-24 h-24">
                <img src={author.avatar.file.url} alt={author.avatar.title} />
              </div>
              <div className="w-2/3">
                <div
                  className="px-4"
                  dangerouslySetInnerHTML={{
                    __html: author.bio.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
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
