import React from 'react'
import SubscribeFrom from 'react-mailchimp-subscribe'

const formProps = {
  action: 'https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228',
  messages: {
    inputPlaceholder: 'you@email.com',
    btnLabel: 'Subscribe!',
    sending: 'Sending...',
    success: 'Thanks for subscribing!',
    error: 'Oops, something went wrong'
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}
 
const SubscriptionForm = () => <SubscribeFrom {...formProps}/>
export default SubscriptionForm
