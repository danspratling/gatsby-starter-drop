import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

const FacebookButton = () => (
  <button className="flex items-center justify-between bg-blue-600 text-white p-3 my-2 text-lg">
    <FontAwesomeIcon icon={faFacebookF} fixedWidth />
    <span className="m-auto">Continue as Dan</span>
  </button>
)

export default FacebookButton
