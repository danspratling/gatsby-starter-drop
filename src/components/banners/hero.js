import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LoginButtons from "../login"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-image-yellow.jpg" }) {
        childImageSharp {
          fixed(height: 725) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="relative w-full max-w-7xl m-auto mb-12">
      <div className="md:pl-48 lg:pl-72">
        <Img fixed={data.image.childImageSharp.fixed} />
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-48 pl-16">
        <div className="max-w-md bg-white p-8">
          <h1 className="text-4xl leading-tight mb-4 uppercase">
            Community-inspired products, designed for everyone.
          </h1>
          <p className="pb-6">
            Join our community of passionate people to find and follow your
            interests. Discover innovative products, made possible by the
            collective wisdom of our users.
          </p>
          <div className="flex flex-col max-w-xs">
            <LoginButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
