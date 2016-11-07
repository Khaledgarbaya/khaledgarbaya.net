import React from 'react'

export default class ArticleListItem extends React.Component {
  render () {
    return (
      <article className='post'>
        <div className='post-preview col-xs-10  no-gutter'>
          <h2><a href='/hello-world/'>Hello World</a></h2>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          <p className='meta'>
            <a href='/author/khaled_garbaya/'>Khaled Garbaya</a>
             <i className='link-spacer'></i>
            <time className='post-date' dateTime='2015-10-04'>Nov 2015</time>
          </p>
        </div>

        <div className='col-xs-2  no-gutter'>
          <img src='/static/images/kgar.jpg' alt='Khaled Garbaya' className='user-icon user-1' />
        </div>
      </article>
    )
  }
}
