import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>My Blog</h2>
      <ol>
        {data.allMarkdownRemark.edges.map((post, index) => {
          return (
            <li
              key={
                post.node.frontmatter.title + index + post.node.frontmatter.date
              }
            >
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h4>{post.node.frontmatter.title}</h4>
                <h6>{post.node.excerpt}</h6>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
