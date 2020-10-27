const path = require("path");
const { createPaginationPages } = require("gatsby-pagination");
const fs = require("fs-extra");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/article.js");
    resolve(
      graphql(`
        {
          allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
            edges {
              node {
                title
                slug
                publishDate(formatString: "dddd, MMM Do YYYY")
                content {
                  childMarkdownRemark {
                    excerpt
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: `articles/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};

exports.onPostBuild = () => {
  fs.copySync(
    "./node_modules/focus-visible/dist/focus-visible.min.js",
    "./public/focus-visible.min.js"
  );
};
