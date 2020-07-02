import React from "react"
import Img from "gatsby-image"

/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {Object} props.image
 * @param {Array} props.products
 */
const Category = ({ title, image, products }) => {
  return (
    <div className="border border-gray-400">
      <Img fluid={image.fluid} />
      <h4
        className="md:text-2xl font-bold uppercase text-center leading-tight my-6 mx-2"
        style={{ height: 54 }}
      >
        {title}
      </h4>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center flex-row-reverse py-4 pl-10 pr-6 text-center">
          {products.map((image, index) => (
            <Img
              key={index}
              fixed={image.fixed}
              className="border-4 border-white rounded-full -ml-3"
            />
          ))}
        </div>
        <p className="text-xs text-gray-700 uppercase mb-4">24 products</p>
      </div>
    </div>
  )
}

export default Category
