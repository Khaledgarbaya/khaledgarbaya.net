import React, {useState} from 'react'
import {Link} from 'gatsby'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="container items-center justify-between p-4 mx-auto sm:flex">
      <div className="w-full sm:flex sm:justify-between">
        <div className="flex items-center justify-between px-3 py-3">
          <div>
            <h1 className="p-2">
              <Link
                to="/"
                aria-label="Khaled Garbaya"
                title="khaledgarbaya.net"
              >
                <img className="w-16 h-16 mx-auto" src="/logo.svg" alt="logo" />
              </Link>
            </h1>
          </div>
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
        <nav
          className={`sm:flex sm:items-center sm:block ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <Link
            className="block w-full p-2 sm:ml-4 sm:w-1/3 text-gray-500  border-none uppercase text-sm"
            to="/about"
          >
            About
          </Link>

          <Link
            className="block w-full p-2 sm:ml-4 sm:w-1/3 text-gray-500 border-none uppercase text-sm"
            to="/"
          >
            Blog
          </Link>

          <Link
            className="p-2 sm:ml-4 w-full block sm:w-1/3 text-gray-500 border-none uppercase text-sm"
            to="/newsletter"
          >
            Newsletter
          </Link>
          <Link
            className="p-1 sm:ml-4 w-full block sm:w-1/3 uppercase text-sm  border-none rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
            to="/courses"
          >
            <span className="block bg-teal-50 rounded-full p-2">
              <span className="px-3 bg-clip-text bg-teal-50 text-transparent bg-gradient-to-r from-teal-500 to-teal-300">
                Courses
              </span>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
