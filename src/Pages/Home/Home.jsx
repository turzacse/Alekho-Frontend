import React from 'react';
import Header from '../../Components/Header/Header';
import FeaturedPortfolio from '../../Components/FeaturedPortfolio/FeaturedPortfolio';
import AboutSection from '../../Components/AboutSection/AboutSection';
import CallToAction from '../../Components/CallToAction/CallToAction';
import BlogSection from '../../Components/BlogSection/BlogSection';
import ContactUs from '../../Components/ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='py-10'>
            <Header/>
           {/* <img className='w-[100%] md:h-[600px] md:px-20 px-10 rounded-md' src="/photo1.jpg" alt="" /> */}
           <AboutSection/>
           <FeaturedPortfolio/>
           <CallToAction/>
           <BlogSection/>
           <ContactUs/>
        </div>
    );
};

export default Home;