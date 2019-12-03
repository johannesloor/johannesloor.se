module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1140,"quality":90,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://gatsby-starter-typescript-plus.netlify.com"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
