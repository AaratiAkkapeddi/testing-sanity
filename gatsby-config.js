module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/testing-sanity",
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "o71h7ksx",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};