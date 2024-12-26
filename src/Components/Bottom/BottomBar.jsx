import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars, FaUserPlus, FaImages, FaPhotoVideo } from "react-icons/fa";
import Swal from "sweetalert2";

const BottomBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
    <section className="fixed block md:hidden bottom-0 inset-x-0 bg-gray-950 text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Left Side: Home Icon */}
        <NavLink to="/" className="text-xl text-white hover:text-gray-400">
          <FaHome />
        </NavLink>


        <NavLink onClick={upcoming} className="text-xl hover:text-gray-400">
        <FaImages />
        </NavLink>

        <NavLink onClick={upcoming} className="text-xl hover:text-gray-400">
        <FaPhotoVideo />
        </NavLink>

        {/* Right Side: Menu Icon */}
        <button onClick={toggleDrawer} className="text-xl hover:text-gray-400">
          <FaBars />
        </button>
      </nav>

      {/* Drawer Menu */}
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
               <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Gallery</NavLink>
               <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Review</NavLink>
               <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Shop</NavLink>
               <NavLink to='/contact-us' className="text-white hover:text-gray-400">Contacts</NavLink>
               <NavLink onClick={upcoming}  className="text-white hover:text-gray-400">Pricing</NavLink>
               <button
                 onClick={toggleDrawer}
                 className="bg-orange-600 text-white py-2 px-4 rounded-md mt-auto hover:bg-orange-500 flex items-center gap-2">
                 <FaUserPlus className="" /> Join
               </button>
             </div>
           </div>
    </section>
  );
};

export default BottomBar;
