import React from 'react'
import {render} from 'react-dom'

class Application extends React.Component {
  render () {
    return <h1>Hello World </h1>
  }
}

render(<Application />, document.querySelector('main'))
