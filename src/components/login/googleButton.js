import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

const GoogleButton = () => (
  <button className="flex items-center justify-between bg-white text-gray-500 p-3 my-2 text-lg border border-gray-500 shadow-md">
    <FontAwesomeIcon icon={faGoogle} fixedWidth />
    <span className="m-auto">Continue with Google</span>
  </button>
)

export default GoogleButton
