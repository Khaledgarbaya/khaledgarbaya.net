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
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=31536000; includeSubdomains; preload",
            "Content-Security-Policy: default-src 'none'; font-src 'self' data:; img-src *.netlify.com 'self' data: *.doubleclick.net *.ctfassets.net *.contentful.com *.facebook.com *.google-analytics.com; script-src 'self' 'unsafe-inline' *.facebook.net *.google-analytics.com *.twitter.com; style-src 'self' 'unsafe-inline'; manifest-src 'self'; connect-src 'self' *.netlify.com *.doubleclick.net *.ctfassets.net *.contentful.com *.facebook.com *.google-analytics.com *.twitter.com; frame-src 'self' *.twitter.com *.youtube.com *.google.com; object-src 'none'",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            "Referrer-Policy: same-origin"
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
