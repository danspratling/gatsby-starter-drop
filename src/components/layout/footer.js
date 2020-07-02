import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto py-8 px-16">
        <div className="grid grid-cols-5 mb-6">
          <div className="-mt-3">
            <p className="font-heading text-4xl font-bold">Drop</p>
          </div>
          <div>
            <p className="font-heading text-xl font-bold mb-4">About</p>
            <ul className="text-sm">
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-xl font-bold mb-4">Collaborate</p>
            <ul className="text-sm">
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-xl font-bold mb-4">Support</p>
            <ul className="text-sm">
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-xl font-bold mb-4">Social</p>
            <ul className="text-sm">
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
              <li>About Drop</li>
            </ul>
          </div>
        </div>
        <p className="text-right text-sm">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
