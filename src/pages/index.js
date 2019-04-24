import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Index.js</h1>
    <img src="https://placekitten.com/640/360"></img>
    <ul>
      <li>Something</li>
      <li>Nonsense</li>
      <li>Flim-Flam</li>
    </ul>
    <p>Commodo exercitation irure aute sit labore excepteur anim mollit eu in excepteur ad. Sunt sunt dolor id ex anim anim irure nisi nostrud cupidatat consequat non laborum dolore. Sit consequat veniam sunt mollit magna consectetur esse excepteur consequat enim veniam. Fugiat fugiat sit irure culpa culpa sint deserunt dolore elit quis anim cillum consectetur laborum.</p>
    <img src="https://placekitten.com/640/360"/>
    <p>Mollit sit pariatur sit ad laboris. Incididunt eu amet amet magna ea exercitation enim voluptate occaecat ullamco dolore laborum. Fugiat deserunt enim ut dolore minim in ex. Irure officia aliqua qui occaecat qui. Ea consequat mollit Lorem reprehenderit culpa deserunt dolor sit quis occaecat exercitation. Eiusmod id exercitation ut eu cillum et pariatur occaecat duis consequat amet. Et fugiat aliqua id dolor ea irure sit.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Ea velit id est eu consequat tempor nisi magna enim Lorem dolore occaecat. Esse adipisicing anim laboris adipisicing est nisi laborum culpa reprehenderit cupidatat voluptate non. Dolor voluptate tempor sunt officia deserunt ex irure est tempor mollit sint.</p>
    <Link to="/about/">Go to About</Link>
  </Layout>
)

export default IndexPage
