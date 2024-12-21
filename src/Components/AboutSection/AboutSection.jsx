import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white md:py-32 py-10">
      <div className="container mx-auto px-10 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold  mb-4">Who We Are</h2>
          {/* <p className=" text-lg mb-6 leading-relaxed">
            At <span className=" font-semibold">আলেখ্য</span>, we believe every moment tells a story. 
            With a passion for capturing life's most precious moments, we specialize in 
            photography that is creative, timeless, and deeply personal. Whether it’s a wedding, 
            corporate event, or a casual portrait, our team ensures that every click preserves 
            memories that last a lifetime.
          </p> */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed sm:leading-loose">
            At <span className="font-semibold">আলেখ্য</span>, we believe every
            moment tells a story. With a passion for capturing life's most
            precious moments, we specialize in photography that is creative,
            timeless, and deeply personal. Whether it’s a wedding, corporate
            event, or a casual portrait, our team ensures that every click
            preserves memories that last a lifetime.
          </p>
          <p className=" text-lg text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8  leading-relaxed">
            Based in <span className="font-semibold">Bangladesh</span>, we have
            worked with countless clients to create images that speak volumes.
            Let us help you turn moments into lasting art.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Who We Are"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
