const PostsQuery = `

  {
    posts: allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }

`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'dev_POSTS',
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
  },
];

module.exports = queries