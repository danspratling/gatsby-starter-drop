import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const LoginButtons = ({ siteTitle }) => (
  <div className="flex flex-col max-w-xs">
    <button className="flex items-center justify-between bg-black text-white p-3 my-2 text-lg">
      <FontAwesomeIcon icon={faEnvelope} fixedWidth />
      <span className="m-auto">Continue with Email</span>
    </button>
    <button className="flex items-center justify-between bg-blue-600 text-white p-3 my-2 text-lg">
      <FontAwesomeIcon icon={faFacebookF} fixedWidth />
      <span className="m-auto">Continue as Dan</span>
    </button>
    <button className="flex items-center justify-between bg-white text-gray-500 p-3 my-2 text-lg border border-gray-500 shadow-md">
      <FontAwesomeIcon icon={faGoogle} fixedWidth />
      <span className="m-auto">Continue with Google</span>
    </button>
  </div>
)

export default LoginButtons
