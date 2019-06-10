import React from "react";
import Slider from "react-slick";
import ListItem from './list_item'

class Lista extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const list = [
      ['Serviço', require('../images/lista/servico.png')],
      ['Faqueiro', require('../images/lista/faqueiro.jpg')],
      ['Copos', require('../images/lista/copos.jpg')],
      ['Copos Cocktail', require('../images/lista/cocktail.jpg')],
      ['Kitchen Aid', require('../images/lista/kitchen.jpg')],
      ['Blender', require('../images/lista/blender.jpg')],
      ['Food Processor', require('../images/lista/processor.jpg')],
    ]
    
    return (
      <div className='card' id='lista'>
        <h3>
          lista
        </h3>
        <p>
          Texto descritivo
        </p>
        <Slider {...settings}>
          {list.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  image={item[1]}
                  text={item[0]}
                />
              )
            })}
        </Slider>
    </div>
    );
  }
}

export default Lista