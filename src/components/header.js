import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle, home }) => {
  var back = ""

  if (!home) {
    back = (
      <div
        className="back-arrow flex items-center mr-4 text-4xl"
        dangerouslySetInnerHTML={{ __html: "&larr;" }}
      />
    )
  }

  return (
    <header>
      <div className="max-w-3xl flex m-auto mt-4 mb-24">
        <Link
          className="home-link flex items-center font-bold text-3xl text-gray-800 leading-none no-underline "
          to="/"
        >
          {back}
          <img
            className="m-0 mr-2"
            alt={`logo`}
            style={{ width: 40 }}
            src={Logo}
          />
          {siteTitle}
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
