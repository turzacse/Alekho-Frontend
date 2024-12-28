import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { FaRegCommentAlt, FaRegEye } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const NewsFeed = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://alekho-backend.vercel.app/api/v1/blogs/get/all')
            .then(res => res.json())
            .then(data => setBlogs(data?.data));
    }, [])
    return (
        <div className='min-h-screen py-5 bg-gray-300'>
            <div className="grid grid-cols-1 w-1/2 mx-auto gap-10">
                {
                    blogs?.map((blog) =>
                        <div
                            key={blog?._id}
                            className="bg-gray-950 p-4 text-white "
                        >
                            
                            <div className="flex justify-between">
                            <p > <strong>{blog?.author} </strong></p>
                            <p> <strong>Blog</strong> </p>
                            </div>
                            <img className="my-4" src={blog?.thumbnail} alt="" />
                            <div className="flex justify-between mb-4 text-md">
                                <div className="flex items-center gap-2">
                                    <AiOutlineLike /> <p>10</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaRegCommentAlt /> <p>4</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaRegEye /> <p>75</p>
                                </div>
                            </div>
                            
                            <p> <strong>{blog?.title}</strong></p>
                            <p>{blog.description?.slice(0,120)} . . . . <NavLink className='text-blue-400'>See More</NavLink></p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default NewsFeed;