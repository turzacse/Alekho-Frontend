const WhatWeDo = () => {
    const services = [
      {
        title: "Photography",
        description:
          "Capture your best moments with our professional photography services. We specialize in portraits, events, and more.",
        icon: "📷", // Example icon (can be replaced with an actual image or SVG)
      },
      {
        title: "Videography",
        description:
          "Bring your stories to life with our expert videography. Perfect for events, commercials, and creative projects.",
        icon: "🎥", // Example icon (can be replaced with an actual image or SVG)
      },
    ];
  
    return (
      <div className="w-full md:py-10 py-5">
        <h2 className="text-3xl font-bold text-center text-yellow-300 md:mb-8 mb-4">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
            //   className="flex flex-col items-center text-center bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            className="flex flex-col items-center text-center bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"

            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhatWeDo;
  