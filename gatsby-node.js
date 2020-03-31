// You can delete this file if you're not using it
const path = require(`path`)

// // Create a slug for each recipe and set it as a field on the node.
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `node__article`) {
//     const slug = `/posts/${node.path.alias}/`
//     createNodeField({
//       node,
//       name: `path`,
//       value: node.path.alias,
//     })
//   }
// }

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  const tagsTemplate = path.resolve(`src/templates/tags.js`)

  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        articles: allNodeArticle {
          edges {
            node {
              id
              path {
                alias
              }
            }
          }
        }
        tags: allTaxonomyTermTags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each article.
    result.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: articleTemplate,
        context: {
          id: node.id,
        },
      })
    })

    // Create pages for each tag.
    result.data.tags.edges.forEach(({ node }) => {
      createPage({
        path: `/tags/${node.name}`,
        component: tagsTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
