import React, { Component} from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated}) => {
  let email;
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(
      email &&
      email.value.indexOf('@') > -1
    ){
      onValidated({
        EMAIL: email.value
      })
    }
  }
  return (
    <form className='signup__form' onSubmit={submit}>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && <div style={{ color: 'red' }}>{message}</div>}
      {status === 'success' && <div style={{ color: 'green' }}>Thanks!</div>}
      <input
        className='signup__email'
        ref={node => (email = node)}
        type='email'
        required = 'true'
        placeholder='mark@examplemail.com'
      />
      <button className='signup__btn'>
        Subscribe
      </button>
    </form>
  )
}
const SignupForm = ({ data }) => {
  return (
    <section className='signup section'>
      <MailchimpSubscribe
        url='https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228'
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </section>
  )
}
SignupForm.propTypes = {
  data: PropTypes.object.isRequired
}
export default SignupForm;
