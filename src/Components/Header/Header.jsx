import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: "/slider1.jpg", // Replace with your image URL
      text: "Welcome to Alekho (আলেখ্য) Photography",
    },
    {
      image: "/slider2.jpg",
      text: "Capture Your Moments",
    },
    {
      image: "/slider3.jpg",
      text: "Professional Photography Services",
    },
    {
      image: "/slider4.jpg",
      text: "Let the Light Tell the Story",
    },
    {
      image: "/slider5.jpg",
      text: "Cherish Your Memories Forever",
    },
  ];

  return (
    <header className="relative mx-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
