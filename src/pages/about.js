import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am a 3rd year student in Babcock University</p>
      <p>
        I love programming and I'm fluent in several languages including Java,
        Javascript, C++ and C
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
