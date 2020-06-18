import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Category from "./category"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-image-yellow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productImage: file(relativePath: { eq: "header-image-yellow.jpg" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const products = [
    data.productImage.childImageSharp,
    data.productImage.childImageSharp,
    data.productImage.childImageSharp,
    data.productImage.childImageSharp,
    data.productImage.childImageSharp,
  ]

  return (
    <>
      <div className="relative w-full max-w-7xl my-16 mx-auto px-4 md:px-16">
        <h2 className="hidden md:block text-4xl font-bold uppercase mb-10">
          Find what moves you
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Everyday Carry"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
          <Category
            title="Audiophile"
            image={data.image.childImageSharp}
            products={products}
          />
        </div>
      </div>
    </>
  )
}

export default Categories
