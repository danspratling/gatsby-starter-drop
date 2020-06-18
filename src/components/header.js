import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="fixed w-full top-0 z-50">
    <div className="max-w-7xl w-full mx-auto my-2 px-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
          <Link to="#" className="px-10 font-heading uppercase">
            Log in
          </Link>
          <Link to="#" className="px-10 font-heading uppercase">
            Sign up
          </Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
