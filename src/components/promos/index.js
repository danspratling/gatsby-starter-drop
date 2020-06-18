import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Promo from "./promo"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-image-yellow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="relative w-full max-w-7xl m-auto mb-12 px-4 md:px-16">
      <h2 className="hidden md:block text-4xl font-bold uppercase mb-10">
        Why join drop?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Promo image={data.image.childImageSharp} />
        <Promo image={data.image.childImageSharp} />
        <Promo image={data.image.childImageSharp} />
      </div>
    </div>
  )
}

export default Hero
