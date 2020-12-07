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
      <div className="w-full border-b-2 border-teal-300">
        <div className="p-8 mx-auto flex justify-between items-center flex-wrap">
          <div className="w-full md:w-2/3 px-8">
            <h1 className="text-6xl font-extrabold"> Khaled Garbaya </h1>
            <p className="text-lg">
              I build real projects from start to finish using the JAMStack, and
              I teach you how to do build it along the way
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  className="hover:text-teal-400"
                  href="http://twitter.com/khaled_garbaya"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                  >
                    <title>Twitter</title>
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400"
                  href="https://youtube.com/kgarbaya"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                  >
                    <title class="ir">Youtube</title>
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400"
                  href="https://www.twitch.tv/kgarbaya"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                  >
                    <title>Twitch</title>
                    <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400"
                  href="http://github.com/Khaledgarbaya"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                  >
                    <title>GitHub</title>
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="hover:text-teal-400"
                  href="https://www.instagram.com/khaledgarbaya/"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                  >
                    <title>Instagram</title>
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400"
                  href="mailto:kgarbaya@gmail.com"
                  rel="me"
                >
                  <svg
                    className="w-8 h-auto"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                    <title>Email</title>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <img class="w-full h-auto mx-auto" src="/logo.svg" alt="logo" />
          </div>
        </div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="p-8 mx-auto max-w-screen-md"
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
