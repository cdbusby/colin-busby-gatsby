import React from "react"

const Text = ({ data }) => {
  return (
    <div className="max-w-3xl m-auto my-6">
      <div
        className="wysiwyg"
        dangerouslySetInnerHTML={{ __html: data.field_content.value }}
      />
    </div>
  )
}

export default Text
