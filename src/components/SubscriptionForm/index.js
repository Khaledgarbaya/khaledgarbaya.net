import React, {useState} from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
const InlineForm = ({status, cta, message, onValidated}) => {
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
      className="w-full mt-6"
      onSubmit={submit}
    >
      {status === 'sending' && (
        <div className="p-4 text-blue-500">sending...</div>
      )}
      {status === 'error' && (
        <div
          className="p-4 text-red-600"
          dangerouslySetInnerHTML={{__html: message}}
        ></div>
      )}
      {status === 'success' && <div className="p-4 text-teal-500">Thanks!</div>}

      <div className="rounded-lg sm:focus-within:shadow-outline">
        <div className="sm:flex sm:shadow sm:rounded-lg sm:overflow-hidden">
          <input type="hidden" value="1" name="embed" />
          <input
            type="email"
            className="block w-full px-6 py-4 mb-4 text-black border border-transparent rounded-lg shadow sm:shadow-none focus:border-indigo sm:rounded-r-none sm:mb-0 sm:flex-1 lg:py-5 focus:outline-none"
            name="email_address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={status && status === 'sending'}
            className="block w-full px-6 py-4 text-sm font-semibold tracking-wide text-white uppercase bg-teal-500 rounded-lg shadow sm:shadow-none sm:w-auto sm:rounded-none focus:outline-none hover:bg-teal-700 text-shadow lg:py-5"
          >
            {cta}
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
      <p className="p-4 text-sm text-gray-700">{teaser}</p>
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
  teaser = '',
  cta = "Let's build something cool",
}) => {
  return (
    <MailchimpSubscribe
      url="https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228"
      render={({subscribe, status, message}) => (
        <div className="max-w-3xl mx-auto">
          {teaser ? (
            <p className="text-sm text-gray-700 p-4">{teaser}</p>
          ) : null}
          <InlineForm
            status={status}
            cta={cta}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        </div>
      )}
    />
  )
}
export {BlockSignupForm, InlineSignupForm}
