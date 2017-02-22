import React from 'react'
import {render} from 'react-dom'
import Main from './Main'
import {Router, IndexRoute, Route, browserHistory} from 'react-router'
import ArticleList from './article/ArticleList'
import SingleArticle from './article/SingleArticle'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ArticleList} />
      <Route path='articles/:slug' component={SingleArticle} />
    </Route>
  </Router>
), document.querySelector('main'))
