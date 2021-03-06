/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: 'jules-practise-bucket',
            region: 'us-east-2',
            acl: null
        },
    },
  ]
}
