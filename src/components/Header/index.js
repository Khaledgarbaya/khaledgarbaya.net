import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="main-header">
    <h1 className="logo">
      <a href="/" title="khaledgarbaya.net">
        <img src="/logo.svg" alt="logo" />
      </a>
    </h1>
    <button
      className="menu-trigger"
      aria-controls="main-nav"
      aria-expanded="false"
      id="js-menu-trigger"
    >
      Menu
      <span
        className="menu-trigger__icon"
        id="js-menu-trigger__icon"
        aria-hidden="true"
      >
        +
      </span>
    </button>
    <nav className="main-nav" id="main-nav">
      <ul className="main-nav__list clearfix" id="menu">
        <li className="main-nav__item ">
          <a href="/">
            Articles
          </a>
        </li>

        <li className="main-nav__item ">
          <a href="/about">
            About me
          </a>
        </li>

        <li className="main-nav__item ">
          <a href="/speaking/">Speaking</a>
        </li>

        <li className="main-nav__item ">
          <a href="/contact/">Say Hi!</a>
        </li>

        <li className="main-nav__item ">
          <a href="/setup/">Setup</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
