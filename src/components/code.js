import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Code = ({ data }) => {
  console.log(data.field_language)
  if (!data.field_code) {
    return ''
  }
  return (
    <div className="my-6 max-w-4xl m-auto rounded overflow-hidden">
      <SyntaxHighlighter language={data.field_language} style={a11yDark}>
        {data.field_code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
