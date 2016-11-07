import React from 'react'
import ArticleListItem from './ArticleListItem'

export default class ArticlesList extends React.Component {
  render () {
    let articles = []
    for (let i = 0; i < 6; i++) {
      articles.push(<ArticleListItem id={i} key={i} />)
    }
    return (
      <div className='category-page-posts animated fadeIn'>
        <div className='animated fadeIn'>
          {articles}
        </div>
      </div>
    )
  }
}
