/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { initialState, reducer } from "../../reducers"

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

  const [state, dispatch] = useReducer(reducer, initialState)
  const { modal } = state

  return (
    <div className="relative">
      <Header
        siteTitle={data.site.siteMetadata.title}
        headerScrollType={headerScrollType}
      />
      <main className={className}>{children}</main>
      <Footer />

      <Modal
        active={modal === "signin"}
        open={() => dispatch({ modal: "signin" })}
        close={() => dispatch({ modal: "" })}
      >
        <SignIn />
      </Modal>

      <Modal
        active={modal === "signup"}
        open={() => dispatch({ modal: "signup" })}
        close={() => dispatch({ modal: "" })}
      >
        <SignUp />
      </Modal>
    </div>
  )
}

export default Layout
