import React from "react";

const Navbar = () => {
  return (
    <section className="bg-gray-950">
      <nav className=" text-white py-4 px-6 flex items-center justify-between container mx-auto">
      {/* Left Side: Menu Icon + Logo */}
      <div className="flex items-center space-x-4">
        <button className="text-white text-2xl">
          <i className="fas fa-bars"></i>
        </button>
        <img src="/logo.png" className="w-[40px] h-[40px]" alt="" />
        <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
        <a
          href="#"
          className="hover:text-gray-400 transition duration-300 relative"
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Blog
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Pages
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Gallery
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Shop
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Contacts
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Booking
        </a>
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center space-x-6">
        <button>
          <i className="fas fa-search text-xl hover:text-gray-400"></i> {/* Search */}
        </button>
        <button>
          <i className="fas fa-shopping-cart text-xl hover:text-gray-400"></i> {/* Cart */}
        </button>
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
