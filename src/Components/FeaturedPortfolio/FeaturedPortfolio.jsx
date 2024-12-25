import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const FeaturedPortfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      img: "/slider1.jpg", 
      title: "Wedding Moments",
    },
    {
      id: 2,
      img: "/slider2.jpg",
      title: "Nature's Beauty",
    },
    {
      id: 3,
      img: "/slider3.jpg",
      title: "Corporate Events",
    },
    {
      id: 4,
      img: "/slider4.jpg",
      title: "Family Portraits",
    },
    {
      id: 5,
      img: "/slider5.jpg",
      title: "Golden Hour Magic",
    },
    {
      id: 6,
      img: "/slider6.jpg",
      title: "Creative Shoots",
    },
  ];

  const upcoming = (event) => {
    event.preventDefault(); // Prevent the default action
    Swal.fire({
      text: 'Coming Soon!',
      icon: 'warning',
      background: '#030712', // Dark background
      color: 'white',        // White text color for contrast
      confirmButtonColor: '#FF5733', // Optional: Customize button color
    });
  };

  return (
    <section className=" md:pt-10 pt-5">
      <div className="">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-300">Featured Portfolio</h2>
          <p className="text-gray-50 mt-2 ">
            A glimpse of our finest work that captures the essence of each moment.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden md:rounded-lg shadow-lg group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center md:my-10 my-5">
          <NavLink onClick={upcoming}  className="bg-yellow-400 btn btn-sm text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-300 transition">
            View Full Gallery
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
