import React, {Component} from 'react'
import client from '../service/client'
import marked from 'marked'
class SingleArticle extends Component {
  constructor () {
    super()
    this.state = {article: null}
  }
  componentDidMount () {
    const {params} = this.props
    if (params && params.slug) {
      client.getEntries({content_type: 'post', 'fields.slug': params.slug})
        .then((response) => {
          this.setState({article: response.items[0]})
        })
    }
  }
  getParsedMarkdown (content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }
  render () {
    if (!this.state.article) {
      return <h1> Loading ... </h1>
    }
    return (
      <div className='row'>
        <div className='col-xs-12 single-content'>
          <p className='meta'>
            <a href='/author/dan/'>{this.state.article.fields.author.fields.fullName}</a> in <a href='/tag/coding/'>coding</a>
            <i className='link-spacer' />
            <time className='post-date' dateTime='2015-10-04'>
                {this.state.article.fields.publishDate}
            </time>
          </p>
          <h1>{this.state.article.fields.title}</h1>
          <div dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.content)} />
        </div>
      </div>
    )
  }
}

export default SingleArticle
