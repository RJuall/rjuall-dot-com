import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About</h1>
    <p>Adipisicing eu pariatur do nostrud laborum irure consequat ea. Consectetur nulla sint nostrud incididunt. Cillum Lorem fugiat laboris deserunt deserunt dolore. Ad enim minim aute in laborum consectetur sint.</p>
    <img src="https://placekitten.com/760/480"/>
    <p>Ad Lorem excepteur consequat esse. Consequat velit excepteur tempor ad irure ut irure id dolore commodo nostrud culpa aliqua. Consectetur occaecat sunt ea voluptate officia velit nisi veniam nisi voluptate officia. Consequat labore occaecat esse esse ullamco aliqua qui.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
