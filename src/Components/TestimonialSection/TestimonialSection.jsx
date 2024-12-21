import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      role: "Wedding Client",
      image: "https://via.placeholder.com/100", // Replace with actual image URLs
      feedback:
        "Alekho Photography captured the most beautiful moments of my wedding. The photos were breathtaking, and the service was exceptional!",
    },
    {
      name: "Shakib Hossain",
      role: "Corporate Client",
      image: "https://via.placeholder.com/100", // Replace with actual image URLs
      feedback:
        "The team at Alekho Photography is professional and creative. They delivered amazing corporate headshots that exceeded my expectations!",
    },
    {
      name: "Nadia Islam",
      role: "Travel Blogger",
      image: "https://via.placeholder.com/100", // Replace with actual image URLs
      feedback:
        "I loved the way they captured the essence of my travel journey. The pictures truly tell a story and bring my blog to life!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="md:py-10 text-white py-5">
      <div className="">
        <h2 className="text-3xl text-yellow-300 font-bold text-center mb-8">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center">
              <img
                src='/logo.png'
                alt={testimonial.name}
                className="w-24 mx-auto h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm  mb-2">{testimonial.role}</p>
              <p className=" italic mx-auto max-w-2xl">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
