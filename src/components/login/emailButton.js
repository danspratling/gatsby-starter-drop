import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const EmailButton = () => (
  <button className="flex items-center justify-between bg-black text-white p-3 my-2 text-lg">
    <FontAwesomeIcon icon={faEnvelope} fixedWidth />
    <span className="m-auto">Continue with Email</span>
  </button>
)

export default EmailButton
