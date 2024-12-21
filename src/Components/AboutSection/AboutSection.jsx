import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white md:py-20 py-5">
      <div className=" flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="font-bold text-center md:text-left text-3xl text-yellow-300 mb-4">Who We Are</h2>
          <p className="text-base  mb-4 text-justify leading-relaxed sm:leading-loose">
            At <span className="font-semibold">আলেখ্য</span>, we believe every
            moment tells a story. With a passion for capturing life's most
            precious moments, we specialize in photography that is creative,
            timeless, and deeply personal. Whether it’s a wedding, corporate
            event, or a casual portrait, our team ensures that every click
            preserves memories that last a lifetime.
          </p>
          <p className=" mb-4 text-justify  leading-relaxed">
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
              className="md:rounded-lg border-2 border-white md:border-none shadow-lg object-cover mx-auto md:w-80 h-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
