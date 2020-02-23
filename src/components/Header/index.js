import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="sm:flex items-center justify-between container mx-auto p-8">
    <h1 className="p-2">
      <a href="/" title="khaledgarbaya.net">
        <img
          className="h-16 w-16 mx-auto"
          src="/logo.svg"
          alt="logo"
        />
      </a>
    </h1>
    <nav className="">
      <ul
        className="flex justify-between list-none"
        id="menu"
      >
        <li>
          <a className="ml-0 sm:ml-6 href text-sm" href="/">
            Articles
          </a>
        </li>

        <li>
          <a
            className="ml-0 sm:ml-6 href text-sm"
            href="/about"
          >
            About me
          </a>
        </li>

        <li>
          <a
            className="ml-0 sm:ml-6 href text-sm"
            href="/courses"
          >
            Courses
          </a>
        </li>

        <li>
          <a
            className="ml-0 sm:ml-6 href text-sm"
            href="/contact"
          >
            Say Hi!
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
