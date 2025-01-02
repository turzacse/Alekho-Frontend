import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const Album = () => {
    // State for albums
    const [albums, setAlbums] = useState([]);
    const [form, setForm] = useState({ name: '', event: '' });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [oneAlbum, setOneAlbum] = useState({});

    // useEffect(() => {
    //     fetch('https://alekho-backend.vercel.app/api/v1/albums/get/all')
    //         .then(res => res.json())
    //         .then(data => setAlbums(data))
    // }, [])
    const fetchAlbums = async () => {
        try {
            const response = await fetch('https://alekho-backend.vercel.app/api/v1/albums/get/all');
            const data = await response.json();
            setAlbums(data);
        } catch (error) {
            console.error("Error fetching albums:", error);
        }
    };

    // Call the fetchAlbums function inside useEffect
    useEffect(() => {
        fetchAlbums();
    }, []);

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
            background: '#030712',
            color: 'white',
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
            fetchAlbums();
            Swal.fire({
                icon: "success",
                title: "Album Created Successfully!",
                text: "Your album has been added.",
                background: '#030712',
                color: 'white',
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
                background: '#030712',
                color: 'white',
                confirmButtonText: "OK",
            });
        }
    };

    const DeleteAlbum = (id) => {
        // Show confirmation prompt with swal2
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            background: '#1f2937', // gray-950 bg color
            color: 'white',         // white text
            confirmButtonColor: '#d33', // red color for delete button
            cancelButtonColor: '#3085d6', // blue color for cancel button
        }).then((result) => {
            if (result.isConfirmed) {
                // Make the delete request to the API if confirmed
                fetch(`https://alekho-backend.vercel.app/api/v1/albums/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data?.message == 'Album deleted successfully!') {
                            // Show success notification if deletion is successful
                            fetchAlbums();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Album deleted successfully!',
                                icon: 'success',
                                background: '#1f2937',
                                color: 'white',
                            });
                        } else {
                            // Handle any failure response
                            Swal.fire({
                                title: 'Failed!',
                                text: 'There was an error deleting the album.',
                                icon: 'error',
                                background: '#1f2937',
                                color: 'white',
                            });
                            fetchAlbums();
                        }
                    })
                    .catch((error) => {
                        // Handle fetch error
                        Swal.fire({
                            title: 'Error!',
                            text: 'An error occurred while trying to delete the album.',
                            icon: 'error',
                            background: '#1f2937',
                            color: 'white',
                        });
                    });
            }
        });
    };

    useEffect(()=>{
        if(oneAlbum?._id){
            setForm({
                name: oneAlbum?.name,
                event: oneAlbum?.event
            })
        }
    } ,[oneAlbum])

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
                            className="bg-gray-300 shadow-md rounded-lg md:p-4 p-2 border relative"
                        >
                            <div className="absolute left-1 top-1 text-md text-white bg-green-600 rounded-full p-1 cursor-pointer">
                                <CiEdit
                                onClick={() => 
                                {
                                    setDrawerOpen(true)
                                    setOneAlbum(album);
                                    
                                }
                                }
                                />
                            </div>
                            <div 
                            
                            className="absolute right-1 top-1 text-md text-white bg-red-500 rounded-full p-1 cursor-pointer ">
                                <MdDeleteOutline
                                onClick={() => {
                                    DeleteAlbum(album?._id)
                                }}
                                />
                            </div>
                            <img src="/logo.png" className='rounded-full w-1/2 ' alt="" />
                            <h3 className="mt-2 font-bold text-gray-800">
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
                    <div className={`w-full max-w-sm  text-white p-6 shadow-lg ${oneAlbum?._id ? 'bg-yellow-950': 'bg-gray-950'} `}>
                        {/* <h2 className="md:text-2xl font-medium uppercase mb-4">Create New Album</h2> */}
                        <div className="flex justify-between items-center">
                            <h2 className="md:text-2xl font-medium uppercase mb-4">
                                {
                                    oneAlbum?._id ? 'Edit Album' : 'Create New Album'
                                }
                                {/* Create New Album */}
                                </h2>
                            <div onClick={() => {
                                setDrawerOpen(false)
                                setOneAlbum({});
                                setForm({
                                    name: '',
                                    event: ''
                                })
                            }} className='md:text-2xl text-xl text-red-500 font-bold cursor-pointer'><IoIosCloseCircleOutline /></div>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="my-4">
                                <img className='rounded-xl max-w-full mx-auto' src="/logo.png" alt="" />
                                <label
                                    className="block text-center mt-2 text-green-500 text-[12px] font-bold mb-2"
                                    htmlFor="name"
                                >
                                    DEFAULT ALBUM THUMBNIL
                                </label>
                            </div>
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
                                    onClick={() => {
                                        setDrawerOpen(false)
                                        setOneAlbum({});
                                        setForm({
                                            name: '',
                                            event: ''
                                        })
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    {
                                        oneAlbum?._id ? 'Update Albun' : 'Create Album'
                                    }
                                    {/* Add Album */}
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
