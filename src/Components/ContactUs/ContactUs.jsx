import React from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
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
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-yellow-300 text-center md:mb-10 mb-5">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5">
          {/* Contact Form */}
          <div className="bg-gray-300 md:p-8 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl text-black font-semibold uppercase md:mb-6 mb-2">
              Get in Touch
            </h3>
            <form action="#" method="POST">
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border text-black border-gray-300 rounded-md md:p-3 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border text-black border-gray-300 rounded-md md:p-3 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="4"
                  className="w-full border text-black border-gray-300 rounded-md md:p-3 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={upcoming} 
                type="submit"
                className="bg-teal-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center md:space-y-6 space-y-1">
            <h3 className="text-2xl font-semibold ">Our Address</h3>
            <p className="text-gray-100">
              123 Photography Street, Dhaka, Bangladesh
            </p>

            <h3 className="text-2xl font-semibold ">Phone</h3>
            <p className="text-gray-100">+880 123 456 7890</p>

            <h3 className="text-2xl font-semibold ">Email</h3>
            <p className="text-gray-100">contact@alekho.com</p>

            {/* Optional: Embed Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg ">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.711157523939!2d90.39067271536306!3d23.793160584572104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b9b1a7c3d9%3A0x6c5a08a835d1f961!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1692453849382!5m2!1sen!2sbd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
