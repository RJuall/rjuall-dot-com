const mdxFeed = require("gatsby-mdx/feed");

module.exports = {
  siteMetadata: {
    title: `Robert Juall`,
    description: `Robert Juall's personal portfolio site`,
    author: `@rjuall`,
    siteUrl: `https://stupefied-bhaskara-bea81a.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-mdx`,
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robert Juall's Portfolio Site`,
        short_name: `RJuall`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ],
}
