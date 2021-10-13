module.exports = {
  siteMetadata: {
    title: `Voto Honduras`,
    description: ``,
    author: `Gaby Tinococo`,
    image: "/src/img/vote_honduras.png"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Voto Honduras',
        short_name: 'Voto Honduras',
        start_url: '/',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
      }
    }
  ]
};
