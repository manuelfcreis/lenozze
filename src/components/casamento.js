import React from "react";

const nois = require('../images/nois.jpeg')

const Casamento = () => {
  return (
    <div className='card' id='casamento'>
      <h3>
        casamento
      </h3>
      <p>
        21 de setembro de 2019 - 16h
      </p>
      <p>
        O casamento celebra-se na <strong>Igreja de São Miguel de Arcos</strong>, seguido de festa na
        na Quinta da Torre, em Arcos (Vila do Conde), seguido de festa também na quinta.
      </p>
      <p>
        <strong>Igreja de São Miguel de Arcos</strong><br />
        R. da Igreja 209
      <br />
        Arcos, Vila do Conde
      <br />
        <a
          target='_blank' rel="noopener noreferrer"
          href='https://goo.gl/maps/5wbgaqLb97hFnSs57'>
          Mapa
      </a>
      </p>
      <p>
        <strong>Quinta da Torre</strong><br />
        Rua Eng. Francisco Costa Reis, 249
      <br />
        Arcos, Vila do Conde
      <br />
        <a
          target='_blank' rel="noopener noreferrer"
          href='https://goo.gl/maps/YGeUWViPSouwS59G9'>
          Mapa
      </a>
      </p>
      <img src={nois} alt='nós' />
    </div>
  )
}

export default Casamento