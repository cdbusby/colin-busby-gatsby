import React from "react"
import Card from "./card";
import PropTypes from "prop-types";

const Posts = ({ posts, columns }) => {
  function parseNode(post) {
    return post.node ? post.node : post;
  }

  return (
      <div className={`flex flex-wrap -mx-${columns}`}>
        {posts.map((node) => (
            <Card data={parseNode(node)} />
        ))}
      </div>
  )
}

Posts.propTypes = {
  columns: PropTypes.string,
}

Posts.defaultProps = {
  columns: `4`,
}

export default Posts
