import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// documentação do carrossel: https://react-slick.neostack.com/docs/get-started

export default function SimpleSlider({ quant, arrayImg = [] }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("arrayImg:", arrayImg); // debug para ver se está chegando corretamente

  return (
    <Slider {...settings}>
      {arrayImg.slice(0, quant).map((item, index) => (
        <div key={index}>
          {console.log(item)}
          <img src={item} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
}
