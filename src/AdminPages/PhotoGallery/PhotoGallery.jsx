import React from 'react';

const PhotoGallery = () => {
    const galleryData = [{
        "info": {
          "captured_date": "2024-12-22T00:00:00.000Z",
          "captured_location": "Santorini, Greece",
          "captured_by": "Adnin",
          "captured_device": "Canon EOS 90D",
          "edited_by": "Adnin"
        },
        "_id": "676998b7b3b2d6350bc0ab76",
        "image": "uploads\\3b398685bfcba0d8c9acbac5f55fe947.png",
        "image_name": "Sunset Photo",
        "image_category": "Nature",
        "short_description": "A beautiful sunset view.",
        "long_description": "This photo captures a scenic sunset...",
        "gallery_album": "Nature Gallery",
        "createdAt": "2024-12-23T17:07:03.590Z",
        "updatedAt": "2024-12-23T17:07:03.590Z",
        "__v": 0
      }];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.map((item) => {
                    // Replace backslashes with forward slashes in the image URL
                    const imageUrl = item.image.replace(/\\/g, '/');
                    return (
                        <div key={item._id} className="border rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src={`uploads\\3b398685bfcba0d8c9acbac5f55fe947.png`} // Directly use the image URL
                                alt={item.image_name} 
                                className="w-full h-64 object-cover" 
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-medium">{item.image_name}</h3>
                                <p className="text-sm text-gray-600">{item.short_description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PhotoGallery;
