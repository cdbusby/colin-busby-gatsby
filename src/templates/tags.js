import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts";

import '../assets/main.css'

const TagsTemplate = ({ data }) => {
  return (
      <Layout home={false}>
        <SEO title={`Tag: ${data.tag.name}`} description={`Tag listing page for ${data.tag.name}`} />

        <div className="max-w-3xl mx-auto">
          <div className="wysiwyg">
            <h2>Tag: {data.tag.name}</h2>
          </div>
          <Posts posts={data.tag.relationships.node__article} gutter={`4`} />
        </div>
      </Layout>
  )
}

export default TagsTemplate

export const query = graphql`
  query ($id: String!) {
    tag: taxonomyTermTags(id: {eq: $id}) {
      name
      relationships {
        node__article {
          title
          created(formatString: "MMMM Do, YYYY")
          path {
            alias
          }
          field_teaser {
            value
          }
        }
      }
    }
  }
`