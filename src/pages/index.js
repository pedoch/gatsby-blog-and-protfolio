import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Pedro, a front-end developer living in Nigeria</h2>
      <p>
        Need a developer? <a href="/contact">Contact Me</a>.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>.
      </p>
    </Layout>
  )
}

export default HomePage
