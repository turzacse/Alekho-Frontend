import React, { useState } from "react";
import UploadBlog from "./UploadBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    shortDescription: "",
    category: "Photography",
    hastags: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, form]); // Add new blog to the list
    console.log('FormData=====>>>', form)
    setForm({ title: "", author: "", description: "", shortDescription: "" }); // Clear the form
    setIsModalOpen(false); // Close the modal

    console.log(blogs)
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
      <table className="w-full border border-gray-300 bg-white rounded-md shadow-sm">
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
      </table>

      {/* Modal for Create Blog */}
      {isModalOpen && (
        <UploadBlog
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Blog;
