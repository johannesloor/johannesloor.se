"use strict";

module.exports = {
  siteMetadata: {
    title: "Johannes Loor",
    description: "Portfolio for Johannes Loor",
    keywords: "gatsbyjs, gatsby, javascript, sample, developer",
    siteUrl: "https://www.johannesloor.se",
    author: {
      name: "Johannes Loor",
      url: "https://www.johannesloor.se",
      email: "johannes.loor@gmail.com"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-typescript-plus.netlify.com"
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Johannes Loor',
        short_name: 'JL',
        start_url: '/',
        background_color: '#FFD972',
        theme_color: '#f0f8ff',
        display: 'minimal-ui',
        icon: './src/images/favicon.png',
      },
    },
  ]
};
