import React, {Component} from 'react';
import {Follow} from 'react-twitter-widgets';
import SubscriptionForm from '../SubscriptionForm'

const LinksFooter = () => (
  <section className='links-footer'>
    <div className='connected'>
      <h2>Newsletter</h2>
      <SubscriptionForm />
    </div>
    <div className='social'>
      <h2>Stay connected</h2>
      <ul className='footer__links'>
        <li>
          <a href='/rss.xml'>Articles RSS Feed</a>
        </li>
        <li>
          <a href='https://github.com/Khaledgarbaya'>Github</a>
        </li>
        <li>
          <a href='https://instagram.com/khaledgarbaya'>Instagram</a>
        </li>
        <li>
          <a href='https://www.youtube.com/c/kgarbaya'>Youtube</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/kgarbaya/'>Linkedin</a>
        </li>
      </ul>
      <Follow username='khaled_garbaya' />
    </div>
  </section>
);

export default LinksFooter;
