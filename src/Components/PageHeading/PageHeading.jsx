import React from 'react';

const PageHeading = ({title}) => {
  return (
    <div
      className="w-full md:h-[250px] h-[100px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/slider1.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        margin: 0, 
        padding: 0,
      }}
    >
      <h1 className="text-white bg-[#F97316] p-2 rounded-lg text-[12px] md:text-2xl drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
