import React from "react"
import Link from "./"

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <span className="inline-block font-heading font-bold leading-tight uppercase text-center bg-gray-900 text-white mb-4 py-3 px-6">
        {children}
      </span>
    </Link>
  )
}

export default LinkButton
