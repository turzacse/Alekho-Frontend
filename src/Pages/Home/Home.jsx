import React from 'react';
import Header from '../../Components/Header/Header';
import FeaturedPortfolio from '../../Components/FeaturedPortfolio/FeaturedPortfolio';
import AboutSection from '../../Components/AboutSection/AboutSection';

const Home = () => {
    return (
        <div className='py-10'>
            <Header/>
           {/* <img className='w-[100%] md:h-[600px] md:px-20 px-10 rounded-md' src="/photo1.jpg" alt="" /> */}
           <AboutSection/>
           <FeaturedPortfolio/>
        </div>
    );
};

export default Home;