import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen text-white md:py-10 py-5">
            <div className="md:max-w-4xl md:mx-auto md:px-6">
                <div className="text-center">
                    <h2 className="text-3xl text-yellow-300 font-bold  mb-4">About ALEKHO</h2>
                    <p className="text-lg ">
                        Welcome to <span className="font-semibold text-blue-600">ALEKHO</span> – a place where every moment is captured with precision and passion. I am [Your Name], a photographer dedicated to telling compelling stories through the lens.
                    </p>
                </div>
                <div className="mt-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/about.jpg" // Replace with your actual photo URL
                            alt="Photographer"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">My Background & Experience</h3>
                        <p className="text-lg  mb-4">
                            With over 3 years of experience in photography, I specialize in capturing moments that last a lifetime. Whether it’s a wedding, portrait session, or commercial shoot, I always aim to create visually stunning images that reflect the true essence of the subject.
                        </p>
                        <p className="text-lg ">
                            My style is a blend of natural light and editorial aesthetics. I believe in storytelling through my work, ensuring that each image conveys emotion and depth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
