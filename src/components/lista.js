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
      ['Serviço', require('../images/lista/servico.png'), (<p>Test</p>)],
      ['Faqueiro', require('../images/lista/faqueiro.jpg'), 'cutipol'],
      ['Copos', require('../images/lista/copos.jpg'), 'cutipol'],
      ['Copos Cocktail', require('../images/lista/cocktail.jpg'), (<p>Test <strong>2</strong></p>)],
      ['Kitchen Aid', require('../images/lista/kitchen.jpg'), 'payment'],
      ['Blender', require('../images/lista/blender.jpg'), 'payment'],
      ['Food Processor', require('../images/lista/processor.jpg'), 'payment'],
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
                  text={item[0]}
                  image={item[1]}
                  description={item[2]}
                />
              )
            })}
        </Slider>
    </div>
    );
  }
}

export default Lista