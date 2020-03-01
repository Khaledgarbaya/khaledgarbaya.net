import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Article = ({ data }) => {
  return (
    <li className="py-4 mb-5 border-b">
      <Link
        className="text-gray-800 hover:text-teal-600"
        to={`/articles/${data.slug}`}
      >
        <h2 className="text-2xl font-heading">{data.title}</h2>
      </Link>
      <span className="inline-block text-sm text-gray-700 border-b broder">
        <time>{data.publishDate}</time>
      </span>
      <div
        className="py-4 text-sm text-gray-800"
        dangerouslySetInnerHTML={{
          __html: data.content.childMarkdownRemark.excerpt
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
  );
};
const IndexPage = ({ data }) => {
  const { nodes } = data.allContentfulBlog;
  return (
    <Layout>
      <SEO
        postData={{
          frontmatter: {}
        }}
      />
      <div className="container max-w-4xl mx-auto p-8">
        <ul className="list-none">
          {nodes.map((node, i) => (
            <Article key={i} data={node} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};
export const query = graphql`
  {
    allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
      nodes {
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
`;
export default IndexPage;
