// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from "react-icons/fa";

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // Function to toggle the drawer
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <section className="bg-gray-950">
//       <nav className="text-white py-4 px-6 flex items-center justify-between container mx-auto">
//         {/* Left Side: Logo + Website Name */}
//         <div className="flex items-center space-x-4">
//           <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
//           <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
//         </div>

//         {/* Middle: Navigation Links */}
//         <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
//           <a href="#" className="hover:text-gray-400 transition duration-300 relative">
//             Home
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
//           </a>
//           <a href="#" className="hover:text-gray-400 transition duration-300">Blog</a>
//           <a href="#" className="hover:text-gray-400 transition duration-300">Pages</a>
//           <NavLink to='/gallery' className="hover:text-gray-400 transition duration-300">Gallery</NavLink>
//           <a href="#" className="hover:text-gray-400 transition duration-300">Shop</a>
//           <a href="#" className="hover:text-gray-400 transition duration-300">Contacts</a>
//           <a href="#" className="hover:text-gray-400 transition duration-300">Booking</a>
//           <NavLink to='/reviews' className="hover:text-gray-400 transition duration-300">Review</NavLink>
//         </div>

//         {/* Right Side: Icons and Join Button */}
//         <div className="hidden md:flex items-center space-x-6">
//           <button>
//             <FaSearch className="text-xl hover:text-gray-400" />
//           </button>
//           <button>
//             <FaShoppingCart className="text-xl hover:text-gray-400" />
//           </button>
//           <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 flex items-center gap-2">
//             <FaUserPlus className="" /> Join
//           </button>
//         </div>

//         {/* Mobile View */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleDrawer} className="text-2xl">
//             <FaBars />
//           </button>
//         </div>
//       </nav>

//       {/* Drawer Menu (Mobile) */}
//       <div
//         className={`fixed inset-0 bg-gray-950 bg-opacity-70 z-50 transition-all duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
//         onClick={toggleDrawer}
//       >
//         <div className="w-2/3 bg-gray-950 h-full p-6 flex flex-col space-y-6">
//           {/* Close the drawer on background click */}
//           <div className="text-white flex justify-between">
//             <div className="flex items-center space-x-4">
//               <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
//               <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
//             </div>
//             <button onClick={toggleDrawer} className="text-3xl">
//               &times;
//             </button>
//           </div>
//           <NavLink to='/' className="text-white hover:text-gray-400">Home</NavLink>
//           <NavLink to='/gallery' className="text-white hover:text-gray-400">Gallery</NavLink>
//           <NavLink to='/reviews' className="text-white hover:text-gray-400">Review</NavLink>
//           <NavLink to='/shop' className="text-white hover:text-gray-400">Shop</NavLink>
//           <NavLink to='/contacts' className="text-white hover:text-gray-400">Contacts</NavLink>
//           <NavLink to='/booking' className="text-white hover:text-gray-400">Booking</NavLink>

//           {/* Join Button */}
//           <button className="bg-orange-600 text-white py-2 px-4 rounded-md mt-auto hover:bg-orange-500 flex items-center ">
//             <FaUserPlus className="" /> Join
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus, FaFacebook, FaGoogle } from "react-icons/fa";

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

  return (
    <section className="bg-gray-950">
      <nav className="text-white py-4 px-6 flex items-center justify-between container mx-auto">
        {/* Left Side: Logo + Website Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" className="w-[40px] h-[40px]" alt="Logo" />
          <h1 className="text-xl font-bold tracking-wide">ALEKHO</h1>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-4 text-sm font-semibold uppercase">
          <NavLink to='/' className="text-white hover:text-gray-400">Home</NavLink>
          <NavLink to='/about' className="text-white hover:text-gray-400">About</NavLink>
          <NavLink to='/gallery' className="text-white hover:text-gray-400">Gallery</NavLink>
          <NavLink to='/reviews' className="text-white hover:text-gray-400">Review</NavLink>
          <NavLink to='/shop' className="text-white hover:text-gray-400">Shop</NavLink>
          <NavLink to='/contact-us' className="text-white hover:text-gray-400">Contacts</NavLink>
          <NavLink to='/pricing' className="text-white hover:text-gray-400">Pricing</NavLink>
        </div>

        {/* Right Side: Icons and Join Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button>
            <FaSearch className="text-xl hover:text-gray-400" />
          </button>
          <button>
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
          <NavLink to='/gallery' className="text-white hover:text-gray-400">Gallery</NavLink>
          <NavLink to='/reviews' className="text-white hover:text-gray-400">Review</NavLink>
          <NavLink to='/shop' className="text-white hover:text-gray-400">Shop</NavLink>
          <NavLink to='/contact-us' className="text-white hover:text-gray-400">Contacts</NavLink>
          <NavLink to='/booking' className="text-white hover:text-gray-400">Booking</NavLink>
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
              <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-500 transition duration-300">
                <FaFacebook className="text-xl" /> Join With Facebook
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-500 transition duration-300">
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
