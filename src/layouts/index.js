import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import '../styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Khaled Garbaya - doing Javascript and stuff!"
      meta={[
        { name: 'description', content: 'Khaled Garbaya is a software developer and active open sorcerer. He speaks multiple languages and is often overheard saying "Bonjour" in HTML' },
        { name: 'keywords', content: 'Khaled Garbaya, javascript, front-end, web developer, HTML5, CSS3, Berlin, Germany' },
      ]}
    />
    <div className='grid'>
    <Header />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
