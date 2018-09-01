module.exports = {
  siteMetadata: {
    title: 'Khaled Garbaya\'s website',
    description: 'Khaled Garbaya, doing javascript and stuff...',
    siteUrl: 'https://khaledgarbaya.net'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.KHALED_GARBAYA_CF_SPACE,
        accessToken: process.env.KHALED_GARBAYA_CF_TOKEN,
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'name': 'Khaled Garbaya',
        'short_name': 'KG',
        'start_url': '/',
        'background_color': '#ffffff',
        'icons': [
          {
            'src': '/favicons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': '/favicons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'theme_color': '#ffffff',
        'display': 'standalone'
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-28940918-1",
        anonymize: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
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
            serialize: ({ query: { site, allContentfulBlog } }) => {
              return allContentfulBlog.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.content.childMarkdownRemark.excerpt,
                  url: site.siteMetadata.siteUrl + '/articles/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/articles/' + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content.childMarkdownRemark.html }, {"dc:creator": "Khaled Garbaya"}],
                });
              });
            },
            query: `
            {
              allContentfulBlog(
                limit: 1000,
                sort: { order: DESC, fields: [publishDate] },
              ) {
                edges {
                  node {
                    content {
                      childMarkdownRemark {
                        excerpt
                        html
                      }
                    }
                    slug 
                    title
                    date: publishDate
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
          },
        ],
      },
    }
  ],
}
