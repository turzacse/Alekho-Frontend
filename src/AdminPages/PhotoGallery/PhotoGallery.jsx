import React, { useEffect, useState } from 'react';
import useImageUpload from '../../Hooks/useImageUpload';
import Swal from 'sweetalert2';
import axios from 'axios';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const PhotoGallery = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { uploadImage, isLoading, error } = useImageUpload();
    const [albums, setAlbums] = useState([])
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

    useEffect(() => {
        fetch('https://alekho-backend.vercel.app/api/v1/albums/get/all')
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])

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

    console.log(form);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const uploadedUrl = await uploadImage(file);
                setForm((prevForm) => ({ ...prevForm, image: uploadedUrl }));
                console.log(uploadedUrl);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };


    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Submitted:", form);
    //     // Reset the form
    //     setForm({
    //         image: "",
    //         image_name: "",
    //         image_category: "",
    //         short_description: "",
    //         long_description: "",
    //         gallery_album: "",
    //         info: {
    //             captured_date: "",
    //             captured_location: "",
    //             captured_by: "",
    //             captured_device: "",
    //             edited_by: "",
    //         },
    //     });
    //     setDrawerOpen(false); // Close the drawer
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show initial loading Swal
        Swal.fire({
            title: "Uploading...",
            text: "Please wait while we process your request.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            // Make API call with Axios
            const response = await axios.post("https://alekho-backend.vercel.app/api/v1/gallery/create", form, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Handle success response
            Swal.fire({
                icon: "success",
                title: "Upload Successful!",
                text: "Your gallery item has been successfully uploaded.",
                confirmButtonText: "OK",
            });

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
        } catch (error) {
            // Handle errors (API or network)
            Swal.fire({
                icon: "error",
                title: "Upload Failed!",
                text: error.response?.data?.message || error.message || "Something went wrong. Please try again.",
                confirmButtonText: "OK",
            });
        }
    };

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
                    <div className="w-full overflow-y-auto max-w-md bg-gray-950 text-white p-6 pb-20 shadow-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="md:text-2xl font-medium uppercase mb-4">Upload a New Photo</h2>
                            <div onClick={() => setDrawerOpen(false)} className='md:text-2xl text-xl text-red-500 font-bold cursor-pointer'><IoIosCloseCircleOutline /></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Image URL */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="image">
                                    Upload Image
                                </label>

                                {form.image ? (
                                    <div className="mb-4">
                                        <img
                                            src={form.image}
                                            alt="Uploaded Preview"
                                            className="w-full h-auto rounded mb-2"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setForm((prevForm) => ({ ...prevForm, image: '' }))}
                                            className="text-red-500 underline text-sm"
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                ) : (
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                )}
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
                                <select
                                    id="gallery_album"
                                    name="gallery_album"
                                    value={form.gallery_album}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="" disabled>
                                        Select an album
                                    </option>
                                    {albums.map((album) => (
                                        <option key={album._id} value={album.name}>
                                            {album.name}
                                        </option>
                                    ))}
                                </select>
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
                                    name="info.captured_date"
                                    value={form?.info?.captured_date}
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
                                    name="info.captured_location"
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
                                    name="info.captured_by"
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
                                    name="info.captured_device"
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
                                    name="info.edited_by"
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
