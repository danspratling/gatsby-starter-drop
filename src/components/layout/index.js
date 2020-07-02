/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ModalProvider } from "../../context/modalContext"

import Header from "./header"
import Footer from "./footer"
import Modal from "../modal"
import SignUp from "../login/signUp"
import SignIn from "../login/signIn"

const Layout = ({ headerScrollType, className, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ModalProvider>
      <div className="relative">
        <Header
          siteTitle={data.site.siteMetadata.title}
          headerScrollType={headerScrollType}
        />
        <main className={className}>{children}</main>
        <Footer />

        <Modal id="login">
          <SignIn />
        </Modal>

        <Modal id="signup">
          <SignUp />
        </Modal>
      </div>
    </ModalProvider>
  )
}

export default Layout
