import React from 'react'
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/tailwind.css'
import {AnimatePresence} from 'framer-motion'

const Layout = ({children, location}) => (
  <div className="bg-gray-100">
    <Helmet
      title="Khaled Garbaya - doing Javascript and stuff!"
      script={[
        {
          src: '/focus-visible.min.js',
          async: 'true',
          type: 'application/Javascript',
        },
      ]}
      link={[
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
      ]}
      meta={[
        {
          name: 'description',
          content:
            'Khaled Garbaya is a software developer and active open sorcerer. He speaks multiple languages and is often overheard saying "Bonjour" in HTML',
        },
        {
          name: 'keywords',
          content:
            'Khaled Garbaya, javascript, front-end, web developer, HTML5, CSS3, Berlin, Germany',
        },
        {
          'http-equiv': 'Cache-control',
          content: 'no-cache, no-store, must-revalidate',
        },
        {
          'http-equiv': 'Pragma',
          content: 'no-cached',
        },
        {
          name: 'google-site-verification',
          content: 'zp4OdPQ61W55uBbO8wze4ZEtQDQTAcBhPT76xoNW_VA',
        },
      ]}
    />
    <AnimatePresence>
      <div className="max-w-screen-lg mx-auto container">
        <Header />
        {children}
        <Footer />
      </div>
    </AnimatePresence>
  </div>
)

export default Layout
