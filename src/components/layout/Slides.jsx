import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesArray } from "../../utils/arrays";

function Slides() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed:3000,
    cssEase: "ease",
    dots: false,
    centerPadding: "10px",
    // responsive: [
    //   {
    //     breakpoint: 850,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 300,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className="slides">
      <Slider {...settings}>
        {slidesArray.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.img} alt="" />
            <div className="details">
              <h4>{slide.content}</h4>
              <button>Know more</button>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
}

export default Slides;
