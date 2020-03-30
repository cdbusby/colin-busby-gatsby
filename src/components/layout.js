/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
      <Header siteTitle={data.site.siteMetadata.title} home={home}/>
      <main className="">{children}</main>
      <footer className="max-w-3xl mt-6 m-auto py-6 border-t border-gray-300">
        <div className="">
          <p>© {new Date().getFullYear()}, Built with <a href="https://www.drupal.org" target={`_blank`} rel={`noopener`}>Drupal</a> &amp; <a href="https://www.gatsbyjs.org" target={`_blank`} rel={`noopener`}>Gatsby</a>.</p>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
