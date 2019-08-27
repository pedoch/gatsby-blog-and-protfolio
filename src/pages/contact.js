import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>Email: pedroogheneochuko@gmail.com</p>
      <p>Phone: +2349073707630</p>
      <p>
        Twitter:{" "}
        <a
          href="https://twitter.com/deltanboi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @deltanboi
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
