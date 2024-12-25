// import React, { useState } from 'react';

// const BestOf2024 = () => {
//   // Array of image URLs
//   const images = [
//     '/slider1.jpg',
//     '/slider2.jpg',
//     '/slider3.jpg',
//     '/slider4.jpg',
//     '/slider5.jpg',
//     '/slider6.jpg',
//     '/slider1.jpg',
//     '/slider2.jpg',
//     '/slider3.jpg',
//     '/slider4.jpg',
//     '/slider5.jpg',
//     '/slider6.jpg',
//     '/slider1.jpg',
//     '/slider2.jpg',
//     '/slider3.jpg',
//     '/slider4.jpg',
//     '/slider5.jpg',
//     '/slider6.jpg',
//     '/slider1.jpg',
//     '/slider2.jpg',
//     '/slider3.jpg',
//     '/slider4.jpg',
//     '/slider5.jpg',
//     '/slider6.jpg',
//   ];


//   // State to manage the currently displayed image in the main body
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="text-white border-1 border-white py-12">
//       {/* Section Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-yellow-300">Best 24 of 2024</h2>
//         <p className="text-white mt-2">A showcase of the finest moments of the year</p>
//       </div>

//       {/* Main Image Display */}
//       <div className="w-full max-w-4xl mx-auto mb-8">
//         <div className="relative h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={mainImage}
//             alt="Main"
//             className="w-full h-full object-cover transition-transform duration-500"
//           />
//         </div>
//       </div>

//       {/* Image Scroll Carousel */}
//       <div className="w-full max-w-4xl mx-auto">
//         <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden h-16 md:h-28 rounded-lg shadow cursor-pointer"
//               onMouseEnter={() => setMainImage(image)} // Update the main image on hover
//             >
//               {/* Thumbnail Image */}
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-full"
//               />
//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white text-sm font-semibold">Image {index + 1}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestOf2024;








import React, { useState, useEffect } from "react";
import img from './2024logo.png'

const BestOf2024 = () => {
    // Array of image URLs
    const images = [
        "https://i.ibb.co.com/L63JzvH/2423.jpg",
        "https://i.ibb.co.com/QvdZTFP/2424.jpg",
        "https://i.ibb.co.com/thVkycQ/2422.jpg",
        "https://i.ibb.co.com/n8K1WHy/2421.jpg",
        "https://i.ibb.co.com/THpZZJ4/2420.jpg",
        "https://i.ibb.co.com/Pc51WQb/2419.jpg",
        "https://i.ibb.co.com/hWyhPFY/2418.jpg",
        "https://i.ibb.co.com/fHzqvYv/2417.jpg",
        "https://i.ibb.co.com/xCWtnz3/2416.jpg",
        "https://i.ibb.co.com/wzR8pq8/2415.jpg",
        "https://i.ibb.co.com/DCSV8TQ/2414.jpg",
        "https://i.ibb.co.com/ZW7K2mt/2413.jpg",
        "https://i.ibb.co.com/4fj5fmt/2412.jpg",
        "https://i.ibb.co.com/4VXvjLs/2411.jpg",
        "https://i.ibb.co.com/dkd3zBw/2410.jpg",
        "https://i.ibb.co.com/7Qbs8wD/2409.jpg",
        "https://i.ibb.co.com/b3DPV4W/2408.jpg",
        "https://i.ibb.co.com/wSYDZYM/2407.jpg",
        "https://i.ibb.co.com/82SYZw5/2406.jpg",
        "https://i.ibb.co.com/XXKh5B5/2405.jpg",
        "https://i.ibb.co.com/tJXtzTk/2404.jpg",
        "https://i.ibb.co.com/0FMzCYF/2403.jpg",
        "https://i.ibb.co.com/hHRtGvT/2402.jpg",
        "https://i.ibb.co.com/T09B38x/2401.jpg",
    ];

    // State to manage the currently displayed image in the main body
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the main image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    // Function to handle thumbnail hover
    const handleThumbnailHover = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="text-white md:py-10 py-5">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-5xl font-bold text-yellow-300 uppercase">Best 24 of</h2>
                <img className="max-w-1/2 mx-auto" src={img} alt="" />
                <p className="text-white mt-2">A showcase of the finest moments of the year</p>
            </div>

            {/* Main Image Display */}
            {/* <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt="Main"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div> */}
            <div className="w-full border-2 border-[#FEB113] p-2 max-w-4xl mx-auto mb-8">
                <div className="relative h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={images[currentIndex]}
                        alt="Main"
                        className="w-full h-full object-contain transition-transform duration-500"
                    />
                </div>
            </div>


            {/* Image Scroll Carousel */}
            <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden h-16 md:h-28 rounded-lg shadow cursor-pointer"
                            onMouseEnter={() => handleThumbnailHover(index)} // Update the main image on hover
                        >
                            {/* Thumbnail Image */}
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-full"
                            />
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm font-semibold">Image {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestOf2024;
