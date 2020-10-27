import React from "react";
import { Follow } from "react-twitter-widgets";
import SubscriptionForm from "../SubscriptionForm";

const LinksFooter = () => (
  <section className="container mx-auto flex flex-wrap justify-between mt-4 border-t border-teal-600 py-4">
    <div className="connected md:w-1/2 w-full">
      <h2>Newsletter</h2>
      <SubscriptionForm />
    </div>
    <div className="md:w-1/2 w-full">
      <h2 className="w-full text-center">Stay connected</h2>
      <div className="flex flex-wrap mx-auto justify-between">
        <ul className="p-5 list-none">
          <li>
            <a href="/rss.xml" className="href">
              Articles RSS Feed
            </a>
          </li>
          <li>
            <a className="href" href="https://github.com/Khaledgarbaya">
              Github
            </a>
          </li>
          <li>
            <a className="href" href="https://instagram.com/khaledgarbaya">
              Instagram
            </a>
          </li>
        </ul>
        <ul className="p-5 list-none">
          <li>
            <a className="href" href="https://www.youtube.com/c/kgarbaya">
              Youtube
            </a>
          </li>
          <li>
            <a className="href" href="https://www.linkedin.com/in/kgarbaya/">
              Linkedin
            </a>
          </li>
          <li>
            <a className="href" href="https://dev.to/khaled_garbaya">
              <i
                className="fab fa-dev"
                title="khaled_garbaya's DEV Profile"
              ></i>
              DEV Profile
            </a>
          </li>
        </ul>
      </div>
      <Follow username="khaled_garbaya" />
    </div>
  </section>
);

export default LinksFooter;
