import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => (
  <nav>
    <ul>
      <li onClick={props.oDia}>o dia</li>
      <li onClick={props.lista}>lista</li>
      <li onClick={props.contactos}>contactos</li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  oDia: PropTypes.func,
  lista: PropTypes.func,
  contactos: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
