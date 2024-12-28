import React from 'react';

const DashboardCard = ({title, value, color}) => {
    return (
        <div className={`bg-gradient-to-r ${color} h-[180px] p-6 rounded-lg`}>
            <p className='font-bold md:text-2xl text-white uppercase'>{title}</p>
            <p className='font-bold md:text-3xl text-white'>{value}</p>
        </div>
    );
};

export default DashboardCard;