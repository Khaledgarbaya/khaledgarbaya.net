import React from 'react'
import Layout from '../components/Layout'
import {BlockSignupForm} from '../components/SubscriptionForm'
const NewsletterPage = ({location}) => (
  <Layout location={location}>
    <div className="container p-8 mx-auto">
      <div>
        <h1 className="text-2xl text-center">
          Receive emails from me about Web Development
        </h1>
        <p className="text-center text-gray-600">
          Currently I am focusing on pushing the limits with JAMstack, that's
          Javascript, Markup and APIs, for that I use Frameworks and tools like
          Gatsby, eleventy, Contentful, Hasura ans more.
        </p>
      </div>
      <div className="mt-16">
        <BlockSignupForm teaser="Receive the next one in your inbox! No spam, just content." />
      </div>
    </div>
  </Layout>
)

export default NewsletterPage
