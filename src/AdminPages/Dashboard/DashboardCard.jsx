import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardCard = ({title, value, color, link}) => {
    return (
        <NavLink to = {`/admin/${link}`} className={`bg-gradient-to-r ${color} h-[180px] p-6 rounded-lg`}>
            <p className='font-bold md:text-2xl text-white uppercase'>{title}</p>
            <p className='font-bold md:text-3xl text-white'>{value}</p>
        </NavLink>
    );
};

export default DashboardCard;