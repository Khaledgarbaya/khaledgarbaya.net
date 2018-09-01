import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className='main-content notFound'>
      <div className='notFound__text'>
        Oh welcome to an endless supply of my rotating head,you can stay here watching this or go back to the <Link to='/'>home</Link> page
      </div>
      <div className='notFound__animation'>
        <span className='notFound__four-left'>4</span>
        <img className='notFound__img' width='300' height='300' src='/logo.svg' />
        <span className='notFound__four-right'>4</span>
      </div>
    </div>
  </Layout>

)

export default NotFoundPage;
