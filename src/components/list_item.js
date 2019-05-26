import React from 'react'
import Img from 'gatsby-image';

const ListItem = (props) => {
  return (
    <div className='list-item'>
      <Img className='list-image' fluid={props.image} alt='nós' />
      <div className='list-text'>
        {props.text}
      </div>
    </div>
  )
}

export default ListItem
