import React from "react"
import Card from "./card";
import PropTypes from "prop-types";

const Posts = ({ posts, gutter }) => {
  function parseNode(post) {
    return post.node ? post.node : post;
  }

  return (
      <div className={`flex flex-wrap -mx-${gutter}`}>
        {posts.map((node) => (
            <Card data={parseNode(node)} gutter={gutter} />
        ))}
      </div>
  )
}

Posts.propTypes = {
  gutter: PropTypes.string,
}

Posts.defaultProps = {
  gutter: `4`,
}

export default Posts
