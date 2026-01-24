import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Vector1 from "../../assets/images/image_1.png";
import Vector2 from "../../assets/images/image_2.png";
import Vector3 from "../../assets/images/image_3.png";

const ImageSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div className="">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-500 absolute -top-6 ${
            activeSlide === i
              ? "bg-[#D4A34A] w-7 scale-80"
              : "bg-gray-300 w-3 h-3"
          }`}
        />
      </div>
    ),
  };

  return (
    <div className="hidden md:flex rounded-3xl h-200 items-center justify-center">
      <div className="w-full max-w-lg relative">
        <Slider {...settings}>
          {[Vector1, Vector2, Vector3].map((vector, index) => (
            <div key={index} className="flex justify-center items-center w-1/3">
              <img
                src={vector}
                alt={`Vector ${index + 1}`}
                className="w-[500px] h-[750px] object-cover rounded-2xl transition-all duration-500 bg-gray-100"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
