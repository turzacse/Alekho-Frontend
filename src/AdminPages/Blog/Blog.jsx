import React, { useEffect, useState } from "react";
import UploadBlog from "./UploadBlog";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    thumbnail: "",
    description: "",
    shortDescription: "",
    category: "Photography",
    status: 'published',
    hastags: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch('https://alekho-backend.vercel.app/api/v1/blogs/get/all')
      .then(res => res.json())
      .then(data => setBlogs(data?.data));
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("FormData=====>>>", form);

      // Prepare the payload for the POST request


      // Perform the POST request
      const response = await axios.post(
        "https://alekho-backend.vercel.app/api/v1/blogs/create", // API endpoint
        form, // Data to be sent in the request
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success
      if (response.status === 201) {
        console.log("Blog created successfully:", response.data);

        // Clear form and close modal after successful submission
        setForm({ title: "", author: "", description: "", shortDescription: "", thumbnailUrl: "" });
        setIsModalOpen(false);

        // Optionally, refetch or update the blogs state
        console.log("Blogs Updated:", blogs);
      }
    } catch (error) {
      // Handle errors
      console.error("Error creating blog:", error.response?.data?.error);
    }
  };


  return (
    <div className="min-h-screen md:mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-gray-900 uppercase">Blog</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
          onClick={() => setIsModalOpen(true)}
        >
          Upload a new Blog
        </button>
      </div>

      {/* Table for Blogs */}
      {/* <table className="w-full border border-gray-300 bg-white rounded-md shadow-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="py-2 px-4 text-left text-gray-600 font-semibold">
              Title
            </th>
            <th className="py-2 px-4 text-left text-gray-600 font-semibold">
              Author
            </th>
            <th className="py-2 px-4 text-left text-gray-600 font-semibold">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{blog.title}</td>
                <td className="py-2 px-4">{blog.author}</td>
                <td className="py-2 px-4">{blog.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="py-4 px-4 text-center text-gray-500"
              >
                No blogs available. Create a new one!
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
          blogs?.map((blog) =>
            <div
              key={blog?._id}
              className="bg-gray-950 p-4 text-white relative"
            >
              <div className="absolute left-4 text-xl text-white bg-green-600 rounded-full p-1">
                <CiEdit />
              </div>
              <div className="absolute right-4 text-xl text-white bg-red-500 rounded-full p-1">
                <MdDeleteOutline />
              </div>
              <img className="mb-4" src={blog?.thumbnail} alt="" />
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
              <p > <strong>Author:</strong> {blog?.author}</p>
              <p> <strong>Title:</strong> {blog?.title}</p>
            </div>)
        }
      </div>

      {/* Modal for Create Blog */}
      {isModalOpen && (
        <UploadBlog
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Blog;
