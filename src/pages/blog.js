import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D MMMM YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h2>My Blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((post, index) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h4>{post.node.title}</h4>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
