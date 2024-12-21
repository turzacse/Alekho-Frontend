import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Example: Here you can handle submission logic, like sending data to a server
  //   console.log("User Review Data: ", formData);

  //   // Show success message
  //   setSuccessMessage("Thank you for your review!");
  //   setFormData({ name: "", email: "", rating: "", feedback: "" }); // Reset form
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Alekho",
      from_name: formData.name,
      from_email: formData.email,
      from_rating: formData.rating,
      message: formData.feedback,
    };

    emailjs
      .send(
        "service_ushvm4s",
        "template_mu6mlro", 
        templateParams,
        "vrlkCZYPbhC9p05j6"
      )
      .then(
        (response) => {
          // console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Thank you for your review!");
          setFormData({ name: "", email: "", rating: "", feedback: "" }); 
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Submit Your Review
      </h1>

      {successMessage && (
        <p className="text-green-600 text-center mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Rating Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-3"
            htmlFor="rating"
          >
            Your Rating
          </label>
          <div className="relative">
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-200"
              required
            >
              <option value="">Select a rating</option>
              <option value="🥰 Excellent">🥰 Excellent</option>
              <option value="😃 Good">😃 Good</option>
              <option value="🙂 Average">🙂 Average</option>
              <option value="😞 Poor">😞 Poor</option>
              <option value="🤮 Terrible">🤮 Terrible</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Feedback Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="feedback"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Write your feedback here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-900 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  </div>
  );
};

export default Reviews;