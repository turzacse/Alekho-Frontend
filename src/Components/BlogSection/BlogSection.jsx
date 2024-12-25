import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/slider1.jpg", // Replace with actual image URLs
      title: "10 Tips for Capturing Stunning Portraits",
      description: "Learn the secrets to capturing breathtaking portraits that tell a story.",
      link: "#",
    },
    {
      id: 2,
      image: "/slider2.jpg", // Replace with actual image URLs
      title: "Mastering Low Light Photography",
      description: "Discover techniques for taking perfect shots in low-light conditions.",
      link: "#",
    },
    {
      id: 3,
      image: "/slider6.jpg", // Replace with actual image URLs
      title: "Top Travel Photography Destinations in 2024",
      description: "Explore the best destinations for travel photography this year.",
      link: "#",
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
    <section className="bg-black text-white md:py-10 py-5">
      <div className="">
        {/* Section Heading */}
        <h2 className="text-3xl text-yellow-300 font-bold  text-center md:mb-10 mb-5">
          Latest Blog Posts
        </h2>

        {/* Blog Grid */}
        <div className="grid md:gap-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-300 rounded-b-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="md:text-xl text-gray-600 font-bold mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <NavLink
                  onClick={upcoming}
                  className="text-teal-500 hover:underline font-semibold"
                >
                  Read More →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
