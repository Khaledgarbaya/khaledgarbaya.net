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
        spaceId: '3bc97k4uk5q7',
        accessToken: '7b0772bf12f724a39c945f91135a8d657391042b50aae6e5ec28b0b9bb42f530'
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
    'gatsby-plugin-offline',
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
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content.childMarkdownRemark.html }],
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
