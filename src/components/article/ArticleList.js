import React from 'react'
import ArticleListItem from './ArticleListItem'
import client from '../service/client'
export default class ArticleList extends React.Component {
  constructor () {
    super()
    this.state = {articles: []}
  }
  componentDidMount () {
    client.getEntries({content_type: 'post'}).then((response) => {
      this.setState({articles: response.items})
    })
  }
  render () {
    const articles = this.state.articles.map((article, i) => <ArticleListItem id={i} key={i} article={article} />)
    return (
      <div className='category-page-posts animated fadeIn'>
        <div className='animated fadeIn'>
          {articles}
        </div>
      </div>
    )
  }
}
