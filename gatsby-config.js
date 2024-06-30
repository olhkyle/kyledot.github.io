/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `KYLE.`,
		author: {
			name: `Hyukmin Kwon`,
			summary: `A Space to document my steady growth with code.`,
		},
		description: '',
		siteUrl: `https://olhkyle.github.io/`,
		social: {
			linkedin: `hyukmin-kwon`,
		},
	},
	pathPrefix: '/',
	plugins: [
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: ['G-5PK419H7M5'],
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				output: '/',
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://olhkyle.github.io/',
				sitemap: 'https://olhkyle.github.io/sitemap-index.xml',
				policy: [
					{
						userAgent: '*',
						allow: '/',
					},
				],
			},
		},
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 720,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.nodes.map(node => {
								return Object.assign({}, node.frontmatter, {
									description: node.excerpt,
									date: node.frontmatter.date,
									url: site.siteMetadata.siteUrl + node.fields.slug,
									guid: site.siteMetadata.siteUrl + node.fields.slug,
									custom_elements: [{ 'content:encoded': node.html }],
								});
							});
						},
						query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
						output: '/rss.xml',
						title: `Hyukmin Kwon's Kyledot Blog RSS Feed`,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Kyledot`,
				short_name: `Kyledot`,
				start_url: `/`,
				background_color: `#ffffff`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				theme_color: `#3182f6`,
				display: `minimal-ui`,
				icon: `src/images/space-person.png`, // This path is relative to the root of the site.
				theme_color_in_head: false,
			},
		},
	],
};
