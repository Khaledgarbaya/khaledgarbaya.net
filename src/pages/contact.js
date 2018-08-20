import React from 'react'
import Helmet from 'react-helmet'

const ContactPage = () => (
  <div className='contact main-content'>
    <h1>Contact</h1>
    <p>Wanna say hi? or have a question</p>
    <p>Hit me up on twitter <a href='https://twitter.com/khaled_garbaya'>@khaled_garbaya</a> or send me a message through the form bellow.</p>
    <form name='contact' className='contact__form'  method='post' data-netlify/>

      <input type="hidden" name="form-name" value="contact">
      <label aria-hidden >Don’t fill this out if you're human: <input name="bot-field" /></label>
      <label for='name'>
        Name
        <input id='name' name='name' type='text' />
      </label>
      <label for='email'>
        Email
        <input id='email' name='email' type='email' />
      </label>
      <label for='name'>
        Message
        <textarea id='name' name='message'/>
      </label>
      <button>Send</button>
    </form>
  </div>
)

export default ContactPage
