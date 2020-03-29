import {Link, graphql} from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Text from "../components/text";
import Code from "../components/code";
import SEO from "../components/seo";

import '../assets/main.css'

const ArticleTemplate = ({data}) => {
  function renderLayout(layout) {
    if (layout.__typename === 'paragraph__text') {
      return <Text data={layout}/>
    } else if (layout.__typename === 'paragraph__code') {
      return <Code data={layout}/>
    }
  }

  var relatedLinks;
  var testedAgainst;
  var tags;

  if (data.article.field_links.length) {
    relatedLinks = <div className="my-6"><span className="mr-2 font-bold">Related:</span>
      {data.article.field_links.map((link) => (
          <a href={ link.uri } className="">{ link.title }</a>
      ))}
    </div>
  }

  if (data.article.field_version) {
    testedAgainst = <div className="my-6"><span className="mr-2 font-bold">Tested against:</span>
      <span className="">Drupal { data.article.field_version }</span>
    </div>
  }

  if (data.article.relationships.field_tags.length) {
    tags = <div className="my-6"><span className="mr-2 font-bold">Tags:</span>
      {data.article.relationships.field_tags.map((tag) => (
          <Link to={`/tags/${tag.name}`} className="mr-2 py-1 px-2 rounded-md bg-indigo-600 text-white hover:text-white text-sm no-underline">{ tag.name }</Link>
      ))}
    </div>
  }

  return (
      <Layout home={false}>
        <SEO title={data.article.title}/>
        <div className="max-w-3xl m-auto">
          <h1>{data.article.title}</h1>
        </div>

        {data.article.relationships.field_layout.map((layout) => (
           renderLayout(layout)
        ))}

        <div className="max-w-3xl mt-12 mx-auto px-6 py-1 bg-indigo-100 shadow-lg rounded-md">
          <div className="my-6"><span className="font-bold">Posted:</span> {data.article.created}</div>
          { relatedLinks }
          { testedAgainst }
          { tags }
        </div>
      </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ($id: String!) {
    article: nodeArticle(id: {eq: $id}) {
      title
      created(formatString: "MMMM Do, YYYY")
      field_links {
        uri
        title
      }
      field_version
      relationships {
        field_tags {
          name
        }
        field_layout {
          ... on paragraph__code {
            field_code
          }
          ... on paragraph__text {
            field_content {
              format
              processed
              value
            }
          }
        }
      }
    }
  }
`