import React from "react"
import Img from "gatsby-image"

/**
 *
 * @param {Object} props
 * @param {string} props.image
 */
const Hero = ({ image }) => {
  return (
    <div className="w-full">
      <Img fluid={image.fluid} />

      <div className="relative pr-24 -mt-24 z-20">
        <div className="bg-white py-6 px-8">
          <h3 className="text-2xl font-bold mb-4 uppercase">
            The best products around
          </h3>
          <p className="pb-6">
            From exclusive designs to collaborations with leading brands, every
            Drop product is inspired by passionate people like you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
