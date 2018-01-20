import React, {Component} from 'react';
import {Follow} from 'react-twitter-widgets';
import SubscriptionForm from '../SubscriptionForm'

const LinksFooter = () => (
  <section className="links-footer">
    <div className="connected">
      <h2>Newsletter</h2>
      <SubscriptionForm />
    </div>
    <div className="social">
      <h2>Stay connected</h2>
      <ul className="footer__links">
        <li>
          <a href="#">Articles RSS Feed</a>
        </li>
        <li>
          <a href="https://github.com/Khaledgarbaya">Github</a>
        </li>
        <li>
          <a href="https://instagram.com/khaledgarbaya">Instagram</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC_XsS8kgD9Y64ZOug4YKhpw">Youtube</a>
        </li>
      </ul>
      <Follow username="khaled_garbaya" />
    </div>
  </section>
);

export default LinksFooter;
