import React from "react";

const Contactos = () => {
  return(
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.2675593157362!2d-8.654913519877883!3d41.39637029827904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245ad60b48d161%3A0x2d5b8008ba0ee9b2!2sR.+Eng.+Francisco+Costa+dos+Reis+249%2C+Arcos!5e1!3m2!1sen!2spt!4v1561035493902!5m2!1sen!2spt"
        height="400"
        id='map'
        title='map'
        frameBorder="0"
        style={{border: 0}}
        />
    </div>
  )
}

export default Contactos