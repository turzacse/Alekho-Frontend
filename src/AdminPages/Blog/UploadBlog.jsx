import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const UploadBlog = ({ form, handleChange, handleSubmit, closeModal }) => {
    const [thumbnail, setThumbnail] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnail(reader.result); // Save the image preview URL
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-950 rounded-lg shadow-lg p-6 md:w-1/2 mx-2 w-full">
                <div className="flex justify-between text-xl font-bold text-gray-50 uppercase mb-4">
                    <h2>Upload a New Blog</h2>
                    <button onClick={closeModal} className="text-red-600">
                        X
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 justify-between">
                        <div className="w-1/2">
                            {/* <div className="mb-4 relative">
                                <label className="block text-sm font-bold text-gray-50 uppercase mb-1" htmlFor="">Upload Thumbnil</label>
                                <div className="bg-white rounded-lg md:h-[200px] h-[200px] p-4">

                                </div>
                                <div className="absolute top-1/2 bottom-1/2 left-1/2 right-1/2 text-4xl text-gray-500 cursor-pointer"><FaCamera /></div>
                            </div> */}
                            <div className="mb-4 relative">
                                <label className="block text-sm font-bold text-gray-50 uppercase mb-1">
                                    Upload Thumbnail
                                </label>
                                <div className="bg-white rounded-lg md:h-[200px] h-[200px] p-4 flex items-center justify-center overflow-hidden">
                                    {thumbnail ? (
                                        <img
                                            src={thumbnail}
                                            alt="Thumbnail Preview"
                                            className=" h-full object-cover"
                                        />
                                    ) : (
                                        <div className="text-gray-500 text-4xl cursor-pointer">
                                            <FaCamera onClick={() => document.getElementById("thumbnailInput").click()} />
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    id="thumbnailInput"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    Author
                                </label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={form.author}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter Author Name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    HashTags (Max: 5)
                                </label>
                                <input
                                    type="text"
                                    id="hastags"
                                    name="hastags"
                                    value={form.hastags}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter hashtags"
                                    required
                                />
                            </div>

                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter blog title"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    Blog Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter blog description"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="shortDescription"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    Short Description
                                </label>
                                <input
                                    type="text"
                                    id="shortDescription"
                                    name="shortDescription"
                                    value={form.shortDescription}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter short description"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-bold text-gray-50 mb-1"
                                >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={form.category}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter blog title"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            type="submit"
                            className="bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        >
                            Upload Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadBlog;
