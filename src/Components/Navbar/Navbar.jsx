import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus, FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <section className="bg-gray-950">
      <nav className="text-white py-4 px-4 md:px-6 flex items-center justify-between container mx-auto">
        {/* Left Side: Logo + Website Name */}
        <NavLink to='/' className="flex items-center space-x-4">
          <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
          <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
        </NavLink>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-4 text-sm font-semibold uppercase">
          <NavLink to='/' className="text-white hover:text-gray-400">Home</NavLink>
          <NavLink to='/about' className="text-white hover:text-gray-400">About</NavLink>
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Gallery</NavLink> */}
          <NavLink to='/news-feed'  className="text-white hover:text-gray-400">News Feed</NavLink>
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Review</NavLink> */}
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Shop</NavLink> */}
          <NavLink to='/contact-us' className="text-white hover:text-gray-400">Contacts</NavLink>
          <NavLink onClick={upcoming} className="text-white hover:text-gray-400">Pricing</NavLink>
        </div>

        {/* Right Side: Icons and Join Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button
          onClick={upcoming} 
          >
            <FaSearch className="text-xl hover:text-gray-400" />
          </button>
          <button
          onClick={upcoming} 
          >
            <FaShoppingCart className="text-xl hover:text-gray-400" />
          </button>
          <button
            className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 flex items-center gap-2"
            onClick={toggleModal}
          >
            <FaUserPlus className="" /> Join
          </button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Drawer Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-gray-950 bg-opacity-70 z-50 transition-all duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={toggleDrawer}
      >
        <div className="w-2/3 bg-gray-950 h-full p-6 flex flex-col space-y-6">
          <div className="text-white flex justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
              <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
            </div>
            <button onClick={toggleDrawer} className="text-3xl">
              &times;
            </button>
          </div>
          <NavLink to='/' className="text-white hover:text-gray-400">Home</NavLink>
          <NavLink to='/about' className="text-white hover:text-gray-400">About</NavLink>
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Gallery</NavLink> */}
          <NavLink to='/news-feed'  className="text-white hover:text-gray-400">News Feed</NavLink>
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Review</NavLink> */}
          {/* <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Shop</NavLink> */}
          <NavLink to='/contact-us' className="text-white hover:text-gray-400">Contacts</NavLink>
          <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Pricing</NavLink>
          <button
            onClick={toggleModal}
            className="bg-orange-600 text-white py-2 px-4 rounded-md mt-auto hover:bg-orange-500 flex items-center gap-2">
            <FaUserPlus className="" /> Join
          </button>
        </div>
      </div>

      {/* Modal for Join Options */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-gray-950 w-4/5 sm:w-[600px] p-6 md:p-20 rounded-lg">
            <h2 className="text-white text-2xl font-semibold mb-4 text-center">Join With Us</h2>
            <div className="space-y-4">
              <button onClick={upcoming}  className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-500 transition duration-300">
                <FaFacebook className="text-xl" /> Join With Facebook
              </button>
              <button onClick={upcoming}  className="w-full bg-red-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-500 transition duration-300">
                <FaGoogle className="text-xl" /> Join With Google
              </button>
            </div>
            <button
              className="text-white mt-6 w-full text-center py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
