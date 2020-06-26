import React from "react"
import GatsbyLink from "gatsby-link"

/**
 *
 * @param {Object} props
 * @param {string} props.to - the link
 * @param {string} props.children - the link content
 */

const Link = ({ to, children }) => {
  if (typeof window !== "undefined" && to.includes(window.location.hostname)) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>
  }

  return (
    <a href={to} className="block">
      {children}
    </a>
  )
}

export default Link
