/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // https://reacttraining.com/blog/gatsby-mdx-blog/
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'Mdx') {
        const value = createFilePath({ node, getNode })
        createNodeField({
            // Individual MDX node
            node,
            // Name of the added field
            name: 'slug',
            // Generated value based on filepath with 'blog' prefix
            value: `/blog${value}`
        })
    }
}