import React from "react"
import GatsbyLink from "gatsby-link"

/**
 *
 * @param {Object} props
 * @param {string} props.to - href
 * @param {string} [props.className] - custom classes
 * @param {JSX.Element|String} props.children - content
 */

const Link = ({ to, className, children }) => {
  const classes = `block ${className}`.trim()

  if (typeof window !== "undefined" && to.includes(window.location.hostname)) {
    return (
      <GatsbyLink to={to} className={classes}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className={classes}>
      {children}
    </a>
  )
}

export default Link
