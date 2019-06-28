import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './header.css'
import './index.css'
import './list_item.css'
import './lista.css'

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
          casamento={clickElement.bind(this, 'casamento')}
          lista={clickElement.bind(this, 'lista')}
          contactos={clickElement.bind(this, 'contactos')}
          clearTabs={clickElement.bind(this, 'all')}
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
  if (query === 'all') {
    hideAllCards()
  } else {
    if (document.getElementById(query).classList.contains('card-show')) {
      hideAllCards()
    } else {
      hideAllCards()
      document.getElementById(query).classList.add('card-show')
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
