import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import FeaturedPortfolio from "../../Components/FeaturedPortfolio/FeaturedPortfolio";
import AboutSection from "../../Components/AboutSection/AboutSection";
import CallToAction from "../../Components/CallToAction/CallToAction";
import BlogSection from "../../Components/BlogSection/BlogSection";
import ContactUs from "../../Components/ContactUs/ContactUs";
import { use } from "react";
import Loading from "../../Components/loading/Loading";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-10">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {/* <img className='w-[100%] md:h-[600px] md:px-20 px-10 rounded-md' src="/photo1.jpg" alt="" /> */}
          <AboutSection />
          <FeaturedPortfolio />
          <CallToAction />
          <TestimonialSection/>
          <BlogSection />
          <ContactUs />
        </>
      )}
    </div>
  );
};

export default Home;
