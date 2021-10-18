module.exports = {
  siteMetadata: {
    title: `Voto Honduras`,
    description: `Es un portal Open Source fundado por Control Hub Space cuya misión es brindarle a la ciudadanía datos transparentes, sobre procesos electorales en Honduras. 
    Usamos un conjunto de herramientas que permiten crear proyecciones y análisis a profundidad en temas electorales en Honduras.`,
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
