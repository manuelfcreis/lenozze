import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './card.css'
import './header.css'
import './home.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          oDia={clickElement.bind(this, 'oDia')}
          lista={clickElement.bind(this, 'lista')}
          contactos={clickElement.bind(this, 'contactos')}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

const hideAllCards = () => {
  document.querySelectorAll('.card').forEach(x => {
    x.classList.remove('card-show')
  });
}

const clickElement = (query) => {
  if (document.getElementById(query).classList.contains('card-show')) {
    hideAllCards()
  } else {
    hideAllCards()
    document.getElementById(query).classList.add('card-show')
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
