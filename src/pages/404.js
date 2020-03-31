import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-3xl m-auto">
      <h1>NOT FOUND</h1>
      <p>
        Sorry, no page was found at that URL. Head to the{" "}
        <Link to={`/`}>home page</Link> and find something there.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
