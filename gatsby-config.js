module.exports = {
  siteMetadata: {
    title: `Christian Mejia - `,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Christian Mejia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "cm-gatsby-prismic-folio",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: false, // Activates purging in npm run develop
        printRejected: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /**
     * Automatically generates a _headers file and a _redirects file at the root of the public folder to configure HTTP headers and redirects on Netlify
     * Make sure to keep this LAST in the plugins array
     * @see {@link https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/|gatsby-plugin-netlify}
     */
    "gatsby-plugin-netlify",
  ],
}
