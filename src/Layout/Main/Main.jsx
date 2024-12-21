import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#000000] '>
            <Navbar/>
            <div className='container mx-auto md:px-6 px-4'>
            
            <Outlet/>
            
            </div>
            <Footer/>
        </div>
    );
};

export default Main;