import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

import "../assets/main.css"

const IndexPage = ({ data }) => {
  return (
    <Layout home={true}>
      <SEO title={`Drupal 8 snippets and articles`} />

      <div className="max-w-lg mx-auto mb-12 text-xl leading-8 text-center">
        <p className="text-4xl mb-6">Drupal is hard.</p>
        <p className="mb-6">
          I've been working with it for <em>years</em> and I'm still learning
          new things every day. The documentation can be lacking, and
          StackOverflow is hit or miss.
        </p>
        <p>
          Read through my collection of articles, hopefully they can help you
          learn something new.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="wysiwyg text-center">
          <h2>Recent Articles</h2>
        </div>
        <Posts posts={data.allNodeArticle.edges} gutter={`4`} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allNodeArticle {
    allNodeArticle(sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          created(formatString: "MMMM Do, YYYY")
          title
          field_teaser {
            value
          }
          path {
            alias
          }
        }
      }
    }
  }
`
