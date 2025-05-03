import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-between py-4 gap-4'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;