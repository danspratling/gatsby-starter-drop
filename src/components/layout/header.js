import React, { useRef, useState, useContext } from "react"
import { ModalContext } from "../../context/modalContext"

import Link from "../link"

/**
 *
 * @param {Object} props
 * @param {string} props.siteTitle
 * @param {"none"|"static"|"scroll"} props.headerScrollType
 */
const Header = ({ siteTitle, headerScrollType = "none" }) => {
  const headerEl = useRef(null)
  const [sticky, setSticky] = useState(false)
  const [modalState, setModalState] = useContext(ModalContext)

  const openModal = id =>
    setModalState(modalState => ({ ...modalState, modal: id }))

  // When the user scrolls the page, execute myFunction
  if (typeof window !== "undefined" && headerEl) {
    window.onscroll = function () {
      setSticky(window.pageYOffset > headerEl.current.offsetHeight)
    }
  }

  const headerScrollMap = {
    none: "bg-white border-gray-300",
    static: "fixed top-0 z-50 bg-white border-gray-300",
    noScroll: "fixed top-0 z-50",
    scroll: "fixed top-0 z-50 bg-white border-gray-300",
  }

  const headerClasses = () => {
    if (headerScrollType === "scroll")
      return !sticky
        ? headerScrollMap.noScroll
        : headerScrollMap[headerScrollType]

    return headerScrollMap[headerScrollType]
  }

  return (
    <header
      ref={headerEl}
      className={`w-full border-b border-transparent transform duration-500 ${headerClasses()}`}
    >
      <div className="max-w-7xl w-full mx-auto my-2 px-16">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <nav>
            <button
              className="px-10 font-heading uppercase"
              onClick={() => openModal("login")}
            >
              Log in
            </button>
            <button
              className="px-10 font-heading uppercase"
              onClick={() => openModal("signup")}
            >
              Sign up
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
