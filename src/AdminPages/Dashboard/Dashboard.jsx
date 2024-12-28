import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen md:mt-5">
            <div>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="md:text-2xl font-bold text-gray-950 uppercase">Dashboard</h2>
                    <button
                        className="bg-gray-950 btn btn-sm hover:bg-gray-900 text-white font-bold py-2 md:text-[16px] text-[12px] px-4 rounded focus:outline-none uppercase flex gap-2 items-center"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        <FaHome /> Home
                    </button>
                </div>


                {/* card */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-4'>
                    <DashboardCard title={'Album'} value={'10'} color={'from-blue-950 via-blue-500 to-blue-950'} />
                    <DashboardCard title={'Image'} value={'1000'} color={'from-red-950 via-red-500 to-red-950'} />
                    <DashboardCard title={'BLOG'} value={'4'} color={'from-yellow-950 via-yellow-500 to-yellow-950'} />
                    <DashboardCard title={'BLOG'} value={'4'} color={'from-pink-950 via-pink-500 to-pink-950'} />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;