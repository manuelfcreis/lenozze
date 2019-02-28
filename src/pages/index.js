import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id='home-container'>
      <div id='main-title'>
        <h1>Carolina e Manuel</h1>
        <br />
        <p>21 09 2019</p>
      </div>

      <div className='card-container'>
        <div className='card' id='oDia'>
          <h3>
            o dia
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras pretium at nulla egestas consequat. Donec faucibus vel urna quis aliquam.
            Quisque faucibus dui mi, at gravida odio suscipit nec. Cras a rutrum ex.
            Sed volutpat est ac vulputate dignissim. Nullam nec orci nisl.
            Praesent blandit egestas augue, vitae ultricies nisl sodales in.
            Integer volutpat felis nulla, pharetra vehicula est facilisis vitae.
            Phasellus aliquam dapibus porttitor. Morbi lacinia malesuada vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien libero.
            Sed varius neque eu eros viverra lobortis. Etiam vitae felis justo.
          </p>
        </div>
        <div className='card' id='lista'>
          <h3>
            lista
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras pretium at nulla egestas consequat. Donec faucibus vel urna quis aliquam.
            Quisque faucibus dui mi, at gravida odio suscipit nec. Cras a rutrum ex.
            Sed volutpat est ac vulputate dignissim. Nullam nec orci nisl.
            Praesent blandit egestas augue, vitae ultricies nisl sodales in.
            Integer volutpat felis nulla, pharetra vehicula est facilisis vitae.
            Phasellus aliquam dapibus porttitor. Morbi lacinia malesuada vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien libero.
            Sed varius neque eu eros viverra lobortis. Etiam vitae felis justo.
          </p>
        </div>
        <div className='card' id='contactos'>
          <h3>
            contactos
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras pretium at nulla egestas consequat. Donec faucibus vel urna quis aliquam.
            Quisque faucibus dui mi, at gravida odio suscipit nec. Cras a rutrum ex.
            Sed volutpat est ac vulputate dignissim. Nullam nec orci nisl.
            Praesent blandit egestas augue, vitae ultricies nisl sodales in.
            Integer volutpat felis nulla, pharetra vehicula est facilisis vitae.
            Phasellus aliquam dapibus porttitor. Morbi lacinia malesuada vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien libero.
            Sed varius neque eu eros viverra lobortis. Etiam vitae felis justo.
          </p>
        </div>
      </div>
    </div>
  </Layout >
)

export default IndexPage
