import React from 'react'

import Layout from '../components/layout'
import Casamento from '../components/casamento'
import Contactos from '../components/contactos'
import Lista from '../components/lista'
import SEO from '../components/seo'

import list from '../list';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      obrigado: false,
    }
  }

  componentDidMount() {
    if (window && window.location.search.substr(1) === 'obrigado') {
      this.setState(() => {
        return { obrigado: true }
      })
    }
  }

  render() {
    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div id='home-container'>
          <div className='card-container'>
            <Casamento />
            <Lista />
            <Contactos />
            {this.state.obrigado &&
              <div className='card card-show' id='obrigado'>
                <h3>
                  Obrigado!
                </h3>
                <br />
                🐶 🏠 🦜
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
                <input type="email" name="email" />
                <textarea name="message"></textarea>
              </form>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
