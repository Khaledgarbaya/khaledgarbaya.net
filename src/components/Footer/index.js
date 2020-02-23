import React, { Component } from 'react'

const Footer = () => (
  <footer className="container text-sm text-gray-800 mx-auto border-t border-teal-600 py-4 text-center">
    <strong>
      © 2012–{new Date().getUTCFullYear()} Copyright Khaled
      Garbaya. All rights reserved.
    </strong>
    <br />
    <br />
    <small>
      {' '}
      This site is built with{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsbyjs
      </a>{' '}
      . The source code is hosted on{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Khaledgarbaya/khaled-garbaya.net"
      >
        Github
      </a>
      .
    </small>
    <br />
    <br />
    <a
      href="https://www.contentful.com/"
      rel="nofollow"
      target="_blank"
    >
      <img
        src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
        style={{ maxWidth: '100px', width: '100%' }}
        className="mx-auto"
        alt="Powered by Contentful"
      />
    </a>
    {'  '}
    <a href="https://www.netlify.com">
      <img
        className="mx-auto"
        src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
      />
    </a>
  </footer>
)

export default Footer
