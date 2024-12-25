import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 md:py-10 py-5">
      <div className="container mx-auto md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
          <div className="flex items-center space-x-4 mb-4">
          <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
          <h1 className="text-3xl font-bold tracking-wide">ALEKHO</h1>
        </div>
            <p className="text-sm">
              We are a creative team dedicated to delivering high-quality designs and solutions. 
              Feel free to reach out for any inquiries or collaborations.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 uppercase">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-teal-400 transition">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2 hover:text-teal-400 transition">
                <a href="#about">About Us</a>
              </li>
              <li className="mb-2 hover:text-teal-400 transition">
                <a href="#services">Services</a>
              </li>
              <li className="mb-2 hover:text-teal-400 transition">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="mb-2 hover:text-teal-400 transition">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 uppercase">Contact Info</h3>
            <ul>
              <li className="mb-2">123 Photography Street</li>
              <li className="mb-2">Dhaka, Bangladesh</li>
              <li className="mb-2">Phone: +880 123 456 7890</li>
              <li className="mb-2">Email: contact@alekho.com</li>
            </ul>
            <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
          </div>
          
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Alekho. All rights reserved.
          </p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div> */}
          <p className="text-sm">
            © Developed by <NavLink to='https://hexabytetm.web.app/' className='text-blue-600'>HexaByte TM Solution</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
