import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => (
  <nav>
    <div id='main-title'>
      <h1 onClick={props.clearTabs}>Carolina e Manuel</h1>
      <br />
      <p>21<span id='dot'>.</span>09<span id='dot'>.</span>2019</p>
    </div>
    <ul>
      <li onClick={props.casamento}>casamento</li>
      <li onClick={props.lista}>lista</li>
      <li onClick={props.contactos}>contactos</li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  casamento: PropTypes.func,
  lista: PropTypes.func,
  contactos: PropTypes.func,
  clearTabs: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
