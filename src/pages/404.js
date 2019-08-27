import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page not found ¯\_(ツ)_/¯</h1>
      <p>
        Head <Link to="/">home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
