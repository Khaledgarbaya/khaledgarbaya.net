import React, {PropTypes} from 'react'
import {Link} from 'preact-router'

class ArticleListItem extends React.Component {
  render () {
    const {article} = this.props
    return (
      <article className='post'>
        <div className='post-preview col-xs-10  no-gutter'>
          <h2><Link to={`articles/${article.fields.slug}`}>{article.fields.title}</Link></h2>

          <p>{article.fields.content}</p>

          <p className='meta'>
            <img src={article.fields.author.fields.avatar.fields.file.url + '?w=50&h=50'} alt={article.fields.author.fields.fullName} className='user-icon user-1' />
            <a href='/author/khaled_garbaya/'>{article.fields.author.fields.fullName}</a>
            <i className='link-spacer' />
            <time className='post-date' dateTime='2015-10-04'>{article.fields.publishDate}</time>
          </p>
        </div>
      </article>
    )
  }
}
ArticleListItem.propTypes = {
  article: PropTypes.object
}
export default ArticleListItem
