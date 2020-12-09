import React, {useState} from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
const InlineForm = ({status, message, onValidated}) => {
  const [email, setEmail] = useState('')
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('submitting')
    if (email && email.indexOf('@') > -1) {
      onValidated({
        EMAIL: email,
      })
    }
  }
  return (
    <form
      action="https://app.convertkit.com/forms/1036024/subscriptions"
      method="post"
      target="popupwindow"
      className="mt-6 w-full"
      onSubmit={submit}
    >
      {status === 'sending' && (
        <div className="text-blue-500 p-4">sending...</div>
      )}
      {status === 'error' && (
        <div
          className="text-red-600 p-4"
          dangerouslySetInnerHTML={{__html: message}}
        ></div>
      )}
      {status === 'success' && <div className="text-teal-500 p-4">Thanks!</div>}

      <div className="sm:focus-within:shadow-outline rounded-lg">
        <div className="sm:flex sm:shadow sm:rounded-lg sm:overflow-hidden">
          <input type="hidden" value="1" name="embed" />
          <input
            type="email"
            className="shadow sm:shadow-none block w-full rounded-lg focus:border-indigo border border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1 px-6 py-4 lg:py-5 focus:outline-none"
            name="email_address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={status && status === 'sending'}
            className="text-sm shadow sm:shadow-none block w-full sm:w-auto rounded-lg sm:rounded-none focus:outline-none bg-teal-500 hover:bg-teal-700 text-white text-shadow uppercase tracking-wide font-semibold px-6 py-4 lg:py-5"
          >
            Let's build somthing cool
          </button>
        </div>
      </div>
    </form>
  )
}

const CustomForm = ({status, message, onValidated}) => {
  let email
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (email && email.value.indexOf('@') > -1) {
      onValidated({
        EMAIL: email.value,
      })
    }
  }
  return (
    <form onSubmit={submit}>
      {status === 'sending' && <div style={{color: 'blue'}}>sending...</div>}
      {status === 'error' && <div style={{color: 'red'}}>{message}</div>}
      {status === 'success' && <div style={{color: 'green'}}>Thanks!</div>}
      <input
        ref={(node) => (email = node)}
        type="email"
        className="w-full px-3 py-2 border border-solid rounded"
        required={true}
        placeholder="me@examplemail.com"
      />
      <button className="w-full px-3 py-2 mt-4 text-white bg-teal-600 rounded">
        Start Learning!
      </button>
    </form>
  )
}
const BlockSignupForm = ({
  teaser = 'Enjoyed the content? Receive the next one in your inbox! No spam, just content.',
}) => {
  return (
    <section className="w-full max-w-md p-6 mx-auto my-4 border-t-4 border-teal-600 border-solid rounded shadow to">
      <p className="text-sm text-gray-700 p-4">{teaser}</p>
      <MailchimpSubscribe
        url="https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228"
        render={({subscribe, status, message}) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </section>
  )
}
const InlineSignupForm = ({
  teaser = 'Enjoyed the content? Receive the next one in your inbox! No spam, just content.',
}) => {
  return (
    <MailchimpSubscribe
      url="https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228"
      render={({subscribe, status, message}) => (
        <InlineForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  )
}
export {BlockSignupForm, InlineSignupForm}
