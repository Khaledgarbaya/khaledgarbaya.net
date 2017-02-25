import React from 'react'
import ArticleList from './article/ArticleList'

export default class Main extends React.Component {
  render () {
    return this.props.children
  }
}
