import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div className=''></div>
            <div className="nav flex gap-4 items-center text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login flex gap-3 items-center">
                <img src={user} alt="" />
                <button className='btn btn-secondary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;