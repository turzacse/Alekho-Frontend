import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-[#000000]'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;