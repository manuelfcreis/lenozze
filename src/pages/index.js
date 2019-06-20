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
          21 de setembro de 2019 - 16h
          </p>
          <p>
            O casamento celebra-se na Quinta da Torre, em Arcos (Vila do Conde), seguido de festa também na quinta. 
          </p>
          <img src={nois} alt='nós' />
          <p>
          Rua Eng. Francisco Costa Reis, 249
          <br />
          Arcos, Vila do Conde
          </p>
        </div>
        <Lista />
        <div className='card' id='contactos'>
          <h3>
            contactos
          </h3>
          <p>
            <strong>Carolina</strong> 914661145 <br />
            <strong>Manuel</strong> 927609298
          </p>
          <p>
            <strong>Quinta da Torre</strong>
            <br />
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
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d414.49172675062437!2d-8.653833987103555!3d41.396223142076806!2m2!1f180.96088!2f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0xd245ad60b48d161%3A0x2d5b8008ba0ee9b2!2sR.+Eng.+Francisco+Costa+dos+Reis+249%2C+Arcos!5e1!3m2!1sen!2spt!4v1561024795879!5m2!1sen!2spt"
            height="400"
            id='map'
            title='map'
            frameBorder="0"
            style={{border: 0}}
            />
        </div>
        {(window.location.search.substr(1) === 'obrigado') &&
          <div className='card card-show' id='obrigado'>
            <h3>
              Obrigado!
            </h3>
            <br />
            🐶💑🦜
          </div>
        }
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
