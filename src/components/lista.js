import React from "react";
import Slider from "react-slick";
import ListItem from './list_item'
import list from '../list'

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