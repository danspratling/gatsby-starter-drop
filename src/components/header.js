import React, { useRef, useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const headerEl = useRef(null)
  const [sticky, setSticky] = useState(false)

  // When the user scrolls the page, execute myFunction
  if (typeof window !== "undefined" && headerEl) {
    window.onscroll = function () {
      setSticky(window.pageYOffset > headerEl.current.offsetHeight)
    }
  }

  return (
    <header
      ref={headerEl}
      className={`fixed w-full top-0 z-50 border-b border-transparent transform duration-500 ${
        sticky && "bg-white border-gray-300"
      }`}
    >
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
}

export default Header
