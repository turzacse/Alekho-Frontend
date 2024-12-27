import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdAddAPhoto, MdDashboard, MdOutlinePayment } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaBlog, FaCartArrowDown, FaHome } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { GiHamburgerMenu, GiMedicines } from "react-icons/gi";
import { LuBadgeHelp } from "react-icons/lu";
import { IoIosAlbums, IoMdLogOut } from "react-icons/io";
import { useState } from "react";

const DashboardLayout = () => {
    const [role, setRole] = useState("admin");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) =>
        path === location.pathname
            ? "bg-gray-400 text-black"
            : "hover:bg-gray-400 hover:text-black";

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen flex bg-[#fff]">
            {/* Sidebar */}
            <div
                className={`drawer-side lg:static fixed inset-0 bg-gray-950 text-white z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    } w-64 lg:w-auto`}
                // className={`drawer-side lg:static fixed inset-0 bg-[#006666] text-white z-50 transition-transform duration-300 ${
                //     isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                // } w-64 lg:w-auto`}
            >
                {/* Close Icon for Small Devices */}
                <button
                    className="absolute top-4 right-4 text-white text-2xl lg:hidden"
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar
                >
                    ✕
                </button>

                <ul className="menu w-64 h-full uppercase">
                    <div className="px-4 py-6 text-center">
                        <img
                            className="w-20 h-20 rounded-full mx-auto mb-2"
                            src="/logo.png"
                            alt="Profile"
                        />
                        <h3 className="text-lg font-bold">ALEKHO</h3>
                    </div>

                    {/* Sidebar Links */}
                    {role === "admin" && (
                        <>
                            <Link
                                to="/admin"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/admin"
                                )}`}
                            >
                                <MdDashboard className="text-xl" />
                                <span className="font-semibold">Dashboard</span>
                            </Link>
                            <Link
                                to="/admin/albums"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/admin/albums"
                                )}`}
                            >
                                <IoIosAlbums className="text-xl" />
                                <span className="font-semibold">Albums</span>
                            </Link>
                            <Link
                                to="/admin/photo-gallery"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/admin/photo-gallery"
                                )}`}
                            >
                                <MdAddAPhoto className="text-xl" />
                                <span className="font-semibold">Photo Gallery</span>
                            </Link>
                            <Link
                                to="/admin/blog"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/admin/blog"
                                )}`}
                            >
                                <FaBlog className="text-xl" />
                                <span className="font-semibold">Blog</span>
                            </Link>
                            {/* <Link
                                to="/dashboard/payments"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/dashboard/payments"
                                )}`}
                            >
                                <MdOutlinePayment className="text-xl" />
                                <span className="font-semibold">Payments</span>
                            </Link> */}
                            {/* <Link
                                to="/dashboard/membership"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/dashboard/membership"
                                )}`}
                            >
                                <LuBadgeHelp className="text-xl" />
                                <span className="font-semibold">Membership</span>
                            </Link>
                            <Link
                                to="/dashboard/order-history"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/dashboard/order-history"
                                )}`}
                            >
                                <FaCartArrowDown className="text-xl" />
                                <span className="font-semibold">Order History</span>
                            </Link>
                            <Link
                                to="/dashboard/medicines"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                    "/dashboard/medicines"
                                )}`}
                            >
                                <GiMedicines className="text-xl" />
                                <span className="font-semibold">Medicine</span>
                            </Link> */}
                        </>
                    )}
                </ul>

                {/* Footer Links */}
                <div className="absolute bottom-5 w-full px-4">
                    <ul>
                        <Link
                            to="/"
                            className={`py-2 pl-4 flex gap-2 items-center ${isActive("/")}`}
                        >
                            <FaHome className="text-xl" />
                            <span className="font-semibold">Home</span>
                        </Link>
                        <Link
                            to="#"
                            onClick={() => {
                                // Logout functionality here
                                navigate("/");
                            }}
                            className="py-2 pl-4 flex gap-2 items-center hover:bg-red-600 hover:text-white"
                        >
                            <IoMdLogOut className="text-xl" />
                            <span className="font-semibold">LogOut</span>
                        </Link>
                    </ul>
                </div>
            </div>


            {/* Main Content */}
            <div className="flex-grow h-screen flex flex-col">
                {/* Top Bar */}
                <div className="bg-gray-950 text-white py-3 px-4 flex justify-between items-center lg:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-2xl focus:outline-none"
                    >
                        <GiHamburgerMenu />
                    </button>
                    
                    <NavLink to="/" className="text-lg font-bold">
                        ALE<span className="text-yellow-300">KHO</span>
                    </NavLink>
                    <img src="/logo.png" className="w-[40px] h-[40px]" alt="" />
                </div>

                {/* Main Content */}
                <div className="flex-grow overflow-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
