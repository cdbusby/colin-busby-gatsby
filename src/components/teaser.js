import React from "react"

const Teaser = ({ data }) => {
  if (!data) {
    return ""
  }

  return (
    <div className="mb-8" dangerouslySetInnerHTML={{ __html: data.value }} />
  )
}

export default Teaser
