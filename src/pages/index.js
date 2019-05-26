import React from 'react'

import Layout from '../components/layout'
import ListItem from '../components/list_item'
import SEO from '../components/seo'
import Img from 'gatsby-image';
import { graphql } from "gatsby"

const list = [
  ['A bichinha gosta mesmo deste serviço', 'imagemUm'],
  ['E gosta ainda mais deste candeeiro', 'imagemDois'],
  ['E nem vamos falar desta maquinazinha', 'imagemTres'],
]

export const query = graphql`
  query {
    nois: file(relativePath: { eq: "nois.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagemUm: file(relativePath: { eq: "lista/1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagemDois: file(relativePath: { eq: "lista/2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagemTres: file(relativePath: { eq: "lista/3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagemQuatro: file(relativePath: { eq: "lista/4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


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
          <Img fluid={props.data.nois.childImageSharp.fluid} alt='nós' />
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
        <div className='card' id='lista'>
          <h3>
            lista
          </h3>
          <ul className='list-item-container'>
            {list.map((item) => {
              console.log(props.data)
              return (
                <li>
                  <ListItem
                    image={props.data[item[1]].childImageSharp.fluid}
                    text={item[0]}
                  />
                </li>
              )
            })}
          </ul>
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
  </Layout>
)

export default IndexPage
