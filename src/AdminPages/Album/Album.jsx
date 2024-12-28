import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Album = () => {
    // State for albums
    const [albums, setAlbums] = useState([
        // {
        //     name: "Wedding Album",
        //     event: "Wedding Ceremony",
        //     shortName: "WA",
        // },
        // {
        //     name: "Travel Memories",
        //     event: "Vacation 2023",
        //     shortName: "TM",
        // },
        // {
        //     name: "Family Album",
        //     event: "Family Reunion",
        //     shortName: "FA",
        // },
        // {
        //     name: "Family Album",
        //     event: "Family Reunion",
        //     shortName: "FA",
        // },
        // {
        //     name: "Family Album",
        //     event: "Family Reunion",
        //     shortName: "FA",
        // },
    ]);
    const [form, setForm] = useState({ name: '', event: '' });
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        fetch('https://alekho-backend.vercel.app/api/v1/albums/get/all')
        .then(res => res.json())
        .then(data => setAlbums(data))
    } ,[])

    // Handle form change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Show initial loading Swal
        Swal.fire({
            title: "Creating Album...",
            text: "Please wait while we create the album.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
    
        try {
            // Make API call with Axios
            const response = await axios.post(
                "https://alekho-backend.vercel.app/api/v1/albums/create",
                form, // The form containing { name, event }
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            // Handle success response
            Swal.fire({
                icon: "success",
                title: "Album Created Successfully!",
                text: "Your album has been added.",
                confirmButtonText: "OK",
            });
    
            // Reset the form
            setForm({ name: "", event: "" }); // Clear form inputs
            setDrawerOpen(false); // Close the drawer
        } catch (error) {
            // Handle errors (API or network)
            Swal.fire({
                icon: "error",
                title: "Failed to Create Album!",
                text: error.response?.data?.message || error.message || "Something went wrong. Please try again.",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="min-h-screen md:mt-5">
            <div className="">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="md:text-2xl font-bold text-gray-950 uppercase">Photo Albums</h1>
                    <button
                        className="bg-blue-500 btn btn-sm hover:bg-blue-700 text-white font-bold py-2 md:text-[16px] text-[12px] px-4 rounded focus:outline-none uppercase"
                        onClick={() => setDrawerOpen(true)}
                    >
                        Create New Album
                    </button>
                </div>
                <hr />

                {/* Album Grid */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {albums.map((album, index) => (
                        <div
                            key={index}
                            className="bg-gray-300 shadow-md rounded-lg md:p-4 p-2 border"
                        >
                           <img src="/logo.png" className='rounded-full w-1/2 ' alt="" />
                            <h3 className=" font-bold text-gray-800">
                                {album.name}
                            </h3>
                            <p className="text-gray-600">
                                Event: <span className="font-medium text-[12px]  ">{album.event}</span>
                            </p>
                            <p className="text-gray-500">
                                Short Name: <span className="font-medium text-[12px]  ">{album.shortName}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="w-full max-w-sm bg-gray-950 text-white p-6 shadow-lg">
                        <h2 className="md:text-2xl font-medium uppercase mb-4">Create New Album</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block  text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Album Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter album name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block  text-sm font-bold mb-2"
                                    htmlFor="event"
                                >
                                    Event Name
                                </label>
                                <input
                                    type="text"
                                    id="event"
                                    name="event"
                                    value={form.event}
                                    onChange={handleChange}
                                    className="shadow appearance-none text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter event name"
                                    required
                                />
                            </div>

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
                                    Add Album
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Album;
