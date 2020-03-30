import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import Posts from "./posts";

const Card = ({ data, gutter }) => {
  return (
      <div className={`w-full sm:w-1/2 flex my-6 px-${gutter}`}>
        <div className="flex flex-col p-6 bg-gray-100 rounded shadow-lg">
          <Link className="text-2xl font-bold text-teal-500 hover:text-indigo-600 transition-colors duration-300 underline" to={data.path.alias}>{ data.title }</Link>
          <div className="my-2 font-bold">{data.created}</div>
          <div className="mb-8" dangerouslySetInnerHTML={{__html: data.field_teaser.value}}/>
          <Link className="mt-auto mr-auto rounded-md mt-4 bg-indigo-600 hover:bg-indigo-800 text-white hover:text-white px-6 py-3 transition-colors duration-300 shadow no-underline text-center" to={data.path.alias}>Read article &rarr;</Link>
        </div>
      </div>
  )
}

Card.propTypes = {
  gutter: PropTypes.string,
}

Card.defaultProps = {
  gutter: `4`,
}

export default Card
