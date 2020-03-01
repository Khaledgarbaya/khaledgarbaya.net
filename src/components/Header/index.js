import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="container items-center justify-between p-8 mx-auto sm:flex">
    <h1 className="p-2">
      <a href="/" title="khaledgarbaya.net">
        <img className="w-16 h-16 mx-auto" src="/logo.svg" alt="logo" />
      </a>
    </h1>
    <nav className="">
      <ul className="flex justify-between list-none" id="menu">
        <li>
          <Link className="ml-0 text-sm sm:ml-6 href" to="/">
            Articles
          </Link>
        </li>

        <li>
          <Link className="ml-0 text-sm sm:ml-6 href" to="/about">
            About me
          </Link>
        </li>

        <li>
          <Link className="ml-0 text-sm sm:ml-6 href" to="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link className="ml-0 sm:ml-6 href text-sm" to="/contact">
            Say Hi!
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
