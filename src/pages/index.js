import React from 'react'

import Layout from '../components/layout'
import Lista from '../components/lista'
import SEO from '../components/seo'

import list from '../list';

const nois = require('../images/nois.jpeg')

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id='home-container'>
      <div className='card-container'>
        <div className='card' id='casamento'>
          <h3>
            casamento
          </h3>
          <p>
            O casamento vai ser no dia 21 de setembro de 2019 na Quinta da Torre em Arcos, Vila do Conde.
            A missa começará às 15h30. A festa também será na quinta.
          </p>
          <img src={nois} alt='nós' />
          <br />
          <p>
            R. Eng. Francisco Costa Reis 249
            <br />
            Arcos, Vila do Conde, Portugal
            <br />
            <a
              target='_blank' rel="noopener noreferrer"
              href='https://goo.gl/maps/YGeUWViPSouwS59G9'>
              Ligação para google maps
            </a>
          </p>
        </div>
        <Lista />
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
    <div className='form-container' hidden>
      {list.map((item, index) => {
        return(
          <form key={index} name={item[0]} data-netlify='true' data-netlify-honeypot="campo-enganador" hidden>
            <p style={{display: 'none'}}>
              <label><input name="campo-enganador" /></label>
            </p>
            <input type="hidden" name="form-name" value={item[0]} />
            <input type="text" name="name" />
            <input type="text" name="present" />
            <textarea name="message"></textarea>
          </form>
        )
      })}
    
    </div>
  </Layout>
)

export default IndexPage
