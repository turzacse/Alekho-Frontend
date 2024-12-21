// import React from "react";

// const Gallery = () => {
//   // Example images for the gallery
//   const images = [
//     "/about.jpg",
//     "/slider2.jpg",
//     "/slider3.jpg",
//     "/slider4.jpg",
//     "/slider5.jpg",
//     "/slider6.jpg",
//     "/slider4.jpg",
//     "/slider5.jpg",
//   ];

//   return (
//     <div className="bg-black min-h-screen py-12 px-10">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-white">Our Gallery</h1>
//         <p className="text-gray-400 mt-2">Explore our collection of amazing photos</p>
//       </div>

//       {/* Gallery Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//         {images.map((image, index) => (
//           <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
//             {/* Image */}
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             />

//             {/* Hover Text */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//               <p className="text-white text-lg font-medium">Image {index + 1}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";

const Gallery = () => {
  // Example categories
  const categories = ["All", "Landscape", "Portrait", "Nature", "Architecture", "Fashion"];

  // Example images with categories
  const images = [
    { src: "/about.jpg", category: "Landscape" },
    { src: "/slider2.jpg", category: "Portrait" },
    { src: "/slider3.jpg", category: "Nature" },
    { src: "/slider4.jpg", category: "Architecture" },
    { src: "/slider5.jpg", category: "Fashion" },
    { src: "/slider6.jpg", category: "Nature" },
    { src: "/slider4.jpg", category: "Landscape" },
    { src: "/slider5.jpg", category: "Fashion" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" ? images : images.filter(image => image.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen py-12 px-10 flex">
      {/* Sidebar Section */}
      <div className="w-1/5 p-6 shadow-lg border-r-2 border-white">
        <h2 className="text-2xl font-bold text-white mb-6">Filter by Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="text-white mb-4 cursor-pointer" onClick={() => setSelectedCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="w-3/4 ml-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Our Gallery</h1>
          <p className="text-gray-400 mt-2">Explore our collection of amazing photos</p>
        </div>

        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Hover Text */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-medium">Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;



// import React, { useState, useEffect } from "react";

// const Gallery = () => {
//   // Initial array of images
//   const images = [
//     "/about.jpg",
//     "/slider2.jpg",
//     "/slider3.jpg",
//     "/slider4.jpg",
//     "/slider5.jpg",
//     "/slider6.jpg",
//     "/slider4.jpg",
//     "/slider5.jpg",
//   ];

//   // State to manage the current images (dynamic shuffling)
//   const [currentImages, setCurrentImages] = useState([...images]);

//   // State to manage the fading effect for each image
//   const [fadeStates, setFadeStates] = useState(
//     Array(images.length).fill(false)
//   );

//   // Function to shuffle and update a single image at a specific index
//   const updateImage = (index) => {
//     const shuffledImages = [...currentImages];
//     const newImage = images[Math.floor(Math.random() * images.length)];
//     shuffledImages[index] = newImage;

//     // Apply fade-out, update the image, then fade-in
//     const newFadeStates = [...fadeStates];
//     newFadeStates[index] = true; // Trigger fade-out

//     setFadeStates(newFadeStates);
//     setTimeout(() => {
//       setCurrentImages(shuffledImages); // Update the image
//       newFadeStates[index] = false; // Trigger fade-in
//       setFadeStates(newFadeStates);
//     }, 500); // Time for fade-out animation
//   };

//   // UseEffect to update each image at different intervals
//   useEffect(() => {
//     const intervals = currentImages.map((_, index) => {
//       return setInterval(() => {
//         updateImage(index); // Update image at this specific index
//       }, (index + 1) * 3000); // Stagger updates (3s, 6s, 9s, etc.)
//     });

//     return () => intervals.forEach((interval) => clearInterval(interval)); // Cleanup intervals
//   }, []);

//   return (
//     <div className="bg-black min-h-screen py-12 px-10">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-white">Our Gallery</h1>
//         <p className="text-gray-400 mt-2">
//           Explore our collection of amazing photos
//         </p>
//       </div>

//       {/* Gallery Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//         {currentImages.map((image, index) => (
//           <div
//             key={index}
//             className="group relative overflow-hidden rounded-lg shadow-lg"
//           >
//             {/* Image */}
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className={`w-full h-full object-cover transition-opacity duration-500 ${
//                 fadeStates[index] ? "opacity-0" : "opacity-100"
//               }`}
//             />

//             {/* Hover Text */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//               <p className="text-white text-lg font-medium">
//                 Image {index + 1}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
