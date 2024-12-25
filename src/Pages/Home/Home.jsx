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
import BestOf2024 from "../../Components/BestOf2024/BestOf2024";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:py-10 my-0">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {/* <img className='w-[100%] md:h-[600px] md:px-20 px-10 rounded-md' src="/photo1.jpg" alt="" /> */}
          <AboutSection />
          <FeaturedPortfolio />
          <BestOf2024/>
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
