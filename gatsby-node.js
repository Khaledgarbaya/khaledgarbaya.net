const path = require('path')
const { createPaginationPages } = require("gatsby-pagination")

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/article.js')
    const indexPage = path.resolve('src/components/Homei/index.js')
    resolve(
      graphql(`
        {
          allContentfulBlog (sort:{fields: [publishDate], order: DESC}) {
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
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        createPaginationPages({
          createPage: createPage,
          edges: result.data.allContentfulBlog.edges,
          component: indexPage,
          limit: 5
        })
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: `articles/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
