import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='home-container'>
      <p>Olá pessoas curiosas,</p>
      <p style={{ "max-width": 600, "margin": "0 auto" }}>
        Ainda não temos muito para mostrar neste site.
        <br />
        Mas vamos ter, daqui a uns tempos.
      </p> <br />
      <p>
        Carolina e Manuel
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/flufwgYxpsk?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </Layout >
)

export default IndexPage
