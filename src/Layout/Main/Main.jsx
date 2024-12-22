import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Components/PageHeading/PageHeading';
import { usePageTitle } from '../../utils/pageTitles';

const Main = () => {
    const title = usePageTitle();

    return (
        <div className="bg-[#000000]">
            <Navbar />
            {title && <PageHeading title={title} />}
            <div className="container mt-0 mx-auto md:px-6 px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;


