import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = ({ children, home }) => {
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
    <div className="px-5">
      <Header siteTitle={data.site.siteMetadata.title} home={home} />
      <main className="">{children}</main>
      <footer className="max-w-3xl mt-6 m-auto py-6 border-t border-gray-300">
        <div className="">
          <p>
            © {new Date().getFullYear()}, Built with{" "}
            <OutboundLink
              href="https://www.drupal.org"
              target={`_blank`}
              rel={`noopener`}
            >
              Drupal
            </OutboundLink>{" "}
            &amp;{" "}
            <OutboundLink
              href="https://www.gatsbyjs.org"
              target={`_blank`}
              rel={`noopener`}
            >
              Gatsby
            </OutboundLink>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
