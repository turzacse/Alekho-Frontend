import React from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-10">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold  text-center mb-10">
          Latest Blog Posts
        </h2>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl text-gray-600 font-bold  mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <NavLink
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
