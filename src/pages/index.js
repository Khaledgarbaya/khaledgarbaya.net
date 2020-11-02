import React from 'react'
import {Link, graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {motion} from 'framer-motion'

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {duration: 0.6, ease: easing},
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Article = ({data}) => {
  return (
    <motion.li
      variants={fadeInUp}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className="py-4 mb-5 border-b"
    >
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
    </motion.li>
  )
}
const IndexPage = ({data, location}) => {
  const {nodes} = data.allContentfulBlog
  return (
    <Layout location={location}>
      <SEO
        postData={{
          frontmatter: {},
        }}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="max-w-screen-md mx-auto p-8"
      >
        <motion.ul variants={stagger} className="list-none">
          {nodes.map((node, i) => (
            <Article key={i} data={node} />
          ))}
        </motion.ul>
      </motion.div>
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
