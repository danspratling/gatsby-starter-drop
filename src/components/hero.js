import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-image-yellow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="w-full max-w-7xl m-auto">
        <div className="pl-72">
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
      </div>
      <div className="">CONTENT</div>
    </>
  )
}

export default Hero
