import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"
import Button from "../components/link/button"

const IndexPage = ({ data }) => {
  const {
    headerImageMobile,
    headerImageDesktop,
    leaderImage,
    investorImage,
  } = data

  const header = {
    image: [
      headerImageMobile.childImageSharp.fluid,
      {
        ...headerImageDesktop.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ],
    link: {
      title: "Join us",
      url: "/careers",
    },
  }

  const nav = [
    { link: "/about#info", title: "Company Info" },
    { link: "/about#leadership", title: "Leadership" },
    { link: "/about#investors", title: "Investors" },
    { link: "/about#culture", title: "Culture" },
    { link: "/about#contact", title: "Contact" },
  ]

  const leaders = [
    {
      name: "Dan Spratling",
      url: "/",
      position: "A pretty great guy",
      image: leaderImage.childImageSharp.fluid,
    },
    {
      name: "Dan Spratling",
      url: "/",
      position: "A pretty great guy",
      image: leaderImage.childImageSharp.fluid,
    },
    {
      name: "Dan Spratling",
      url: "/",
      position: "A pretty great guy",
      image: leaderImage.childImageSharp.fluid,
    },
    {
      name: "Dan Spratling",
      url: "/",
      position: "A pretty great guy",
      image: leaderImage.childImageSharp.fluid,
    },
  ]

  const investors = [
    {
      url: "/",
      image: investorImage.childImageSharp.fluid,
    },
    {
      url: "/",
      image: investorImage.childImageSharp.fluid,
    },
    {
      url: "/",
      image: investorImage.childImageSharp.fluid,
    },
    {
      url: "/",
      image: investorImage.childImageSharp.fluid,
    },
    {
      url: "/",
      image: investorImage.childImageSharp.fluid,
    },
  ]

  return (
    <Layout className="bg-gray-100">
      <SEO title="About" />
      <div className="w-full max-w-7xl m-auto">
        <div className="relative mx-2 md:mx-16">
          <Img
            fluid={header.image}
            className="rounded-b-lg md:rounded-b-none"
          />

          <div className="absolute left-0 bottom-0 w-full flex items-center justify-center transform -translate-y-full py-4">
            <Button to={header.link.url}>{header.link.title}</Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-16 my-4">
          <nav className="flex flex-wrap justify-evenly">
            {nav.map(item => (
              <p className="text-sm text-gray-500 hover:text-gray-600 focus:text-gray-600 border-b border-transparent hover:border-gray-600 focus:border-gray-600 uppercase tracking-wider pb-1 m-2">
                <Link to={item.link}>{item.title}</Link>
              </p>
            ))}
          </nav>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-4 md:mx-16 my-4 py-4 text-center">
          <h2 className="text-2xl font-serif font-bold leading-tight mb-6">
            Community-Inpsired Products, Designed for Everyone
          </h2>
          <p>
            Drop is designing products differently. By tapping into data and
            insights from uniquely passionate people and applying them to our
            curated selections and exclusive designs, we deliver inventive
            products that fuel your interests. Founded in 2012, Drop empowers
            people around the world to discover new, diverse products every day;
            participate in product development; and learn and share with a
            community 7 million strong.
          </p>
          <p>
            Find and follow your passions on Drop.com and the Drop app for
            iPhone smartphones. You can also connect with us at @drop on
            Facebook, Instagram, and Twitter.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-4 md:mx-16 my-4 py-4 text-center">
          <h2 className="text-2xl font-serif font-bold leading-tight mb-6">
            Leadership
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-center text-left my-8">
            {leaders.map(({ name, url, position, image }) => (
              <Link
                to={url}
                className="text-gray-600 hover:text-gray-700 focus:text-gray-700"
              >
                <Img fluid={image} />
                <h4 className="text-xl text-gray-900 font-serif">{name}</h4>
                <p className="text-sm">{position}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-4 md:mx-16 my-4 py-4 text-center">
          <h2 className="text-2xl font-serif font-bold leading-tight mb-6">
            Investors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center my-8">
            {investors.map(({ url, image }) => (
              <Link to={url}>
                <Img fluid={image} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-4 md:mx-16 my-4 py-4 text-center">
          <h2 className="text-2xl font-serif font-bold leading-tight mb-6">
            Love where you work
          </h2>
          <p>
            We believe inventive product design can help people enjoy the things
            they love like never before, and we’re always on the lookout for
            team members who feel the same way. If you’re passionate about our
            mission and great at what you do, we want to meet you. Explore your
            career opportunities at Drop.
          </p>
          <div className="mt-12">
            <Button to="/careers">Learn more</Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl m-auto">
        <div className="relative mx-4 md:mx-16 my-4 py-4 text-center">
          <h2 className="text-2xl font-serif font-bold leading-tight mb-6">
            Contact us
          </h2>
          <div className="grid md:grid-cols-3 gap-4 items-center justify-center my-8">
            <div className="my-4">
              <h4 className="font-serif mb-4">Media Enqiries</h4>
              <p className="text-sm">
                <Link to="mailto:press@drop.com">press@drop.com</Link>
              </p>
            </div>
            <div className="my-4">
              <h4 className="font-serif mb-4">Partnership Enqiries</h4>
              <p className="text-sm">
                <Link to="mailto:partnerships​@drop.com">
                  partnerships​@drop.com
                </Link>
              </p>
            </div>
            <div className="my-4">
              <h4 className="font-serif mb-4">Become a vendor</h4>
              <p className="text-sm">
                <Link to="mailto:vendor​@drop.com">vendor​@drop.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    headerImageDesktop: file(relativePath: { eq: "header-image-yellow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImageMobile: file(relativePath: { eq: "header-image-yellow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leaderImage: file(relativePath: { eq: "header-image-yellow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    investorImage: file(relativePath: { eq: "header-image-yellow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
