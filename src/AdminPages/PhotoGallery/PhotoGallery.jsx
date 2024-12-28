import React, { useState } from 'react';

const PhotoGallery = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [form, setForm] = useState({
        image: "",
        image_name: "",
        image_category: "",
        short_description: "",
        long_description: "",
        gallery_album: "",
        info: {
            captured_date: "",
            captured_location: "",
            captured_by: "",
            captured_device: "",
            edited_by: "",
        },
    });

    // Handle form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("info.")) {
            const key = name.split(".")[1];
            setForm((prevForm) => ({
                ...prevForm,
                info: { ...prevForm.info, [key]: value },
            }));
        } else {
            setForm((prevForm) => ({ ...prevForm, [name]: value }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        // Reset the form
        setForm({
            image: "",
            image_name: "",
            image_category: "",
            short_description: "",
            long_description: "",
            gallery_album: "",
            info: {
                captured_date: "",
                captured_location: "",
                captured_by: "",
                captured_device: "",
                edited_by: "",
            },
        });
        setDrawerOpen(false); // Close the drawer
    };

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
        <div className="min-h-screen md:mt-5">
            <div className="">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="md:text-2xl font-bold text-gray-950 uppercase">Photo Gallery</h1>
                    <button
                        className="bg-blue-500 btn btn-sm hover:bg-blue-700 text-white font-bold py-2 md:text-[16px] text-[12px] px-4 rounded focus:outline-none uppercase"
                        onClick={() => setDrawerOpen(true)}
                    >
                        Upload a new Photo
                    </button>
                </div>
                <hr />

                {/* Album Grid */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div
                            
                            className="bg-gray-300 shadow-md rounded-lg md:p-4 p-2 border"
                        >
                           <img src="/logo.png" className='rounded-full w-1/2 ' alt="" />
                            <h3 className=" font-bold text-gray-800">
                                amar nam
                            </h3>
                            <p className="text-gray-600">
                                Event: <span className="font-medium text-[12px]  ">amar event</span>
                            </p>
                            <p className="text-gray-500">
                                Short Name: <span className="font-medium text-[12px]  ">ami</span>
                            </p>
                        </div>
                </div>
            </div>

            {/* Drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 ">
                    <div className="w-full overflow-y-auto max-w-md bg-gray-950 text-white p-6 shadow-lg">
                        <h2 className="md:text-2xl font-medium uppercase mb-4">Upload a New Photo</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Image URL */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="image">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>

                            {/* Image Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="image_name">
                                    Image Name
                                </label>
                                <input
                                    type="text"
                                    id="image_name"
                                    name="image_name"
                                    value={form.image_name}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter image name"
                                    required
                                />
                            </div>

                            {/* Image Category */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="image_category">
                                    Image Category
                                </label>
                                <input
                                    type="text"
                                    id="image_category"
                                    name="image_category"
                                    value={form.image_category}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter image category"
                                    required
                                />
                            </div>

                            {/* Short Description */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="short_description">
                                    Short Description
                                </label>
                                <textarea
                                    id="short_description"
                                    name="short_description"
                                    value={form.short_description}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter a short description"
                                    required
                                />
                            </div>

                            {/* Long Description */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="long_description">
                                    Long Description
                                </label>
                                <textarea
                                    id="long_description"
                                    name="long_description"
                                    value={form.long_description}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter a long description"
                                />
                            </div>

                            {/* Gallery Album */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="gallery_album">
                                    Gallery Album
                                </label>
                                <input
                                    type="text"
                                    id="gallery_album"
                                    name="gallery_album"
                                    value={form.gallery_album}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter album name (optional)"
                                />
                            </div>

                            {/* Info Fields */}
                            <h3 className="text-xl font-bold mb-2">Photo Information</h3>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="captured_date">
                                    Captured Date
                                </label>
                                <input
                                    type="date"
                                    id="captured_date"
                                    name="captured_date"
                                    value={form.info.captured_date}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="captured_location">
                                    Captured Location
                                </label>
                                <input
                                    type="text"
                                    id="captured_location"
                                    name="captured_location"
                                    value={form.info.captured_location}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter captured location"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="captured_by">
                                    Captured By
                                </label>
                                <input
                                    type="text"
                                    id="captured_by"
                                    name="captured_by"
                                    value={form.info.captured_by}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter photographer name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="captured_device">
                                    Captured Device
                                </label>
                                <input
                                    type="text"
                                    id="captured_device"
                                    name="captured_device"
                                    value={form.info.captured_device}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter device used"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="edited_by">
                                    Edited By
                                </label>
                                <input
                                    type="text"
                                    id="edited_by"
                                    name="edited_by"
                                    value={form.info.edited_by}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter editor's name"
                                    required
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PhotoGallery;
