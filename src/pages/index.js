import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Categories from "../components/categories"
import Promos from "../components/promos"
import Login from "../components/login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Categories />
    <Promos />
    <div className="relative w-full max-w-7xl m-auto bg-gray-200 px-16 py-16">
      <h2 className="text-4xl leading-tight mb-4 uppercase text-center mb-10">
        Join Drop today!
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl m-auto">
        <Login />
      </div>
    </div>
  </Layout>
)

export default IndexPage
