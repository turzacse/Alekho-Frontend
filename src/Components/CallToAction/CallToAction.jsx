import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gray-950 py-10 mt-4 text-white">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-3xl text-yellow-300 font-bold mb-4">
          Let Us Capture Your Story
        </h2>
        
        {/* Subtitle */}
        <p className=" lg:text-lg mb-8 px-4">
          Transform your precious moments into timeless memories. Get in touch today 
          and let our expert team bring your vision to life.
        </p>
        
        {/* Button */}
        <button className="bg-teal-500 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
